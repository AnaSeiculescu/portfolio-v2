// import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
// import { useEffect, forwardRef } from "react";

const VerticalTabs = ({ onTabChange, setTabValue, tabValue }) => {
    // const [tabValue, setTabValue] = React.useState(0);
    // const scrollToRef = (ref) => {
    //     if (ref.current) {
    //         window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    //         console.log("ref.current: ", ref.current);
    //     }
    // };

    // const handleChange = (event, newValue) => {
    //     console.log("newValue: ", newValue);
    //     setTabValue(newValue);

    //     switch (newValue) {
    //         case 0:
    //             scrollToRef(homeRef);
    //             break;
    //         case 1:
    //             scrollToRef(aboutRef);
    //             break;
    //         case 2:
    //             scrollToRef(projectsRef);
    //             break;
    //         case 3:
    //             scrollToRef(contactRef);
    //             break;
    //         default:
    //             break;
    //     }
    // };

    // useEffect(() => {
    //     if (tabValue === 0) {
    //         scrollToRef(homeRef);
    //     } else if (tabValue === 1) {
    //         scrollToRef(aboutRef);
    //     } else if (tabValue === 2) {
    //         scrollToRef(projectsRef);
    //     } else if (tabValue === 3) {
    //         scrollToRef(contactRef);
    //     }
    // }, [tabValue]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        onTabChange(newValue);
        console.log("newValue2: ", newValue);
    };

    return (
        <Box sx={{ display: "flex", position: "sticky", top: "400px", alignSelf: "center" }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="inherit"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <Tab sx={{ color: "white" }} label="Home" />
                <Tab sx={{ color: "white" }} label="About" />
                <Tab sx={{ color: "white" }} label="Projects" />
                <Tab sx={{ color: "white" }} label="Contact" />
            </Tabs>
        </Box>
    );
};

VerticalTabs.propTypes = {
    onTabChange: PropTypes.func,
    setTabValue: PropTypes.func,
    tabValue: PropTypes.number,
};

export default VerticalTabs;
