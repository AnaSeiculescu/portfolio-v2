import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const VerticalTabs = ({ onTabChange, setTabValue, tabValue }) => {
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
