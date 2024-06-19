import Box from "@mui/material/Box";
import "../Work.css";
import { Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";

export default function Work() {
    const latestProjectsPropsPrimary = [
        {
            id: 1.1,
            title: "power organizer",
            alt: "power-organizer",
            imgSrc: "../../images/power-organizer.jpg",
            linkHref: "",
        },
        {
            id: 1.2,
            title: "dizzy notes",
            alt: "dizzy-notes",
            imgSrc: "../../images/dizzy-notes.jpg",
            linkHref: "https://anaseiculescu.github.io/keep-notes/",
        },
        {
            id: 1.3,
            title: "call a cat with the CatAPI",
            alt: "call-a-cat",
            imgSrc: "../../images/catAPI.jpg",
            linkHref: "https://cat-caller.netlify.app/#",
        },
        {
            id: 1.4,
            title: "collection map",
            alt: "collection-map",
            imgSrc: '"../../images/collection-map.jpg',
            linkHref: "https://anaseiculescu.github.io/collection-map/",
        },
    ];

    const latestProjectsPropsSecondary = [
        {
            id: 1.5,
            title: "power organizer",
            alt: "power-organizer",
            imgSrc: "../../images/power-organizer.jpg",
            linkHref: "",
        },
        {
            id: 1.6,
            title: "dizzy notes",
            alt: "dizzy-notes",
            imgSrc: "../../images/dizzy-notes.jpg",
            linkHref: "https://anaseiculescu.github.io/keep-notes/",
        },
        {
            id: 1.7,
            title: "call a cat with the CatAPI",
            alt: "call-a-cat",
            imgSrc: "../../images/catAPI.jpg",
            linkHref: "https://cat-caller.netlify.app/#",
        },
        {
            id: 1.8,
            title: "collection map",
            alt: "collection-map",
            imgSrc: '"../../images/collection-map.jpg',
            linkHref: "https://anaseiculescu.github.io/collection-map/",
        },
    ];

    const oldestProjectsPropsPrimary = [
        {
            id: 2.1,
            title: "color picker",
            alt: "color-picker",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
        {
            id: 2.2,
            title: "breakfast recipes",
            alt: "breakfast-recipes",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
        {
            id: 2.3,
            title: "rock paper scissors lizard spock",
            alt: "rock-paper-scissors-lizard-spock",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
        {
            id: 2.4,
            title: "my previous portfolio",
            alt: "previous-portfolio",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
    ];

    const oldestProjectsPropsSecondary = [
        {
            id: 2.5,
            title: "color picker",
            alt: "color-picker",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
        {
            id: 2.6,
            title: "breakfast recipes",
            alt: "breakfast-recipes",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
        {
            id: 2.7,
            title: "rock paper scissors lizard spock",
            alt: "rock-paper-scissors-lizard-spock",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
        {
            id: 2.8,
            title: "my previous portfolio",
            alt: "previous-portfolio",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
        },
    ];

    return (
        <Box className="work-container" sx={{}}>
            <Box
                className="first-scroll-container"
                sx={{
                    boxShadow: "4",
                    width: "100%",
                    // backgroundColor: "#f0f1f0",
                    backgroundColor: "rgb(93, 75, 100)",
                }}
            >
                <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                    some of my latest projects
                </Typography>
                <Box className="first-carousel-primary">
                    {latestProjectsPropsPrimary.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            alt={project.alt}
                            imgSrc={project.imgSrc}
                            linkHref={project.linkHref}
                        />
                    ))}
                </Box>
                <Box className="first-carousel-primary first-carousel-secondary">
                    {latestProjectsPropsSecondary.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            alt={project.alt}
                            imgSrc={project.imgSrc}
                            linkHref={project.linkHref}
                        />
                    ))}
                </Box>
            </Box>
            <Box className="second-scroll-container" sx={{ boxShadow: "4", width: "100%", backgroundColor: "#f0f1f0" }}>
                <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                    and some of my oldest
                </Typography>
                <Box className="second-carousel-primary">
                    {oldestProjectsPropsPrimary.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            alt={project.alt}
                            imgSrc={project.imgSrc}
                            linkHref={project.linkHref}
                        />
                    ))}
                </Box>
                <Box className="second-carousel-primary second-carousel-secondary">
                    {oldestProjectsPropsSecondary.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            alt={project.alt}
                            imgSrc={project.imgSrc}
                            linkHref={project.linkHref}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
