import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function MadeWithLove() {
    return (
        <Stack>
            <Typography
                sx={{
                    position: "fixed",
                    top: "96vh",
                    alignSelf: "center",
                    fontSize: "14px",
                    zIndex: "2",
                    fontFamily: "Nunito, sans-serif",
                }}
            >
                made with <i className="fa-solid fa-heart" style={{ color: "#FF0000" }}></i> by Ana &copy; 2024
            </Typography>
        </Stack>
    );
}
