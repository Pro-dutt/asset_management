import React, { useEffect } from "react";
import styles from "./index.module.css";
import profileIcon from "./assets/profileIcon.png";
import Dropdown from "@/components/DropDown";
import ICONS from "@/lib/utils/icons";
import { Link } from "react-router-dom";
import { useTheme } from "@/services/context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div className={styles.container__wrapper}>
            <header className={styles.navbar}>
                {/* <div className={styles.search_bar}>
                    <span>{ICONS.SEARCH}</span>
                    <p>
                        Search <span>⌘K</span>
                    </p>
                </div> */}
                <ul className={styles.left_icon}>
                    <li>
                        <Dropdown
                            trigger={
                                <p className={styles.menu_list_icon} onClick={toggleTheme}>
                                    {theme === "light" ? ICONS.THEME : ICONS.MOON}
                                </p>
                            }
                        />
                    </li>
                    {/* <li>
                        <Dropdown
                            trigger={<p className={styles.menu_list_icon}>{ICONS.GRID}</p>}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Dashboard More</div>
                                </div>
                            }
                        />
                    </li>
                    <li>
                        <Dropdown
                            dropDownContainerClass={styles.dropdownContent}
                            trigger={<p className={styles.menu_list_icon}>{ICONS.NOTIFICATION}</p>}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Notifications</div>
                                </div>
                            }
                        />
                    </li> */}
                    {/* <li>
                        <Dropdown
                            dropDownContainerClass={styles.dropdownContent}
                            trigger={<img src={profileIcon} alt="" />}
                            content={
                                <div>
                                    <div className={styles.menuLinksContainer}>Profile Info</div>
                                </div>
                            }
                        />
                    </li>
                    <li className={styles.userInfo}>
                        <Dropdown
                            dropDownContainerStyle={{ minWidth: "250px" }}
                            dropDownContainerClass={styles.dropdownContent}
                            trigger={<span className={styles.userIcon}></span>}
                            content={
                                <div className={styles.dropdownMenu}>
                                    <div className={styles.userContainer}>
                                        <span>
                                            <img src={"/images/profile.webp"} alt="User Profile" width={50} height={50} className={styles.profileimg} />
                                        </span>
                                        <div className={styles.username}>
                                            <span>{"Name"}</span>
                                            <span>{"Role"}</span>
                                        </div>
                                    </div>
                                    <div className={styles.menuLinksContainer}>
                                        <div className={styles.links}>
                                            <Link to="/user-profile">
                                                <span>{ICONS.USER}</span>
                                                <span>Profile</span>
                                            </Link>
                                        </div>
                                        <div>
                                            <hr className={styles.vDivider} aria-orientation="horizontal" role="separator"></hr>
                                            <Link to="/user/logout" className={styles.logoutBtn}>
                                                <span>Logout</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </li> */}
                </ul>
            </header>
        </div>
    );
};

export default Navbar;
