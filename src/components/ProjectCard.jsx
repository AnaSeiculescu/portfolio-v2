import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
// import Box from "@mui/material/Box";
// import { useState } from "react";

export function ProjectCard({ title, technologies, alt, imgSrc, linkHref, description }) {
    // const [isHovered, setIsHovered] = useState(false);
    return (
        // <Box className="project-container" sx={{ position: "relative" }}>
        <Card
            className="project"
            sx={{
                display: "flex",
                flexDirection: "column",
                width: 340,
                height: 380,
                marginRight: "15px",
                // backgroundColor: "lightgrey",
                color: "white",
                boxShadow: "4",
                // borderRadius: "10px",
            }}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={linkHref} underline="none" target="blank">
                <CardMedia
                    component="img"
                    height="165"
                    // width="285"
                    image={imgSrc}
                    alt={alt}
                    sx={{ margin: "10px", boxShadow: "1", width: "300px" }}
                />
            </Link>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: "1",
                    height: "100%",
                    justifyContent: "space-between",
                }}
            >
                {/* <Stack direction="column"> */}
                <Typography sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}>{title}</Typography>
                <Divider></Divider>
                <Typography sx={{ color: "black", fontSize: "14px" }}>{description}</Typography>
                <Stack direction="row" spacing={0.5}>
                    {technologies.map((tech, index) => (
                        <Chip key={index} label={tech} variant="outlined" size="small" />
                    ))}
                </Stack>
                {/* </Stack> */}
            </CardContent>
        </Card>
        // {isHovered && (
        //     <Box
        //         className="show-when-hover"
        //         sx={{
        //             position: "absolute",
        //             top: "100%",
        //             left: "35%",
        //             height: "150px",
        //             backgroundColor: "red",
        //         }}
        //     >
        //         I am here now
        //         <br />
        //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quam ducimus recusandae nam debitis
        //         accusamus neque non, sit vel quisquam suscipit repudiandae perferendis ullam exercitationem quos
        //         dolores doloremque, totam praesentium?
        //     </Box>
        // )}
        // </Box>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    technologies: PropTypes.array,
    alt: PropTypes.string,
    imgSrc: PropTypes.string,
    linkHref: PropTypes.string,
    description: PropTypes.string,
};
