import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../Work.css";
import { Typography } from "@mui/material";
// import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

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
                <Box className="first-carousel-primary">
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="dizzy-notes"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>dizzy notes</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="call-a-cat"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>call a cat with the CatAPI</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="power-organizer"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>power organizer</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="power-organizer"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>power organizer</Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box className="first-carousel-primary first-carousel-secondary">
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="dizzy-notes"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>dizzy notes</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="call-a-cat"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>call a cat with the CatAPI</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="power-organizer"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>power organizer</Typography>
                        </CardContent>
                    </Card>
                    <Card
                        className="project"
                        sx={{
                            width: "18vw",
                            height: "40vh",
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
                            alt="power-organizer"
                            sx={{ marginBottom: "15px", boxShadow: "3" }}
                        />
                        <CardContent>
                            <Typography>power organizer</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            <Box className="second-scroll-container" sx={{ boxShadow: "4", width: "100%", backgroundColor: "#f0f1f0" }}>
                <Box className="second-carousel-primary">
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
