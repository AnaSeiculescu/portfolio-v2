import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import logo1 from "../../images/logo1.png";

export function PresentationCard() {
    const logoStyle = {
        position: "absolute",
        top: "0",
        left: "30px",
        width: "110px",
        height: "110px",
    };

    return (
        <Container
            maxWidth="false"
            sx={{
                width: "100%",
                height: "100vh",
                position: "relative",
                display: "flex",
                backgroundColor: "#000000",
            }}
        >
            <Box
                className="scrollingArea"
                sx={{
                    position: "relative",
                    backgroundColor: "#2c303a",
                    color: "white",
                    margin: "30px 6px",
                    paddingLeft: "40%",
                    overflow: "scroll",
                    flexGrow: 1,
                }}
            >
                <img src={logo1} alt="logo" style={logoStyle} />
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                    style={{ margin: "25px 25px 25px 0" }}
                >
                    <Masonry gutter="15px">
                        {new Array(23).fill(null).map(() => (
                            <Card
                                key={Math.random()}
                                sx={{
                                    backgroundColor: "#1E1F22",
                                    color: "white",
                                    width: "100%",
                                    height: "250px",
                                }}
                            >
                                <CardContent>My first Project</CardContent>
                            </Card>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
            <Box
                className="stickyMenu"
                sx={{
                    position: "absolute",
                    left: "13%",
                    backgroundColor: "#000000",
                    boxShadow: 5,
                    borderRadius: "0",
                    width: "25%",
                    height: "100%",
                    color: "white",
                    textAlign: "center",
                }}
            >
                Ana Seiculescu Portfolio
            </Box>
        </Container>
    );
}
