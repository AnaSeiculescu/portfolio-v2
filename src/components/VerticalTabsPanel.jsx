import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log("newValue: ", newValue);
        setValue(newValue);
    };

    return (
        <Box sx={{ display: "flex", position: "sticky", top: "400px", alignSelf: "center" }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
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
}
