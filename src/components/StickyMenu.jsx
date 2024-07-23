import Box from "@mui/material/Box";
import portfolioImage from "../../images/portfolio-image3.jpeg";
import VerticalTabsPanel from "./VerticalTabsPanel";
import PropTypes from "prop-types";
import DownloadCV from "./DownloadCV";
import GroupContactButtons from "./GroupContactButtons";
import MadeWithLove from "./MadeWithLove";
import "../StickyMenu.css";

export default function StickyMenu({ onTabChange, contentHeight, tabValue, setTabValue, onClickEmail }) {
    const menuStyle = {
        position: "absolute",
        top: "0",
        left: "10%",

        display: "flex",
        flexDirection: "column",
        gap: "40px",

        background:
            "linear-gradient(0deg, rgba(172,55,255,1) 0%, rgba(14,6,37,1) 45%, rgba(71,96,217,1) 72%, rgba(34,193,195,1) 100%)",
        color: "white",
        boxShadow: 8,
        borderRadius: "0",

        width: "18%",
        height: contentHeight,
        transition: "height 3.7s",

        textAlign: "center",
        zIndex: "5",
        opacity: "0.95",
        fontFamily: "Nunito, sans-serif",
    };

    return (
        <Box className="stickyMenu" sx={menuStyle}>
            <Box>
                <img
                    src={portfolioImage}
                    alt="portfolio-image"
                    style={{
                        position: "absolute",
                        top: "48vh",
                        left: "-23%",
                        width: "250px",
                        border: "8px solid #FFF",
                        borderRadius: "3px",
                        marginRight: "30px",
                        boxShadow: "1px 1px 5px rgb(117, 116, 116)",
                    }}
                />
            </Box>

            <VerticalTabsPanel onTabChange={onTabChange} tabValue={tabValue} setTabValue={setTabValue} />
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
