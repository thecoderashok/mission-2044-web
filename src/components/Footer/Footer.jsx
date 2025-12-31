import React, { useMemo } from "react";
import "./styles.scss";
import { getMenuData } from "../../lib/menu";
import Image from "../Image";
import TransitionLink from "../TransitionLink";
import Button from "../Button/Button";

function Footer() {
    const menuData = useMemo(() => getMenuData(), []);
    const { FooterMenuCols, FooterQuickLinks } = menuData;

    const SocialLinks = [
        { label: "Facebook", path: "#", icon: "fa-brands fa-facebook-f" },
        { label: "Instagram", path: "#", icon: "fa-brands fa-instagram" },
        { label: "LinkedIn", path: "#", icon: "fa-brands fa-linkedin" },
    ];
    const MenuCols = FooterMenuCols || [];
    const currentYear = new Date().getFullYear();


    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-section footer-main">
                    <div className="footer-logo-col">
                        <TransitionLink href={"/"} aria-label="Go to Home Page" className="logo-wrapper">
                            <Image
                                src={`/logos/main-logo.svg`}
                                alt="Footer Logo"
                                width={120}
                                height={120}
                                priority
                            />
                        </TransitionLink>
                    </div>

                    <div className="footer-cta">
                        <p>
                            Connect with the minds  that are shaping the future of defense innovation
                        </p>
                        <Button
                            revealAnimation={true}
                            revealDelay={0.2}
                            textLabel={"Join Us"}
                            customClass={"bordered-transparent"}
                        />
                    </div>

                </div>

                <div className="footer-section footer-main">
                    <div className="footer-menu-col">
                        {MenuCols.map((col, index) => (
                            <div className="footer-menu-group" key={index}>
                                {/* <h4 className="col-heading">{col.heading}</h4> */}
                                <ul className="menu-list">
                                    {col.menu?.map((item) => (
                                        <li key={item.label}>
                                            <TransitionLink href={item.path}>{item.label}</TransitionLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="footer-social-col">
                        {/* <span className="footer-heading">Follow us</span> */}
                        <ul className="social-list">
                            {SocialLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.path} aria-label={item.label} title={item.label}>
                                        <i className={item.icon}></i>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="footer-section footer-bottom">
                    <div className="footer-credit">
                        <p>MISSION 2044® is a registered trademark of MISSION 2044</p>
                    </div>
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} MISSION 2044. All rights reserved.</p>
                    </div>
                    <div className="footer-bottom-menu">
                        <ul className="menu-list">
                            {FooterQuickLinks?.map((item) => (
                                <li key={item.label}>
                                    <TransitionLink href={item.path}>{item.label}</TransitionLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
