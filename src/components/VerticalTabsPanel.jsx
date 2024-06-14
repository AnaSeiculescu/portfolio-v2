import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const VerticalTabs = ({ tabValue, onTabChange }) => {
    const handleTabChange = (event, newValue) => {
        onTabChange(newValue);
        console.log("newValue2: ", newValue);
    };

    return (
        <Box sx={{ display: "flex", position: "sticky", top: "23vh", alignSelf: "center" }}>
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
                <Tab sx={{ color: "white" }} label="Work" />
                <Tab sx={{ color: "white" }} label="Contact" />
            </Tabs>
        </Box>
    );
};

VerticalTabs.propTypes = {
    setTabValue: PropTypes.func,
    tabValue: PropTypes.number,
    onTabChange: PropTypes.func,
};

export default VerticalTabs;
