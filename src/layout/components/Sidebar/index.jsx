"use client";
import React, { useEffect, useMemo, useState, memo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";
import logo from "./assets/logo.svg";
import feather from "feather-icons";
import menuData from "./data/SidebarData.json";
import ICONS from "@/lib/utils/icons";
import SidebarIcons from "./data/sidebarIcon";
import { useNavigate } from "react-router";

const Sidebar = ({ userRole = "admin" }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    const navigate = useNavigate();
    const [expandedGroups, setExpandedGroups] = useState({});

    const location = useLocation();

    const fullPath = useMemo(() => {
        return location.pathname || window.location.pathname;
    }, [location.pathname]);

    const isItemActive = useCallback(
        (item) => {
            const normalizedFullPath = fullPath.replace(/^\/|\/$/g, "");
            const normalizedItemLink = item.link ? item.link.replace(/^\/|\/$/g, "") : "";

            if (item.link === "/" && normalizedFullPath === "") {
                return true;
            }

            if (normalizedFullPath === normalizedItemLink) {
                return true;
            }

            const isPathMatch = (menuItemLink) => {
                const normalizedLink = menuItemLink.replace(/^\/|\/$/g, "");
                const pathSegments = normalizedFullPath.split("/");
                const linkSegments = normalizedLink.split("/");
                return normalizedFullPath === normalizedLink || (pathSegments[0] === linkSegments[0] && pathSegments.length === linkSegments.length);
            };

            if (item.link && isPathMatch(item.link)) {
                return true;
            }
            if (item.paths && item.paths.some((path) => isPathMatch(path))) {
                return true;
            }
            if (item.child) {
                return item.child.some((childItem) => isItemActive(childItem));
            }
            return false;
        },
        [fullPath]
    );

    useEffect(() => {
        const determineExpandedGroups = (items) => {
            const newExpandedGroups = {};

            items.forEach((item) => {
                if (item.child) {
                    const isGroupActive = item.child.some(isItemActive);
                    if (isGroupActive) {
                        newExpandedGroups[item.name] = true;
                    }
                }
            });

            setExpandedGroups((prev) => {
                const updatedGroups = { ...prev };
                Object.keys(newExpandedGroups).forEach((key) => {
                    updatedGroups[key] = true;
                });
                return updatedGroups;
            });
        };

        determineExpandedGroups(menuData);
    }, [fullPath, menuData, isItemActive]);

    useEffect(() => {
        const savedState = localStorage.getItem("expandedGroups");
        if (savedState) setExpandedGroups(JSON.parse(savedState));
    }, []);

    useEffect(() => {
        localStorage.setItem("expandedGroups", JSON.stringify(expandedGroups));
    }, [expandedGroups]);

    const isItemVisible = useCallback(
        (item) => {
            return !item.permission || item.permission.includes(userRole);
        },
        [userRole]
    );

    const toggleMenuGroup = useCallback((groupName) => {
        setExpandedGroups((prev) => {
            const currentState = prev[groupName] ?? false;
            return {
                ...prev,
                [groupName]: !currentState,
            };
        });
    }, []);

    useEffect(() => {
        feather.replace();
    }, []);

    const handleMenuItemClick = useCallback(
        (item) => {
            console.log(item);
            if (item && item !== fullPath) {
                navigate(item);
            }
        },
        [fullPath]
    );
    const renderMenuItem = useCallback(
        (item, index) => {
            const isChildMenu = typeof index === "boolean" ? index : false;

            if (!isItemVisible(item)) return null;

            if (item.child) {
                const isGroupExpanded = isSidebarOpen && !isChildMenu && (expandedGroups[item.name] ?? false);
                const isGroupActive = isItemActive(item);

                return (
                    <React.Fragment key={item.name}>
                        {isSidebarOpen && !isChildMenu && (
                            <li
                                className={`
                                ${styles.group_menu} 
                                ${isGroupExpanded ? styles.active_group_menu : ""} 
                                ${isGroupActive ? styles.active : ""}
                                ${item.className ? styles[item.className] : ""}
                            `}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMenuGroup(item.name);
                                }}
                            >
                                {/* <i data-feather={isGroupActive ? item.activeIcon || item.icon : item.icon}></i> */}
                                {SidebarIcons?.[item.activeIcon?.toUpperCase() || item.icon?.toUpperCase() || item.name.toUpperCase()]}
                                <p>
                                    {" "}
                                    <span>{item.name}</span>
                                    <span className={isGroupExpanded ? styles.transform : ""}>{ICONS.ARROW_RIGHT}</span>
                                </p>
                            </li>
                        )}
                        {isGroupExpanded && item.child.filter(isItemVisible).map((childItem) => renderMenuItem(childItem, true))}
                    </React.Fragment>
                );
            }

            return (
                <li
                    key={item.name}
                    onClick={() => handleMenuItemClick(item.link ? item.link : "")}
                    className={`
                    ${styles.menuItem}
                    ${isItemActive(item) ? styles.active : ""}
                    ${!isSidebarOpen ? styles.collapsedMenuItem : ""}
                    ${item.className ? styles[item.className] : ""}
                `}
                    title={item.name}
                >
                    {item.icon ? (
                        <span className={styles.sidebar_icon}>{SidebarIcons?.[item.activeIcon?.toUpperCase() || item.icon?.toUpperCase() || item.name.toUpperCase()]}</span>
                    ) : (
                        <span className={styles.circle_icon}>{ICONS.CIRCLE}</span>
                    )}
                    {isSidebarOpen && <p className={styles.title}>{item.name}</p>}
                </li>
            );
        },
        [isSidebarOpen, expandedGroups, isItemVisible, isItemActive, toggleMenuGroup, handleMenuItemClick]
    );

    return (
        <div className={isSidebarOpen ? styles.overlay : ""} onClick={toggleSidebar}>
            <div onClick={(event) => event.stopPropagation()} className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.collapsed}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" width={35} height={25} />
                    {isSidebarOpen && (
                        <span onClick={toggleSidebar} className={styles.logoText}>
                            Asset {ICONS.CIRCLE_DOT}
                        </span>
                    )}
                </div>

                <nav className={styles.nav}>
                    <ul>{menuData.map((item) => renderMenuItem(item, false))}</ul>
                </nav>
            </div>
        </div>
    );
};

export default memo(Sidebar);
