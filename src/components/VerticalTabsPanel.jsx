import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const VerticalTabs = ({ tabValue, onTabChange, tabPanelOrientation }) => {
    const handleTabChange = (event, newValue) => {
        onTabChange(newValue);
        console.log("newValue2: ", newValue);
    };

    return (
        <Box
            className="tabs-panel-box"
            sx={
                {
                    // display: "flex",
                    // position: "sticky",
                    // top: "20vh",
                    // alignSelf: "center",
                    // zIndex: "10",
                    // transform: "scale(0.9)",
                }
            }
        >
            <Tabs
                className="tabs-panel"
                orientation={tabPanelOrientation}
                variant="scrollable"
                value={tabValue}
                onChange={handleTabChange}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "red",
                        // transform: "scale(0.75)",
                    },
                }}
                textColor="inherit"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <Tab
                    sx={{ color: "white", fontWeight: tabValue === 0 && "bold", fontFamily: "Nunito, sans-serif" }}
                    label="Home"
                />
                <Tab
                    sx={{ color: "white", fontWeight: tabValue === 1 && "bold", fontFamily: "Nunito, sans-serif" }}
                    label="About"
                />
                <Tab
                    sx={{ color: "white", fontWeight: tabValue === 2 && "bold", fontFamily: "Nunito, sans-serif" }}
                    label="Work"
                />
                <Tab
                    sx={{ color: "white", fontWeight: tabValue === 3 && "bold", fontFamily: "Nunito, sans-serif" }}
                    label="Contact"
                />
            </Tabs>
        </Box>
    );
};

VerticalTabs.propTypes = {
    setTabValue: PropTypes.func,
    tabValue: PropTypes.number,
    onTabChange: PropTypes.func,
    tabPanelOrientation: PropTypes.string,
};

export default VerticalTabs;
