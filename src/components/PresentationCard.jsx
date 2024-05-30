import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function PresentationCard() {
    return (
        <Container
            maxWidth="false"
            sx={{
                position: "relative",
                // width: "100vw",
                // height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000000",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#434756",
                    color: "white",
                    paddingLeft: "40%",
                    width: "100%",
                    flexGrow: 1,
                    // display: "grid",
                    // gridTemplateColumns: "50% auto auto auto",
                    // gap: "20px",
                }}
            >
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                    style={{ margin: "25px 25px 25px 0" }}
                >
                    <Masonry gutter="15px">
                        {/* <Card
                            sx={{
                                backgroundColor: "#000000",
                                color: "white",
                                width: "100%",
                                // display: "block",
                                height: "500px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card> */}
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                        <Card
                            sx={{
                                backgroundColor: "#1E1E25",
                                color: "white",
                                width: "100%",
                                height: "250px",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                    </Masonry>
                </ResponsiveMasonry>

                {/* <Grid container sx={{ marginLeft: "38%" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
                    <Grid item xs={2} sm={2} md={2}>
                        <Card
                            sx={{
                                backgroundColor: "#000000",
                                color: "white",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Card
                            sx={{
                                backgroundColor: "#000000",
                                color: "white",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <CardContent>My first Project</CardContent>
                        </Card>
                    </Grid>
                </Grid> */}

                {/* <CardContent></CardContent> */}
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    // top: "1vh",
                    left: "13%",
                    backgroundColor: "#000000",
                    boxShadow: 5,
                    borderRadius: "0",
                    width: "25%",
                    height: "100%",
                    color: "white",
                }}
            >
                Ana Seiculescu Portfolio
                {/* <CardContent sx={{ color: "white" }}>Ana Seiculescu Portfolio</CardContent> */}
            </Box>
        </Container>
    );
}
