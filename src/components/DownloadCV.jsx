import axios from "axios";
import fileDownload from "js-file-download";
import Button from "@mui/material/Button";
import "../GroupContactButtons.css";

export default function DownloadCV() {
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

    return (
        <Button
            className="download-cv"
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
