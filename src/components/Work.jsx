import Box from "@mui/material/Box";
import "../Work.css";
import { ProjectCard } from "./ProjectCard";
import {
    latestProjectsPropsPrimary,
    latestProjectsPropsSecondary,
    oldestProjectsPropsPrimary,
    oldestProjectsPropsSecondary,
} from "./work-utils";
import Divider from "@mui/material/Divider";

export default function Work() {
    return (
        <>
            <Box className="work-container" sx={{ position: "relative", flexGrow: 1 }}>
                <>
                    <Box
                        className="first-scroll-container"
                        sx={{
                            margin: "2vh 0",
                        }}
                    >
                        <Divider textAlign="right" sx={{ paddingLeft: "35%", fontSize: "20px" }}>
                            <i>some of my latest projects</i>
                        </Divider>
                        <Box className="first-carousel-primary">
                            {latestProjectsPropsPrimary.map((project) => (
                                <ProjectCard
                                    // className="element-to-hover"
                                    key={project.id}
                                    title={project.title}
                                    technologies={project.technologies}
                                    alt={project.alt}
                                    imgSrc={project.imgSrc}
                                    linkHref={project.linkHref}
                                    description={project.description}
                                    codeLinkHref={project.codeLinkHref}
                                    // onMouseEnter={() => setIsHovered(true)}
                                    // onMouseLeave={() => setIsHovered(false)}
                                />
                            ))}
                        </Box>
                        <Box className="first-carousel-primary first-carousel-secondary">
                            {latestProjectsPropsSecondary.map((project) => (
                                <ProjectCard
                                    // className="element-to-hover"
                                    key={project.id}
                                    title={project.title}
                                    technologies={project.technologies}
                                    alt={project.alt}
                                    imgSrc={project.imgSrc}
                                    linkHref={project.linkHref}
                                    description={project.description}
                                    codeLinkHref={project.codeLinkHref}
                                    // onMouseEnter={() => setIsHovered(true)}
                                    // onMouseLeave={() => setIsHovered(false)}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box className="second-scroll-container">
                        <Divider textAlign="right" sx={{ paddingLeft: "35%", fontSize: "20px" }}>
                            <i>and some of my oldest</i>
                        </Divider>
                        <Box className="second-carousel-primary">
                            {oldestProjectsPropsPrimary.map((project) => (
                                <ProjectCard
                                    // className="element-to-hover"
                                    key={project.id}
                                    title={project.title}
                                    technologies={project.technologies}
                                    alt={project.alt}
                                    imgSrc={project.imgSrc}
                                    linkHref={project.linkHref}
                                    description={project.description}
                                    codeLinkHref={project.codeLinkHref}
                                    // onMouseEnter={() => setIsHovered(true)}
                                    // onMouseLeave={() => setIsHovered(false)}
                                />
                            ))}
                        </Box>
                        <Box className="second-carousel-primary second-carousel-secondary">
                            {oldestProjectsPropsSecondary.map((project) => (
                                <ProjectCard
                                    // className="element-to-hover"
                                    key={project.id}
                                    title={project.title}
                                    technologies={project.technologies}
                                    alt={project.alt}
                                    imgSrc={project.imgSrc}
                                    linkHref={project.linkHref}
                                    description={project.description}
                                    codeLinkHref={project.codeLinkHref}
                                    // onMouseEnter={() => setIsHovered(true)}
                                    // onMouseLeave={() => setIsHovered(false)}
                                />
                            ))}
                        </Box>
                    </Box>
                </>
            </Box>
        </>
    );
}
