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
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState("100vh");
    const [tabValue, setTabValue] = useState(0);

    const updateHeight = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight);
            // contactRef.current.scrollHeight = contentRef.current.clientHeight;
        }
    };

    useEffect(() => {
        // we use a timeout because we need to wait for the masonry layout to finnish arranging elements
        setTimeout(updateHeight);
        // updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
            console.log("ref.current: ", ref.current);
        }
    };

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                scrollToRef(homeRef);
                break;
            case 1:
                scrollToRef(aboutRef);
                break;
            case 2:
                scrollToRef(projectsRef);
                break;
            case 3:
                scrollToRef(contactRef);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (tabValue === 0) {
            scrollToRef(homeRef);
        } else if (tabValue === 1) {
            scrollToRef(aboutRef);
        } else if (tabValue === 2) {
            scrollToRef(projectsRef);
        } else if (tabValue === 3) {
            scrollToRef(contactRef);
        }
    }, [tabValue]);

    const menuStyle = {
        position: "absolute",
        top: "0",
        left: "13%",

        display: "flex",
        flexDirection: "column",
        gap: "40px",

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

        width: "18%",
        height: contentHeight,
        transition: "height 3.7s",

        textAlign: "center",
        zIndex: "5",
    };

    return (
        <Container
            maxWidth="false"
            className="content"
            disableGutters={true}
            ref={contentRef}
            sx={{ position: "relative" }}
        >
            <Box sx={{ position: "relative", display: "flex", flexGrow: "1", justifyContent: "center" }}>
                <Box className="stickyMenu" style={menuStyle}>
                    <img
                        src={portfolioImage}
                        alt="portfolio-image"
                        style={{
                            position: "absolute",
                            top: "60px",
                            left: "-23%",
                            // right: '20%',
                            width: "300px",
                            border: "8px solid #FFF",
                            borderRadius: "3px",
                            alignSelf: "end",
                            marginRight: "30px",
                        }}
                    />
                    <VerticalTabsPanel onTabChange={handleChange} tabValue={tabValue} setTabValue={setTabValue} />
                </Box>
            </Box>

            <Container
                maxWidth="false"
                disableGutters={true}
                className="scrollingArea"
                sx={{
                    overflow: "auto",
                }}
            >
                <Box
                    ref={homeRef}
                    className="home"
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
                    ref={aboutRef}
                    className="about"
                    sx={{
                        paddingTop: "100px",
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
                            top: "200px",
                            left: "10%",
                            width: "60%",
                            height: "380px",
                            boxShadow: "4",
                        }}
                    >
                        <CardContent></CardContent>
                    </Card>
                </Box>
                <Box ref={projectsRef}>
                    <ResponsiveMasonry
                        className="projects"
                        columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                        style={{ padding: "2% 2% 2% 35%", backgroundColor: "#2c303a" }}
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
                </Box>

                <Box
                    className="contact"
                    ref={contactRef}
                    sx={{
                        paddingTop: "100px",
                        marginLeft: "35%",
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <Card
                        sx={{
                            position: "absolute",
                            top: "200px",
                            left: "10%",
                            width: "60%",
                            height: "300px",
                            boxShadow: "4",
                        }}
                    >
                        <CardContent></CardContent>
                    </Card>
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
                        <CardContent>Contact me</CardContent>
                    </Card>
                </Box>
            </Container>
        </Container>
    );
}
