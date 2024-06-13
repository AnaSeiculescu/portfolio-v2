import { Typography } from "@mui/material";

export default function MadeWithLove() {
    return (
        <Typography sx={{ position: "fixed", top: "96vh", alignSelf: "center", fontSize: "14px", zIndex: "2" }}>
            made with <i className="fa-solid fa-heart" style={{ color: "#FF0000" }}></i> by Ana &copy; 2024
        </Typography>
    );
}
