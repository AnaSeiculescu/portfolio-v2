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
        <Box sx={{ display: "flex", position: "sticky", top: "20vh", alignSelf: "center", zIndex: "10" }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="inherit"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <Tab sx={{ color: "white", fontWeight: tabValue === 0 && "bold" }} label="Home" />
                <Tab sx={{ color: "white", fontWeight: tabValue === 1 && "bold" }} label="About" />
                <Tab sx={{ color: "white", fontWeight: tabValue === 2 && "bold" }} label="Work" />
                <Tab sx={{ color: "white", fontWeight: tabValue === 3 && "bold" }} label="Contact" />
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
