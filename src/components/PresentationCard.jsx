// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import StickyMenu from "./StickyMenu";
import AboutCards from "./AboutCards";
import ContactCards from "./ContactCards";
import { useInView } from "react-intersection-observer";
import { usePrevious } from "@uidotdev/usehooks";
import Work from "./Work";

export function PresentationCard() {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState("100vh");
    const [tabValue, setTabValue] = useState(0);

    const [homeRef, inViewOfHome, homeEntry] = useInView({ threshold: 0.5 });
    const [aboutRef, inViewOfAbout, aboutEntry] = useInView({ threshold: 0.5 });
    const [workRef, inViewOfWork, workEntry] = useInView({ threshold: 0.2 });
    const [contactRef, inViewOfContact, contactEntry] = useInView({ threshold: 0.5 });

    const previouslyInViewOfHome = usePrevious(inViewOfHome);
    const previouslyInViewOfAbout = usePrevious(inViewOfAbout);
    const previouslyInViewOfWork = usePrevious(inViewOfWork);
    const previouslyInViewOfContact = usePrevious(inViewOfContact);

    console.log("homeRef.current", homeRef.current);

    useEffect(() => {
        if (!previouslyInViewOfHome && inViewOfHome) {
            console.log("setting to 0");
            setTabValue(0);
            return;
        }
        if (!previouslyInViewOfAbout && inViewOfAbout) {
            console.log("setting to 1");
            setTabValue(1);
            return;
        }
        if (!previouslyInViewOfWork && inViewOfWork) {
            console.log("setting to 2");
            setTabValue(2);
            return;
        }
        if (!previouslyInViewOfContact && inViewOfContact) {
            console.log("setting to 3");
            setTabValue(3);
            return;
        }
    }, [
        inViewOfHome,
        inViewOfAbout,
        inViewOfWork,
        inViewOfContact,
        previouslyInViewOfHome,
        previouslyInViewOfAbout,
        previouslyInViewOfWork,
        previouslyInViewOfContact,
    ]);

    const updateHeight = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.clientHeight);
        }
    };

    useEffect(() => {
        // we use a timeout because we need to wait for the masonry layout to finnish arranging elements
        setTimeout(updateHeight);
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    // const homeRef = useRef(null);
    // const aboutRef = useRef(null);
    // const workRef = useRef(null);
    // const contactRef = useRef(null);

    // console.log("window.scroll: ", window.scroll());
    const scrollToEntry = (entry) => {
        console.log("entry: ", entry);
        // if (ref && ref.current) {
        //     window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
        //     console.log("ref.current: ", ref.current);
        // }
        console.log("entry.target.clientTop", entry.target.clientTop);
        console.log("entry.target.scrollTop", entry.target.scrollTop);
        console.log("entry.target.getBoundingClientRect()", entry.target.getBoundingClientRect());

        window.scrollBy({ top: entry.target.getBoundingClientRect().top, behavior: "smooth" });
        // window.scroll({
        //     top: entry.boundingClientRect.top,
        //     behavior: "smooth",
        // });
    };

    const handleTabChange = (newTab) => {
        console.log("new tab: ", newTab);
        switch (newTab) {
            case 0:
                scrollToEntry(homeEntry);
                break;
            case 1:
                scrollToEntry(aboutEntry);
                break;
            case 2:
                scrollToEntry(workEntry);
                break;
            case 3:
                scrollToEntry(contactEntry);
                break;
            default:
                break;
        }
    };

    // useEffect(() => {
    //     if (tabValue === 0) {
    //         scrollToEntry(homeEntry);
    //     } else if (tabValue === 1) {
    //         scrollToEntry(aboutEntry);
    //     } else if (tabValue === 2) {
    //         scrollToEntry(workEntry);
    //     } else if (tabValue === 3) {
    //         scrollToEntry(contactEntry);
    //     }
    // }, [tabValue]);

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
                    onTabChange={handleTabChange}
                    contentHeight={contentHeight}
                    tabValue={tabValue}
                    // setTabValue={setTabValue}
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
                <Box ref={workRef}>
                    <Work />
                    {/* <ResponsiveMasonry
                        className="work"
                        columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                        style={{
                            padding: "2% 2% 2% 35%",
                            // backgroundColor: "#2c303a",
                        }}
                    >
                        <Masonry gutter="25px">
                            {new Array(17).fill(null).map((elem, index) => (
                                <Card
                                    key={Math.random()}
                                    sx={{
                                        backgroundColor: "#1E1F22",
                                        color: "white",
                                        width: "100%",
                                        height: "300px",
                                        boxShadow: "4",
                                    }}
                                >
                                    <CardContent>Project no. {index + 1}</CardContent>
                                </Card>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry> */}
                </Box>

                <Box
                    className="contact"
                    ref={contactRef}
                    sx={{
                        paddingTop: "850px",
                        marginLeft: "35%",
                        height: "130vh",
                        display: "flex",
                        // flexDirection: "column",
                        position: "relative",
                    }}
                >
                    <ContactCards />
                </Box>
            </Container>
        </Container>
    );
}
