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
import { ViewportWidth } from "./ViewportWidth";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Work() {
    const viewportWidth = ViewportWidth();

    const [hideWork, setHideWork] = useState(false);

    useEffect(() => {
        if (viewportWidth > 1300) {
            setHideWork(false);
        } else {
            setHideWork(true);
        }
    }, [viewportWidth]);

    const firstCarouselSecondaryStyle = {};
    const secondCarouselSecondaryStyle = {};
    // if (hideCarousel) {
    //     firstCarouselSecondaryStyle.display = "none";
    //     secondCarouselSecondaryStyle.display = "none";
    // }

    const workStyle = {
        position: "relative",
        flexGrow: 1,
    };

    if (hideWork) {
        workStyle.display = "none";
    }

    return (
        <>
            <Box className="work-container" sx={workStyle}>
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
                        <Box
                            className="first-carousel-primary first-carousel-secondary"
                            sx={firstCarouselSecondaryStyle}
                        >
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
                        <Box
                            className="second-carousel-primary second-carousel-secondary"
                            sx={secondCarouselSecondaryStyle}
                        >
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

Work.propTypes = {
    hideCarousel: PropTypes.bool,
};
