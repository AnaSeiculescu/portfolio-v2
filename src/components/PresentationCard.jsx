import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import StickyMenu from "./StickyMenu";
import AboutCards from "./AboutCards";
import ContactCards from "./ContactCards";
import { useInView } from "react-intersection-observer";
import { usePrevious } from "@uidotdev/usehooks";
import Work from "./Work";
// import Divider from "@mui/material/Divider";

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
    const scrollToEntry = (entry) => {
        console.log("entry: ", entry);
        console.log("entry.target.clientTop", entry.target.clientTop);
        console.log("entry.target.scrollTop", entry.target.scrollTop);
        console.log("entry.target.getBoundingClientRect()", entry.target.getBoundingClientRect());

        window.scrollBy({ top: entry.target.getBoundingClientRect().top, behavior: "smooth" });
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

    const handleClickEmail = () => {
        scrollToEntry(contactEntry);
    };

    return (
        <Container
            maxWidth="false"
            className="content"
            disableGutters={true}
            ref={contentRef}
            sx={
                {
                    // position: "relative",
                    // border: "20px solid white",
                }
            }
        >
            <Box sx={{ display: "flex", flexGrow: "1", justifyContent: "center" }}>
                <StickyMenu
                    onTabChange={handleTabChange}
                    contentHeight={contentHeight}
                    tabValue={tabValue}
                    onClickEmail={handleClickEmail}
                />
            </Box>

            <Container
                maxWidth="false"
                disableGutters={true}
                className="scrollingArea"
                sx={{
                    overflow: "auto",
                    // position: "relative",
                    // clipPath: "circle(40%)",
                    // backgroundColor: "#f0f1f0",
                    // marginBottom: "25px",
                    // boxShadow: 5,
                }}
            >
                <Box
                    ref={homeRef}
                    className="home"
                    sx={{
                        // backgroundColor: "#f0f1f0",
                        color: "black",
                        minHeight: "100vh",
                        paddingLeft: "28%",
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
                        paddingTop: "80px",
                        // marginLeft: "35%",
                        // height: "100vh",
                        // display: "flex",
                        // flexDirection: "column",
                        position: "relative",
                    }}
                >
                    {/* <Divider textAlign="right">some about me</Divider> */}
                    <AboutCards />
                </Box>

                <Box
                    ref={workRef}
                    sx={
                        {
                            // backgroundColor: "#f0f1f0",
                            // paddingTop: "40px",
                            // paddingLeft: "35%",
                        }
                    }
                >
                    <Work />
                </Box>
                <Box
                    className="contact"
                    ref={contactRef}
                    sx={{
                        paddingTop: "70px",
                        // paddingLeft: "35%",
                        // minHeight: "100vh",
                        // display: "flex",
                        // flexDirection: "column",
                        position: "relative",
                        // backgroundColor: "#fafafa",
                    }}
                >
                    {/* <Divider textAlign="right">get in touch</Divider> */}
                    <ContactCards />
                </Box>
                {/* <Box
                    sx={{
                        backgroundColor: "#d096e7",
                        width: "80px",
                        height: "80px",
                        position: "relative",
                        bottom: "-40px",
                        left: "60%",
                        borderRadius: "50%",
                    }}
                ></Box> */}
            </Container>

            {/* <Box sx={{ backgroundColor: "#f0f1f0", width: "100%", height: "6vh", overflow: "hidden" }}>
                <Box
                    sx={{
                        width: "100%",
                        height: "10px",
                        boxShadow: 4,
                        position: "relative",
                        top: "-10px",
                    }}
                ></Box>
            </Box> */}
        </Container>
    );
}
