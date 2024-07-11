import Box from "@mui/material/Box";
import "../Work.css";
// import { Typography } from "@mui/material";
import { ProjectCard } from "./ProjectCard";
import {
    latestProjectsPropsPrimary,
    latestProjectsPropsSecondary,
    oldestProjectsPropsPrimary,
    oldestProjectsPropsSecondary,
} from "./work-utils";
import Divider from "@mui/material/Divider";
// import { useState } from "react";

export default function Work() {
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Box className="work-container" sx={{ position: "relative", flexGrow: 1 }}>
                <>
                    <Box
                        className="first-scroll-container"
                        sx={{
                            // boxShadow: "4",
                            // width: "100%",
                            // backgroundColor: "#f0f1f0",
                            // backgroundColor: "rgb(93, 75, 100)",
                            margin: "2vh 0",
                        }}
                    >
                        <Divider textAlign="right" sx={{ paddingLeft: "35%", fontSize: "18px" }}>
                            some of my latest projects
                        </Divider>
                        {/* <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                            
                        </Typography> */}

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
                                    // onMouseEnter={() => setIsHovered(true)}
                                    // onMouseLeave={() => setIsHovered(false)}
                                />
                            ))}
                        </Box>
                        {/* {isHovered && (
                            <Box
                                className="show-when-hover"
                                sx={{
                                    position: "absolute",
                                    top: "100%",
                                    left: "35%",
                                    height: "150px",
                                    backgroundColor: "red",
                                }}
                            >
                                I am here now
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam ducimus recusandae
                                nam debitis accusamus neque non, sit vel quisquam suscipit repudiandae perferendis ullam
                                exercitationem quos dolores doloremque, totam praesentium?
                            </Box>
                        )} */}
                    </Box>

                    <Box
                        className="second-scroll-container" /*sx={{ boxShadow: "4", width: "100%", backgroundColor: "#f0f1f0" }}*/
                    >
                        <Divider textAlign="right" sx={{ paddingLeft: "35%", fontSize: "18px" }}>
                            and some of my oldest
                        </Divider>
                        {/* <Typography variant="h5" sx={{ paddingLeft: "25%" }}>
                            
                        </Typography> */}
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
                                    // onMouseEnter={() => setIsHovered(true)}
                                    // onMouseLeave={() => setIsHovered(false)}
                                />
                            ))}
                        </Box>
                    </Box>
                </>
            </Box>

            {/* <Box className="my-inspiration" sx={{ paddingLeft: "55%", width: "100%", height: "300px" }}>
                <Typography variant="h5">where did I get my inspiration from</Typography>
            </Box> */}
            {/* <Box className='my-learning'>
    <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
            and some of my oldest
        </Typography>
    </Box> */}
        </>
    );
}
