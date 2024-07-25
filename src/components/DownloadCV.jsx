import axios from "axios";
import PropTypes from "prop-types";
import fileDownload from "js-file-download";
import Button from "@mui/material/Button";
import "../GroupContactButtons.css";
// import { ViewportWidth } from "./ViewportWidth";
// import { useEffect } from "react";

export default function DownloadCV({ hide = false }) {
    const myCvURL = "../../resources/AnaSeiculescu-Resume-CV.pdf";
    const handleDownload = (url, filename) => {
        axios
            .get(url, {
                responseType: "blob",
            })
            .then((res) => {
                fileDownload(res.data, filename);
            });
    };

    const downloadBtnStyle = {
        position: "sticky",
        top: "86vh",
        alignSelf: "center",
        zIndex: "1",
        fontWeight: "800",
        color: "#F9CF00",
        fontFamily: "Nunito, sans-serif",
        fontSize: "13px",
    };

    // const viewportWidth = ViewportWidth();

    // useEffect(() => {
    //     if (viewportWidth > 1300) {
    //         setHeight(contentHeight);
    //         setTabPanelOrientation("vertical");
    //     } else {
    //         setHeight(150);
    //         setTabPanelOrientation("horizontal");
    //     }
    // }, [viewportWidth, contentHeight]);

    if (hide) {
        downloadBtnStyle.display = "none";
    }

    return (
        <Button
            className={`download-cv`}
            sx={downloadBtnStyle}
            variant="text"
            color="warning"
            onClick={() => {
                handleDownload(myCvURL, "AnaSeiculescu-Resume-CV.pdf");
            }}
        >
            Download CV
        </Button>
    );
}

DownloadCV.propTypes = {
    hide: PropTypes.bool,
};
