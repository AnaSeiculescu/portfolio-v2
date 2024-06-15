import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../Work.css";
import { Typography } from "@mui/material";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

export default function Work() {
    return (
        <Box className="work-container" sx={{}}>
            <Box
                className="first-scroll-container"
                // sx={{
                //     boxShadow: "4",
                //     width: "100%",
                //     backgroundColor: "#f0f1f0"
                //     }}
            >
                <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                    some of my latest projects
                </Typography>
                <Box className="first-carousel-primary">
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/power-organizer.jpg"
                                alt="power-organizer"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>power organizer</Typography>
                            </CardContent>
                        </Link>
                    </Card>

                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="https://anaseiculescu.github.io/keep-notes/" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/dizzy-notes.jpg"
                                alt="dizzy-notes"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>dizzy notes</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/catAPI.jpg"
                                alt="call-a-cat"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>call a cat with the CatAPI</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="https://anaseiculescu.github.io/collection-map/" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/collection-map.jpg"
                                alt="collection-map"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>collection map</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </Box>
                <Box className="first-carousel-primary first-carousel-secondary">
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/power-organizer.jpg"
                                alt="power-organizer"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>power organizer</Typography>
                            </CardContent>
                        </Link>
                    </Card>

                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="https://anaseiculescu.github.io/keep-notes/" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/dizzy-notes.jpg"
                                alt="dizzy-notes"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>dizzy notes</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/catAPI.jpg"
                                alt="call-a-cat"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>call a cat with the CatAPI</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <Link href="https://anaseiculescu.github.io/collection-map/" underline="none" target="blank">
                            <CardMedia
                                component="img"
                                height="280"
                                image="../../images/collection-map.jpg"
                                alt="collection-map"
                                sx={{ marginBottom: "15px", boxShadow: "3" }}
                            />
                            <CardContent>
                                <Typography>collection map</Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </Box>
            </Box>
            <Box className="second-scroll-container" sx={{ boxShadow: "4", width: "100%", backgroundColor: "#f0f1f0" }}>
                <Typography variant="h5" sx={{ paddingLeft: "55%" }}>
                    and some of my oldest
                </Typography>
                <Box className="second-carousel-primary">
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="280"
                            image="../../images/dizzy-notes.jpg"
                            alt="color-picker"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent sx={{ height: 50 }}>
                            <Typography>collor picker</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="280"
                            image="../../images/dizzy-notes.jpg"
                            alt="breakfast-recipes"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>breakfast recipes</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="280"
                            image="../../images/dizzy-notes.jpg"
                            alt="rock-paper-scissors-lizard-spock"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>rock paper scissors lizard spock</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: 300,
                            height: 400,
                            marginRight: "15px",
                            backgroundColor: "lightgrey",
                            color: "white",
                            boxShadow: "4",
                            // borderRadius: "10px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="280"
                            image="../../images/dizzy-notes.jpg"
                            alt="previous-portfolio"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>my previous portfolio</Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box className="second-carousel-primary second-carousel-secondary">
                    <Card
                        sx={{
                            width: "280px",
                            height: "280px",
                            backgroundColor: "yellow",
                            boxShadow: "4",
                            borderRadius: "10px",
                        }}
                    ></Card>
                    <Card
                        sx={{
                            width: "280px",
                            height: "280px",
                            backgroundColor: "lightgreen",
                            boxShadow: "4",
                            borderRadius: "10px",
                        }}
                    ></Card>
                    <Card
                        sx={{
                            width: "280px",
                            height: "280px",
                            backgroundColor: "purple",
                            boxShadow: "4",
                            borderRadius: "10px",
                        }}
                    ></Card>
                    <Card
                        sx={{
                            width: "280px",
                            height: "280px",
                            backgroundColor: "lightblue",
                            boxShadow: "4",
                            borderRadius: "10px",
                        }}
                    ></Card>
                </Box>
            </Box>
        </Box>
    );
}
