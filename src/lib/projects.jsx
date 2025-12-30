const projectsData = [
    {
        title: "Satvam Hills",
        slug: "satvam-hills",
        folder_name: "satvam-hills",
        location: "Mushi, Pune",
        featured_image: "thumbnail.jpg",
        logo: "project-logo.png",
        created_at: "2023-06-15",
    },
    {
        title: "Paloma",
        slug: "paloma",
        folder_name: "paloma",
        location: "Adhale, BK",
        featured_image: "thumbnail.jpg",
        logo: "project-logo.png",
        created_at: "2023-08-10",
    },
    {
        title: "Paloma County",
        slug: "paloma-county",
        folder_name: "paloma-county",
        location: "Adhale, BK",
        featured_image: "thumbnail.jpg",
        logo: "project-logo.png",
        created_at: "2023-09-05",
    },
    {
        title: "Vasantshree",
        slug: "vasantshree",
        folder_name: "vasantshree",
        location: "Dhankawadi, Pune",
        featured_image: "thumbnail.jpg",
        logo: "project-logo.png",
        created_at: "2022-12-20",
    },
    {
        title: "Raj Salokha",
        slug: "raj-salokha",
        folder_name: "raj-salokha",
        location: "Kothrud, Pune",
        featured_image: "thumbnail.jpg",
        logo: "project-logo.png",
        created_at: "2024-01-18",
    },
    {
        title: "Revati",
        slug: "revati",
        folder_name: "revati",
        location: "Dhankawadi, Pune",
        featured_image: "thumbnail.jpg",
        logo: "project-logo.png",
        created_at: "2023-03-02",
    },
];


// const validateSlug = (slug = "") => {
//     return slug
//         .toString()
//         .trim()
//         .toLowerCase()
//         .replace(/[^a-z0-9-]/g, "-")
//         .replace(/-+/g, "-");
// };

export const GetAllProjectsMeta = () => {
    const sortedByDateData = projectsData?.sort((a, b) => {
        const dateA = new Date(a.startDate || 0);
        const dateB = new Date(b.startDate || 0);
        return dateB - dateA;
    });

    return sortedByDateData?.map(({ ...rest }) => {
        // void sections;
        return {
            ...rest,
        };
    });
};
