import Box from "@mui/material/Box";
import portfolioImage from "../../images/portfolio-image3.jpeg";
import VerticalTabsPanel from "./VerticalTabsPanel";
import PropTypes from "prop-types";

export default function StickyMenu({ contentHeight, tabValue, setTabValue, onChange }) {
    const menuStyle = {
        position: "absolute",
        top: "0",
        left: "13%",

        display: "flex",
        flexDirection: "column",
        gap: "40px",

        // backgroundColor: "#000000",
        // background:
        //     "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,22,22,1) 19%, rgba(13,23,23,1) 44%, rgba(144,254,255,1) 100%)",
        // background:
        //     "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,22,22,1) 19%, rgba(13,23,23,1) 44%, rgba(254,254,254,1) 100%)",
        // background:
        //     "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(12,22,22,1) 19%, rgba(13,23,23,1) 44%, rgba(140,225,255,1) 100%)",
        background:
            "linear-gradient(0deg, rgba(172,55,255,1) 0%, rgba(14,6,37,1) 45%, rgba(71,96,217,1) 72%, rgba(34,193,195,1) 100%)",
        color: "white",
        boxShadow: 5,
        borderRadius: "0",

        width: "18%",
        height: contentHeight,
        transition: "height 3.7s",

        textAlign: "center",
        zIndex: "5",
    };

    return (
        <Box className="stickyMenu" style={menuStyle}>
            <img
                src={portfolioImage}
                alt="portfolio-image"
                style={{
                    position: "absolute",
                    top: "60px",
                    left: "-23%",
                    // right: '20%',
                    width: "300px",
                    border: "8px solid #FFF",
                    borderRadius: "3px",
                    alignSelf: "end",
                    marginRight: "30px",
                }}
            />
            <VerticalTabsPanel onTabChange={onChange} tabValue={tabValue} setTabValue={setTabValue} />
        </Box>
    );
}

StickyMenu.propTypes = {
    onChange: PropTypes.func,
    setTabValue: PropTypes.func,
    tabValue: PropTypes.number,
    contentHeight: PropTypes.number,
};
