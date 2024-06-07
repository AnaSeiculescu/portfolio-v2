import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import logo1 from "../../images/logo1.png";
// import { useEffect } from "react";
// import MagicScroll from "magic-scroll";
import { useState, useRef } from "react";

export function PresentationCard() {
    const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0 });
    const scrollDemoRef = useRef(null);

    const prevScrollTopRef = useRef(0);

    const [menuPosition, setMenuPosition] = useState("absolute");
    const [menuTop, setMenuTop] = useState("80vh");

    const menuStyle = {
        position: menuPosition,
        top: menuTop,
        left: "13%",
        backgroundColor: "#000000",
        boxShadow: 5,
        borderRadius: "0",
        width: "25%",
        height: "100%",
        color: "white",
        textAlign: "center",
        paddingTop: "50px",
    };

    const logoStyle = {
        position: "absolute",
        top: "0",
        left: "30px",
        width: "110px",
        height: "110px",
    };

    const findThePrevScroll = (e) => {
        // console.log("eventul este: ", e);
        const currentScrollTop = e.target.scrollTop;
        // const prevScrollTop = prevScrollTopRef.current;

        prevScrollTopRef.current = currentScrollTop;

        return prevScrollTopRef.current;
    };

    const handleScroll = (e) => {
        if (scrollDemoRef.current) {
            const { scrollTop } = scrollDemoRef.current;
            // console.log("scrollDemoRef.current: ", scrollDemoRef);
            setScrollPosition({ scrollTop });
        }
        if (scrollPosition.scrollTop >= "750") {
            console.log("scrollPosition: ", scrollPosition);
            setScrollPosition(scrollPosition.scrollTop);
            setMenuPosition("sticky");
            setMenuTop("0");
        }

        const prevScroll = findThePrevScroll(e);
        if (scrollPosition.scrollTop < "700" && prevScroll >= "750") {
            console.log("VREAU ceva aici");
        }
    };

    return (
        <Container
            maxWidth="false"
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                backgroundColor: "#000000",
            }}
        >
            <Box
                className="scrollingArea"
                ref={scrollDemoRef}
                sx={{
                    position: "relative",
                    backgroundColor: "#2c303a",
                    color: "white",
                    margin: "30px 6px",
                    overflow: "auto",
                    flexGrow: 1,
                }}
                onScroll={handleScroll}
            >
                <img src={logo1} alt="logo" style={logoStyle} />
                <Box className="stickyMenu" ref={scrollDemoRef} style={menuStyle}>
                    Ana Seiculescu Portfolio <br /> scrollTop: {scrollPosition.scrollTop}
                </Box>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 400: 1, 850: 2, 1250: 3 }}
                    style={{ margin: "25px 25px 25px 40%" }}
                >
                    <Masonry gutter="15px">
                        {new Array(23).fill(null).map((elem, index) => (
                            <Card
                                key={Math.random()}
                                sx={{
                                    backgroundColor: "#1E1F22",
                                    color: "white",
                                    width: "100%",
                                    height: "250px",
                                }}
                            >
                                <CardContent>Project no. {index + 1}</CardContent>
                            </Card>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </Box>
        </Container>
    );
}
