const HeaderMenu = [
    {
        label: "New York",
        path: "#",
    },
    {
        label: "Dusseldorf",
        path: "#",
    },
    {
        label: "Sydney",
        path: "#",
    },
    {
        label: "Berlin",
        path: "#",
    },
    {
        label: "Mission",
        path: "#",
    },
];


export const FooterMenu = [
    {
        heading: "Information Links",
        menu: [
            { label: "Home", path: "#" },
            { label: "About Synergy", path: "#" },
            { label: "Advantage Synergy", path: "#" },
            { label: "NR Investors", path: "#" },
            { label: "Contact Us", path: "#" },
        ],
    },
    {
        heading: "Project Links",
        menu: [
            { label: "Residential Plotting Projects", path: "#" },
            { label: "Farm Plots", path: "#" },
            { label: "Re-Development", path: "#" },
            { label: "Delivered", path: "#" },
        ],
    },
];


export const FooterMenu2 = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Disclaimer", path: "/disclaimer" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
];


export const getMenuData = () => {
    return {
        HeaderMenu,
        FooterMenuCols: FooterMenu,
        FooterQuickLinks: FooterMenu2,
    }
}

