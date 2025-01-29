import boardingConstants from "./constants";

class VirtualMachineUtils {
    static capitalizeSentence(sentence, capitalizeAll = true) {
        if (typeof sentence !== "string") {
            throw new TypeError("Input must be a string");
        }

        const trimmedSentence = sentence.trim();

        if (capitalizeAll) {
            const words = trimmedSentence.split(/\s+/);
            const capitalizedWords = words.map((word) => {
                if (word.length === 0) return "";
                return word[0].toUpperCase() + word.slice(1).toLowerCase();
            });
            return capitalizedWords.join(" ");
        } else {
            if (trimmedSentence.length === 0) return "";
            return trimmedSentence[0].toUpperCase() + trimmedSentence.slice(1).toLowerCase();
        }
    }
    static getInstituteOptions() {
        return Object.values(boardingConstants.INSTITUTE_TYPES || {}).map((instituteType) => ({ value: instituteType, label: this.capitalizeSentence(instituteType) }));
    }
    static getGenericOptions() {
        return Object.values(boardingConstants.GENDER_TYPE || {}).map((genderType) => ({ value: genderType, label: this.capitalizeSentence(genderType) }));
    }

    /**
     * Validates and handles navigation between wizard steps
     * @param {string} currentStatus - User's current completion status
     * @param {string} targetStep - Step user is trying to navigate to
     * @param {string} baseUrl - Base URL for navigation (default: 'http://localhost:3000/boarding')
     * @returns {object} Navigation result with redirect URL and validation status
     */

    static handleWizardNavigation = (currentStatus, baseUrl) => {
        const urlParams = new URLSearchParams(window.location.search);
        const targetStep = urlParams.get("wizardStep");
        if (!baseUrl) {
            const url = new URL(window.location.href);
            baseUrl = `${url.origin}${url.pathname}`;
        }
        try {
            // Validate inputs
            if (!boardingConstants.WIZARD_STEP.hasOwnProperty(currentStatus) || !boardingConstants.WIZARD_STEP.hasOwnProperty(targetStep)) {
                throw new Error("Invalid status or target step provided");
            }

            const currentStepValue = boardingConstants.WIZARD_STEP[currentStatus];
            const targetStepValue = boardingConstants.WIZARD_STEP[targetStep];

            // Special case: If user has completed a later step, allow navigation to previous steps
            if (currentStepValue > targetStepValue) {
                return {
                    isAllowed: true,
                    redirectUrl: `${baseUrl}?wizardStep=${targetStep}`,
                    message: "Navigation allowed - accessing previous step",
                };
            }

            // Don't allow skipping steps
            if (targetStepValue > currentStepValue + 1) {
                return {
                    isAllowed: false,
                    redirectUrl: `${baseUrl}?wizardStep=${currentStatus}`,
                    message: "Cannot skip steps - redirecting to current step",
                };
            }

            // Allow navigation to next immediate step
            if (targetStepValue === currentStepValue + 1) {
                return {
                    isAllowed: true,
                    redirectUrl: `${baseUrl}?wizardStep=${targetStep}`,
                    message: "Navigation allowed - proceeding to next step",
                };
            }

            // Allow staying on current step
            if (targetStepValue === currentStepValue) {
                return {
                    isAllowed: true,
                    redirectUrl: `${baseUrl}?wizardStep=${targetStep}`,
                    message: "Navigation allowed - remaining on current step",
                };
            }

            // Default case - shouldn't reach here but handle it gracefully
            return {
                isAllowed: false,
                redirectUrl: `${baseUrl}?wizardStep=${currentStatus}`,
                message: "Invalid navigation attempt - redirecting to current step",
            };
        } catch (error) {
            // Handle any errors and return to a safe state
            console.error("Navigation error:", error);
            return {
                isAllowed: false,
                redirectUrl: `${baseUrl}?wizardStep=SIGNUP`,
                message: "Error occurred - redirecting to beginning",
            };
        }
    };
}

export default BoardingUtils;
