import Box from "@mui/material/Box";
import portfolioImage from "../../images/portfolio-image3.jpeg";
import VerticalTabsPanel from "./VerticalTabsPanel";
import PropTypes from "prop-types";
import DownloadCV from "./DownloadCV";
import GroupContactButtons from "./GroupContactButtons";
import MadeWithLove from "./MadeWithLove";
import "../StickyMenu.css";
// import "../PortfolioMeImage.css";
import { ViewportWidth } from "./ViewportWidth";
import { useState, useEffect } from "react";

export default function StickyMenu({ onTabChange, contentHeight, tabValue, setTabValue, onClickEmail }) {
    const viewportWidth = ViewportWidth();
    const [height, setHeight] = useState(contentHeight);
    const [tabPanelOrientation, setTabPanelOrientation] = useState("vertical");

    useEffect(() => {
        if (viewportWidth > 1300) {
            setHeight(contentHeight);
            setTabPanelOrientation("vertical");
        } else {
            setHeight(150);
            setTabPanelOrientation("horizontal");
        }
    }, [viewportWidth, contentHeight]);

    const menuStyle = {
        height: `${height}px`,
    };

    return (
        <Box className="stickyMenu" sx={menuStyle}>
            <Box className="me-image-wide-screen-box">
                <img
                    className="me-image-wide-screen"
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

            <VerticalTabsPanel
                onTabChange={onTabChange}
                tabValue={tabValue}
                setTabValue={setTabValue}
                tabPanelOrientation={tabPanelOrientation}
            />
            <GroupContactButtons onClickEmail={onClickEmail} />
            <DownloadCV />
            <MadeWithLove />
        </Box>
    );
}

StickyMenu.propTypes = {
    setTabValue: PropTypes.func,
    tabValue: PropTypes.number,
    onTabChange: PropTypes.func,
    onClickEmail: PropTypes.func,
    contentHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
