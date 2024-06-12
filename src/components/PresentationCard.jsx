import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import portfolioImage from "../../images/portfolio-image3.jpeg";
import { Typography } from "@mui/material";
import VerticalTabsPanel from "./VerticalTabsPanel";
import { useEffect, useState, useRef } from "react";

export function PresentationCard() {
    const [contentHeight, setContentHeight] = useState(0);

    const contentRef = useRef(null);

    useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

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

        width: "20%",
        height: `${contentHeight}px`,

        textAlign: "center",
        zIndex: "5",
    };

    return (
        <Container maxWidth="false" className="content" ref={contentRef} sx={{ position: "relative" }}>
            <Box sx={{ position: "relative", display: "flex", flexGrow: "1", justifyContent: "center" }}>
                <Box className="stickyMenu" style={menuStyle}>
                    <img
                        src={portfolioImage}
                        alt="portfolio-image"
                        style={{
                            position: "absolute",
                            top: "60px",
                            width: "300px",
                            border: "8px solid #FFF",
                            borderRadius: "3px",
                            alignSelf: "end",
                            marginRight: "30px",
                        }}
                    />
                    <VerticalTabsPanel />
                </Box>
            </Box>

            <Container
                maxWidth="false"
                className="scrollingArea"
                sx={
                    {
                        // overflow: "auto",
                    }
                }
            >
                <Box
                    className="firstPage"
                    sx={{
                        color: "black",
                        height: "100vh",
                        marginLeft: "28%",
                        alignContent: "center",
                        textAlign: "center",
                        zIndex: "2",
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
                <Box
                    sx={{
                        marginTop: "40px",
                        marginLeft: "35%",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <Card
                        sx={{
                            boxShadow: "5",
                            width: "30%",
                            height: "150px",
                            marginLeft: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "2",
                        }}
                    >
                        <CardContent>Some about me</CardContent>
                    </Card>
                    <Card
                        sx={{
                            position: "absolute",
                            top: "100px",
                            left: "10%",
                            width: "60%",
                            height: "300px",
                            boxShadow: "4",
                        }}
                    >
                        <CardContent></CardContent>
                    </Card>
                </Box>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                    style={{ padding: "2% 2% 2% 35%", backgroundColor: "#2c303a", borderRadius: "10px" }}
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
        </Container>
    );
}
