// import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// import Box from '@mui/material/Box';

export default function GroupContactButtons() {
    const groupBtnsStyle = {
        position: "sticky",
        top: "83.5vh",
        // height: "5vh",
        alignSelf: "center",
        "& > *": {
            m: 1,
        },
    };
    return (
        <ButtonGroup variant="outlined" sx={groupBtnsStyle}>
            <i className="fa-solid fa-envelope fa-xl" style={{ color: "#F9CF00" }}></i>
            <i className="fa-brands fa-github fa-xl" style={{ color: "#F9CF00" }}></i>
            <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#F9CF00" }}></i>
        </ButtonGroup>
    );
}
