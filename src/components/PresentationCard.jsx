import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import portfolioImage from "../../images/portfolio-image3.jpeg";
import { Typography } from "@mui/material";
import VerticalTabsPanel from "./VerticalTabsPanel";

export function PresentationCard() {
    const menuStyle = {
        position: "absolute",
        top: "0",
        left: "13%",

        display: "flex",
        flexDirection: "column",
        gap: "40px",
        // alignItems: "center",

        // backgroundColor: "#000000",
        // background:
        //     "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,22,22,1) 19%, rgba(13,23,23,1) 44%, rgba(144,254,255,1) 100%)",
        // background:
        //     "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,22,22,1) 19%, rgba(13,23,23,1) 44%, rgba(254,254,254,1) 100%)",
        background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,22,22,1) 19%, rgba(13,23,23,1) 44%, rgba(140,225,255,1) 100%)",
        color: "white",
        boxShadow: 5,
        borderRadius: "0",

        width: "15%",
        height: "200vh",

        textAlign: "center",
        zIndex: "5",
    };

    return (
        <>
            <Box className="stickyMenu" style={menuStyle}>
                <img
                    src={portfolioImage}
                    alt="portfolio-image"
                    style={{
                        position: "sticky",
                        top: "60px",
                        width: "300px",
                        border: "8px solid #2c303a",
                        // border: "8px solid transparent",
                        // border: "8px solid #FFFFFF",
                        borderRadius: "3px",
                        alignSelf: "end",
                        marginRight: "30px",
                    }}
                />
                <VerticalTabsPanel />
            </Box>
            <Box
                className="firstPage"
                sx={{
                    backgroundColor: "white",
                    height: "100vh",
                    padding: "0 auto",
                    marginLeft: "28%",
                    alignContent: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "40px",
                    }}
                >
                    Welcome!
                </Typography>
            </Box>

            <Container
                maxWidth="false"
                className="scrollingArea"
                sx={{
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                    backgroundColor: "#2c303a",
                    color: "white",
                    overflow: "auto",
                    flexGrow: 1,
                }}
            >
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                    style={{ margin: "25px 5% 25px 32%" }}
                >
                    <Masonry gutter="25px">
                        {new Array(23).fill(null).map((elem, index) => (
                            <Card
                                key={Math.random()}
                                sx={{
                                    backgroundColor: "#1E1F22",
                                    color: "white",
                                    width: "100%",
                                    height: "300px",
                                }}
                            >
                                <CardContent>Project no. {index + 1}</CardContent>
                            </Card>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Container>
        </>
    );
}
