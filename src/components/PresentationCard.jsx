import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
// import Stack from "@mui/material/Stack";
import backgroundImg from "../../images/home-background-picture4.png";
import "../PageSections.css";

import { Typography } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import StickyMenu from "./StickyMenu";
import AboutCards from "./AboutCards";
import ContactCards from "./ContactCards";
import { useInView } from "react-intersection-observer";
import { usePrevious } from "@uidotdev/usehooks";
import Work from "./Work";
import portfolioImage from "../../images/portfolio-image3.jpeg";

import DownloadCV from "./DownloadCV";
import GroupContactButtons from "./GroupContactButtons";
import "../GroupContactButtons.css";
import { ViewportWidth } from "./ViewportWidth";
import MadeWithLove from "./MadeWithLove";

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

    const viewportWidth = ViewportWidth();
    const [hide, setHide] = useState(false);
    const [changeStyle, setChangeStyle] = useState(false);

    useEffect(() => {
        if (viewportWidth > 1300) {
            setHide(true);
            setChangeStyle(false);
        } else {
            setHide(false);
            setChangeStyle(true);
        }
    }, [viewportWidth, contentHeight]);

    return (
        <Container maxWidth="false" className="content" disableGutters={true} ref={contentRef}>
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
                    position: "relative",
                    overflow: "auto",
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundPosition: "right top",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "912px 680px",
                }}
            >
                <Stack className="contact-info-small-screen" direction="row" spacing={3}>
                    <Box className="me-image-small-screen-box">
                        <img
                            className="me-image-small-screen"
                            src={portfolioImage}
                            alt="portfolio-image"
                            // style={{
                            //     position: "absolute",
                            //     top: "48vh",
                            //     left: "-23%",
                            //     width: "250px",
                            //     border: "8px solid #FFF",
                            //     borderRadius: "3px",
                            //     marginRight: "30px",
                            //     boxShadow: "1px 1px 5px rgb(117, 116, 116)",
                            // }}
                        />
                    </Box>
                    <DownloadCV hide={hide} className="cv-small-screen" changeStyle={changeStyle} />
                    <GroupContactButtons
                        className="contact-btns-small-screen"
                        onClickEmail={handleClickEmail}
                        hide={hide}
                        changeStyle={changeStyle}
                    />
                </Stack>

                <Box
                    direction={"row"}
                    ref={homeRef}
                    className="home"
                    sx={
                        {
                            // color: "black",
                            // minHeight: "100vh",
                            // paddingLeft: "28%",
                            // alignContent: "center",
                            // textAlign: "center",
                            // zIndex: "2",
                            // position: "relative",
                        }
                    }
                >
                    <Typography
                        className="welcome-text"
                        sx={
                            {
                                // fontFamily: "Nunito, sans-serif",
                                // fontSize: "90px",
                                // fontWeight: "200",
                                // position: "absolute",
                                // top: "67vh",
                                // left: "42%",
                                // lineHeight: "0.6",
                            }
                        }
                    >
                        Welcome! <br />
                        <span className="i-am-text">
                            I&apos;m <span style={{ fontWeight: "600" }}>Ana</span>, web developer
                        </span>
                    </Typography>
                </Box>

                <Box
                    ref={aboutRef}
                    className="about"
                    sx={{
                        paddingTop: "80px",
                        position: "relative",
                    }}
                >
                    <AboutCards />
                </Box>

                <Box ref={workRef}>
                    <Work />
                </Box>
                <Box
                    className="contact"
                    ref={contactRef}
                    sx={{
                        paddingTop: "70px",
                        position: "relative",
                    }}
                >
                    <ContactCards />
                </Box>
                <MadeWithLove className="made-with-small-screen" hide={hide} changeStyle={changeStyle} />
            </Container>
        </Container>
    );
}
