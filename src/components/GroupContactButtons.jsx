import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "../GroupContactButtons.css";

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
                <i className="fa-solid fa-envelope fa-xl"></i>
            </Link>
            <Link href="https://github.com/AnaSeiculescu" underline="none" target="blank">
                <i className="fa-brands fa-github fa-xl"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/ana-seiculescu/" underline="none" target="blank">
                <i className="fa-brands fa-linkedin fa-xl"></i>
            </Link>
        </Box>
    );
}
