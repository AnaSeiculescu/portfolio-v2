import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

export default function MadeWithLove({ hide = false, changeStyle }) {
    const madeWithLoveStyle = {
        position: "fixed",
        top: "96vh",
        alignSelf: "center",
        fontSize: "14px",
        zIndex: "2",
        fontFamily: "Nunito, sans-serif",
    };

    if (hide) {
        madeWithLoveStyle.display = "none";
    }

    if (changeStyle) {
        madeWithLoveStyle.position = "static";
        madeWithLoveStyle.marginBottom = "10px";
    }
    return (
        <Stack className>
            <Typography sx={madeWithLoveStyle}>
                made with <i className="fa-solid fa-heart" style={{ color: "#FF0000" }}></i> by Ana &copy; 2024
            </Typography>
        </Stack>
    );
}

MadeWithLove.propTypes = {
    hide: PropTypes.bool,
    changeStyle: PropTypes.bool,
};
