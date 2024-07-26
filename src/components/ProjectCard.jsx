import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import "../Work.css";

export function ProjectCard({ title, technologies, alt, imgSrc, linkHref, description, codeLinkHref }) {
    return (
        <Card
            className="project"
            sx={{
                boxShadow: "4",
            }}
        >
            <Link href={linkHref} underline="none" target="blank">
                <CardMedia
                    className="project-card-media-img"
                    component="img"
                    height="165"
                    image={imgSrc}
                    alt={alt}
                    sx={{
                        boxShadow: "1",
                        width: "320px",
                    }}
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
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography
                        sx={{ color: "black", fontSize: "16px", fontWeight: "800", fontFamily: "Nunito, sans-serif" }}
                    >
                        {title}
                    </Typography>

                    <Link
                        href={codeLinkHref}
                        underline="none"
                        target="blank"
                        sx={{ cursor: "pointer", fontFamily: "Nunito, sans-serif", fontWeight: "700" }}
                    >
                        <Chip label="code" variant="filled" size="small" />
                    </Link>
                </Stack>
                <Divider></Divider>
                <Typography sx={{ color: "black", fontSize: "14px", fontFamily: "Nunito, sans-serif" }}>
                    {description}
                </Typography>
                <Stack direction="row" spacing={0.5}>
                    {technologies.map((tech, index) => (
                        <Chip key={index} label={tech} variant="outlined" size="small" />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    technologies: PropTypes.array,
    alt: PropTypes.string,
    imgSrc: PropTypes.string,
    linkHref: PropTypes.string,
    description: PropTypes.string,
    codeLinkHref: PropTypes.string,
};
