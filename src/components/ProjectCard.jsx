import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export function ProjectCard({ title, technologies, alt, imgSrc, linkHref }) {
    return (
        <Card
            className="project"
            sx={{
                width: 320,
                height: 300,
                marginRight: "15px",
                // backgroundColor: "lightgrey",
                color: "white",
                boxShadow: "4",
                // borderRadius: "10px",
            }}
        >
            <Link href={linkHref} underline="none" target="blank">
                <CardMedia
                    component="img"
                    height="200"
                    // width="285"
                    image={imgSrc}
                    alt={alt}
                    sx={{ margin: "10px", boxShadow: "1", width: "300px" }}
                />
                <CardContent>
                    <Typography sx={{ color: "black", fontSize: "14px" }}>
                        {title}
                        {/* <br /> */}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {technologies.map((tech, index) => (
                            <Chip key={index} label={tech} variant="outlined" />
                        ))}
                    </Stack>
                </CardContent>
            </Link>
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    technologies: PropTypes.array,
    alt: PropTypes.string,
    imgSrc: PropTypes.string,
    linkHref: PropTypes.string,
};
