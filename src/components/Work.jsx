import Box from "@mui/material/Box";
import "../Work.css";
import { Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import Grid from "@mui/system/Unstable_Grid";

export default function Work() {
    const latestProjectsPropsPrimary = [
        {
            id: 1.1,
            title: "power organizer",
            alt: "power-organizer",
            imgSrc: "../../images/power-organizer.jpg",
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 1.2,
            title: "dizzy notes",
            alt: "dizzy-notes",
            imgSrc: "../../images/dizzy-notes.jpg",
            linkHref: "https://anaseiculescu.github.io/keep-notes/",
            technologies: ["JavaScript", "CSS", "HTML", "Masonry"],
        },
        {
            id: 1.3,
            title: "call a cat with the CatAPI",
            alt: "call-a-cat",
            imgSrc: "../../images/catAPI.jpg",
            linkHref: "https://cat-caller.netlify.app/#",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 1.4,
            title: "collection map",
            alt: "collection-map",
            imgSrc: '"../../images/collection-map.jpg',
            linkHref: "https://anaseiculescu.github.io/collection-map/",
            technologies: ["React.js", "Material UI"],
        },
    ];

    const latestProjectsPropsSecondary = [
        {
            id: 1.5,
            title: "power organizer",
            alt: "power-organizer",
            imgSrc: "../../images/power-organizer.jpg",
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 1.6,
            title: "dizzy notes",
            alt: "dizzy-notes",
            imgSrc: "../../images/dizzy-notes.jpg",
            linkHref: "https://anaseiculescu.github.io/keep-notes/",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 1.7,
            title: "call a cat with the CatAPI",
            alt: "call-a-cat",
            imgSrc: "../../images/catAPI.jpg",
            linkHref: "https://cat-caller.netlify.app/#",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 1.8,
            title: "collection map",
            alt: "collection-map",
            imgSrc: '"../../images/collection-map.jpg',
            linkHref: "https://anaseiculescu.github.io/collection-map/",
            technologies: ["React.js", "Material UI"],
        },
    ];

    const oldestProjectsPropsPrimary = [
        {
            id: 2.1,
            title: "color picker",
            alt: "color-picker",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 2.2,
            title: "breakfast recipes",
            alt: "breakfast-recipes",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 2.3,
            title: "rock paper scissors lizard spock",
            alt: "rock-paper-scissors-lizard-spock",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 2.4,
            title: "my previous portfolio",
            alt: "previous-portfolio",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
    ];

    const oldestProjectsPropsSecondary = [
        {
            id: 2.5,
            title: "color picker",
            alt: "color-picker",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 2.6,
            title: "breakfast recipes",
            alt: "breakfast-recipes",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 2.7,
            title: "rock paper scissors lizard spock",
            alt: "rock-paper-scissors-lizard-spock",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
        {
            id: 2.8,
            title: "my previous portfolio",
            alt: "previous-portfolio",
            imgSrc: '"../../images/power-organizer.jpg',
            linkHref: "",
            technologies: ["React.js", "Material UI"],
        },
    ];

    return (
        <>
            <Box className="work-container" sx={{ position: "relative", minHeight: "150vh", flexGrow: 1 }}>
                <Grid
                    className="first-scroll-container"
                    sx={{
                        // boxShadow: "4",
                        // width: "100%",
                        // backgroundColor: "#f0f1f0",
                        // backgroundColor: "rgb(93, 75, 100)",
                        margin: "2vh 0",
                    }}
                >
                    <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                        some of my latest projects
                    </Typography>
                    <Grid container spacing={2} className="first-carousel-primary">
                        {latestProjectsPropsPrimary.map((project, index) => (
                            <Grid xs="auto" key={index}>
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    technologies={project.technologies}
                                    alt={project.alt}
                                    imgSrc={project.imgSrc}
                                    linkHref={project.linkHref}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2} className="first-carousel-primary first-carousel-secondary">
                        {latestProjectsPropsSecondary.map((project, index) => (
                            <Grid xs="auto" key={index}>
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    technologies={project.technologies}
                                    alt={project.alt}
                                    imgSrc={project.imgSrc}
                                    linkHref={project.linkHref}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Box
                    className="second-scroll-container" /*sx={{ boxShadow: "4", width: "100%", backgroundColor: "#f0f1f0" }}*/
                >
                    <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                        and some of my oldest
                    </Typography>
                    <Box className="second-carousel-primary">
                        {oldestProjectsPropsPrimary.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                technologies={project.technologies}
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
                                technologies={project.technologies}
                                alt={project.alt}
                                imgSrc={project.imgSrc}
                                linkHref={project.linkHref}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box
                className="my-inspiration"
                sx={{ paddingLeft: "55%", backgroundColor: "red", width: "100%", height: "300px" }}
            >
                <Typography variant="h5">where did I get my inspiration</Typography>
            </Box>
            {/* <Box className='my-learning'>
    <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
            and some of my oldest
        </Typography>
    </Box> */}
        </>
    );
}
