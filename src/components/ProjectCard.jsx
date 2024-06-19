import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

export function ProjectCard({ title, alt, imgSrc, linkHref }) {
    return (
        <Card
            className="project"
            sx={{
                width: 300,
                height: 300,
                marginRight: "15px",
                backgroundColor: "lightgrey",
                color: "white",
                boxShadow: "4",
                // borderRadius: "10px",
            }}
        >
            <Link href={linkHref} underline="none" target="blank">
                <CardMedia
                    component="img"
                    height="200"
                    image={imgSrc}
                    alt={alt}
                    sx={{ marginBottom: "15px", boxShadow: "3" }}
                />
                <CardContent>
                    <Typography>{title}</Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.string,
    imgSrc: PropTypes.string,
    linkHref: PropTypes.string,
};
