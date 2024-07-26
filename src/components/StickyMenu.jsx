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
    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (viewportWidth > 1300) {
            setHeight(contentHeight);
            setTabPanelOrientation("vertical");
            setHide(false);
        } else {
            setHeight(150);
            setTabPanelOrientation("horizontal");
            setHide(true);
        }
    }, [viewportWidth, contentHeight]);

    const menuStyle = {
        height: `${height}px`,
        boxShadow: "10",
    };

    return (
        <Box className="stickyMenu" sx={menuStyle}>
            <Box className="contact-info-small-screen">
                <Box className="me-image-wide-screen-box">
                    <img className="me-image-wide-screen" src={portfolioImage} alt="portfolio-image" />
                </Box>
            </Box>

            <VerticalTabsPanel
                onTabChange={onTabChange}
                tabValue={tabValue}
                setTabValue={setTabValue}
                tabPanelOrientation={tabPanelOrientation}
            />
            <GroupContactButtons className="contact-btns-wide-screen" onClickEmail={onClickEmail} hide={hide} />
            <DownloadCV className="cv-wide-screen" hide={hide} />
            <MadeWithLove className="made-with-wide-screen" hide={hide} />
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
