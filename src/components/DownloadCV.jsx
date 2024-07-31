import axios from "axios";
import PropTypes from "prop-types";
import fileDownload from "js-file-download";
import Link from "@mui/material/Link";
import "../GroupContactButtons.css";
import CV from "../../resources/CV-AnaSeiculescu.pdf";

export default function DownloadCV({ hide = false, changeStyle }) {
    const myCvURL = CV;
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
        top: "86.5vh",
        alignSelf: "center",
        zIndex: "1",
        fontWeight: "800",
        color: "#F9CF00",
        fontFamily: "Nunito, sans-serif",
        fontSize: "16px",
    };

    if (changeStyle) {
        downloadBtnStyle.top = "40px";
        downloadBtnStyle.left = "120px";
        downloadBtnStyle.fontSize = "16px";
    }

    if (hide) {
        downloadBtnStyle.display = "none";
    }

    return (
        <Link
            component="button"
            // href={linkHref}
            underline="none"
            className={`download-cv`}
            sx={downloadBtnStyle}
            variant="text"
            // color="warning"
            onClick={() => {
                handleDownload(myCvURL, "CV-AnaSeiculescu.pdf");
            }}
        >
            <p>Download CV</p>
            {/* Download CV */}
        </Link>
    );
}

DownloadCV.propTypes = {
    hide: PropTypes.bool,
    changeStyle: PropTypes.bool,
};
