import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export default function GroupContactButtons() {
    const groupBtnsStyle = {
        position: "sticky",
        top: "83.5vh",
        alignSelf: "center",
        "& > :not(style) ~ :not(style)": {
            ml: 2,
        },
    };
    return (
        <Box sx={groupBtnsStyle}>
            <Link href="" underline="none" target="blank">
                <i className="fa-solid fa-envelope fa-l" style={{ color: "#F9CF00" }}></i>
            </Link>
            <Link href="https://github.com/AnaSeiculescu" underline="none" target="blank">
                <i className="fa-brands fa-github fa-l" style={{ color: "#F9CF00" }}></i>
            </Link>
            <Link href="https://www.linkedin.com/in/ana-seiculescu/" underline="none" target="blank">
                <i className="fa-brands fa-linkedin fa-l" style={{ color: "#F9CF00" }}></i>
            </Link>
        </Box>
    );
}
