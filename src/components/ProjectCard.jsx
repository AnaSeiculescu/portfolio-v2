import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

export function ProjectCard({ title, technologies, alt, imgSrc, linkHref, description }) {
    return (
        <Card
            className="project"
            sx={{
                display: "flex",
                flexDirection: "column",
                width: 320,
                height: 380,
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
                <Typography sx={{ color: "black", fontSize: "16px", fontWeight: "600" }}>
                    {title}
                    <Divider sx={{ marginTop: "10px" }}></Divider>
                </Typography>
                <Typography sx={{ color: "black", fontSize: "14px" }}>{description}</Typography>
                <Stack direction="row" spacing={0.5}>
                    {technologies.map((tech, index) => (
                        <Chip key={index} label={tech} variant="outlined" size="small" />
                    ))}
                </Stack>
                {/* </Stack> */}
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
};
