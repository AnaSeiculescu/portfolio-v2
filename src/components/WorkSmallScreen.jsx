import { latestProjectsProps, oldestProjectsProps } from "./workSmallScreen-utils";
// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { ViewportWidth } from "./ViewportWidth";
import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { ProjectCard } from "./ProjectCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function WorkSmallScreen() {
    const viewportWidth = ViewportWidth();

    const [hideWorkSmallScreen, setHideWorkSmallScreen] = useState(false);

    // const firstCarouselSecondaryStyle = {};
    // const secondCarouselSecondaryStyle = {};

    useEffect(() => {
        if (viewportWidth > 1300) {
            setHideWorkSmallScreen(true);
        } else {
            setHideWorkSmallScreen(false);
        }
    }, [viewportWidth]);

    const workSmallScreenStyle = {
        position: "relative",
        marginBottom: "70px",
        // flexGrow: 1,
    };

    if (hideWorkSmallScreen) {
        workSmallScreenStyle.display = "none";
    }

    return (
        <Stack className="work-container" sx={workSmallScreenStyle}>
            <Divider
                textAlign="right"
                sx={{ paddingLeft: "10%", fontSize: "20px", marginTop: "160px", marginBottom: "30px" }}
            >
                <i>some of my latest projects</i>
            </Divider>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 400: 1, 700: 2, 1250: 3 }}
                style={{ margin: "25px 25px 25px 30px", justifyContent: "center" }}
            >
                <Masonry gutter="20px" sx={{ justifyContent: "center" }}>
                    {latestProjectsProps.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            technologies={project.technologies}
                            alt={project.alt}
                            imgSrc={project.imgSrc}
                            linkHref={project.linkHref}
                            description={project.description}
                            codeLinkHref={project.codeLinkHref}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>

            <Divider
                textAlign="right"
                sx={{ paddingLeft: "10%", fontSize: "20px", marginTop: "80px", marginBottom: "20px" }}
            >
                <i>and some of my oldest</i>
            </Divider>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 400: 1, 700: 2, 1250: 3 }}
                style={{ margin: "25px 25px 25px 30px" }}
            >
                <Masonry gutter="20px">
                    {oldestProjectsProps.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            technologies={project.technologies}
                            alt={project.alt}
                            imgSrc={project.imgSrc}
                            linkHref={project.linkHref}
                            description={project.description}
                            codeLinkHref={project.codeLinkHref}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Stack>
    );
}

WorkSmallScreen.propTypes = {
    // hideCarousel: PropTypes.bool,
};
