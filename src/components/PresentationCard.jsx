import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import StickyMenu from "./StickyMenu";
import AboutCards from "./AboutCards";
import ContactCards from "./ContactCards";

export function PresentationCard() {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState("100vh");
    const [tabValue, setTabValue] = useState(0);

    const updateHeight = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight);
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

    return (
        <Container
            maxWidth="false"
            className="content"
            disableGutters={true}
            ref={contentRef}
            sx={{ position: "relative" }}
        >
            <Box sx={{ position: "relative", display: "flex", flexGrow: "1", justifyContent: "center" }}>
                <StickyMenu
                    contentHeight={contentHeight}
                    tabValue={tabValue}
                    setTabValue={setTabValue}
                    onChange={handleChange}
                />
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
                        Welcome! <br />
                        I&apos;m Ana
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
                    <AboutCards />
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
                    <ContactCards />
                </Box>
            </Container>
        </Container>
    );
}
