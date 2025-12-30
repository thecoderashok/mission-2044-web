import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from "react";
import { useLocation } from "react-router";
import MenuItem from "./MenuItem";
import styles from "./Header.module.scss";
import { Slant as Hamburger } from "hamburger-react";
import { useClassNames } from "../../hook/useClassNames";
import { useLenis } from "../../context/Lenis/LenisContext";
import gsap from "gsap";
import TransitionLink from "../TransitionLink";
// import { useLoader } from "../../context/Loader/LoaderContext";
import { getMenuData } from "../../lib/menu";
import Button from "../Button/Button";

const MainHeader = ({ isTransparent }) => {
    const { HeaderMenu } = getMenuData();
    // const { isMounted } = useLoader();
    const location = useLocation();

    const [isSticky, setIsSticky] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuBtnToggled, setMenuBtnToggled] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const headerRef = useRef(null);
    const lastScrollTop = useRef(0);
    const headerHeight = useRef(0);
    const menuPanelRef = useRef(null);
    const overlayRef = useRef(null);

    const [isMenuClosed, setIsMenuClosed] = useState(true);

    const classes = useClassNames();
    const lenis = useLenis();

    useEffect(() => {
        const ctx = gsap.matchMedia();

        ctx.add("(max-width: 991px)", () => {
            const header = document.querySelector("header");
            header.setAttribute("data-lenis-prevent", "true");
            if (!menuPanelRef?.current || !overlayRef?.current) return;

            const menuItems = menuPanelRef.current.querySelectorAll("nav > ul > li");

            if (!menuItems.length) return;

            gsap.set(overlayRef.current, {
                opacity: 0,
                visibility: "hidden",
                pointerEvents: "none",
            });
            gsap.set(menuPanelRef.current, { clipPath: "inset(0 0 100% 0)", display: "none" });

            if (menuBtnToggled) {
                if (menuOpen) {
                    lenis?.stop();

                    setIsAnimating(true);

                    gsap.set(menuPanelRef.current, {
                        willChange: "clip-path",
                        display: "flex",
                        clipPath: "inset(0 0 100% 0)",
                    });
                    gsap.set(menuItems, {
                        willChange: "opacity, transform",
                    });
                    gsap.set(overlayRef.current, {
                        visibility: "visible",
                        pointerEvents: "auto",
                        willChange: "opacity",
                    });

                    header.dataset.menuState = "opened";
                    setIsMenuClosed(false);

                    gsap.fromTo(
                        overlayRef.current,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            duration: 1,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.set(overlayRef.current, { clearProps: "willChange" });
                            },
                        }
                    );
                    gsap.fromTo(
                        menuPanelRef.current,
                        {
                            clipPath: "inset(0 0 100% 0)",
                        },
                        {
                            clipPath: "inset(0 0 0% 0)",
                            duration: 0.8,
                            ease: "power4.inOut",
                            onComplete: () => {
                                gsap.set(menuPanelRef.current, { clearProps: "willChange" });
                            },
                        }
                    );


                    gsap.fromTo(
                        menuItems,
                        {
                            y: 40,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            stagger: 0.05,
                            duration: 0.8,
                            delay: 0.6,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.set(menuItems, { clearProps: "all" });
                                setIsAnimating(false);
                            },
                        }
                    );
                } else {
                    setIsAnimating(true);

                    gsap.set(menuPanelRef.current, {
                        willChange: "transform",
                        display: "flex",
                    });
                    gsap.set(overlayRef.current, {
                        visibility: "visible",
                        pointerEvents: "none",
                        willChange: "opacity",
                    });

                    gsap.fromTo(
                        menuPanelRef.current,
                        { clipPath: "inset(0 0 0% 0)" },
                        {
                            clipPath: "inset(0 0 100% 0)",
                            duration: 0.8,
                            ease: "power3.inOut",
                            onComplete: () => {
                                gsap.set(menuPanelRef.current, {
                                    clearProps: "willChange",
                                    display: "none",
                                });
                                header.dataset.menuState = "closed";
                                setIsMenuClosed(true);
                                lenis?.start();
                            },
                        }
                    );

                    gsap.fromTo(
                        overlayRef.current,
                        {
                            opacity: 1,
                        },
                        {
                            opacity: 0,
                            duration: 0.5,
                            delay: 0.3,
                            ease: "power3.inOut",
                            onComplete: () => {
                                gsap.set(overlayRef.current, { clearProps: "all" });
                                setIsAnimating(false);
                            },
                        }
                    );
                }
            }
        });

        return () => ctx.revert();
    }, [menuOpen, lenis, menuBtnToggled]);

    const handleMenuBtnClick = () => {
        if (isAnimating) return;
        setMenuOpen((prev) => !prev);
        setMenuBtnToggled(true);
    };

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;

        if (scrollTop < 100) {
            setIsSticky(false);
        } else if (scrollTop > headerHeight.current) {
            setIsSticky(true);
        }

        if (!menuOpen) {
            if (scrollTop > lastScrollTop.current && scrollTop > 200) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }

        lastScrollTop.current = Math.max(scrollTop, 0);
    }, [menuOpen]);

    useEffect(() => {
        if (headerRef.current) {
            headerHeight.current = headerRef.current.offsetHeight;
        }
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        setTimeout(() => {
            setMenuOpen(false);
            setMenuBtnToggled(false);
            setIsMenuClosed(true);
            setIsAnimating(false);
            lenis?.start();
        }, 500);
    }, [location.pathname, lenis]);

    const computedClassName = useMemo(() => {
        return classes(
            styles.main_header,
            isTransparent && styles.transparent,
            isSticky && styles.sticky_header,
            isHidden && styles.hide
        );
    }, [isTransparent, isSticky, isHidden, classes]);

    return (
        <header
            className={computedClassName}
            ref={headerRef}
            data-hidden={isHidden}
            data-sticky={isSticky}
        >
            <div className={`container ${styles.container}`}>
                <div className={`${styles.inner} row`}>
                    <div className={`col-auto ${styles.logo_wrapper}`}>
                        <TransitionLink className={styles.header_logo} href="/" aria-label="Header Logo">
                            <img
                                src="/logos/main-logo.svg"
                                alt="Header Logo"
                                className={styles.logo_img}
                                loading="eager"
                                decoding="async"
                            />
                        </TransitionLink>
                    </div>

                    <div className={`${styles.right_side} col-auto`}>
                        <nav
                            className={styles.menu_nav}
                            data-state={menuOpen ? "opened" : "closed"}
                            ref={menuPanelRef}
                            aria-label="Right navigation"
                        >
                            <ul className={styles.menu_list}>
                                {HeaderMenu.map((item, index) => (
                                    <MenuItem
                                        menuItem={item}
                                        menuItemIndex={index}
                                        isMenuClosed={isMenuClosed}
                                        key={index}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>


                    <div className={`col-auto ${styles.actions}`}>
                        <Button
                            textLabel="Contact Us"
                            customClass={classes(styles.cta_btn, "bordered-transparent")}
                        />
                    </div>

                    <div
                        className={classes("col-auto", styles.menu_btn_wrapper)}
                        data-state={menuOpen ? "opened" : "closed"}
                    >
                        <div className={classes(styles.menu_btn)}>
                            <Hamburger
                                size={26}
                                toggled={menuOpen}
                                onToggle={handleMenuBtnClick}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={styles.overlay}
                ref={overlayRef}
                onClick={() => setMenuOpen(false)}
            ></div>
        </header>
    );
};

export default MainHeader;
