import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "../GroupContactButtons.css";
import PropTypes from "prop-types";

export default function GroupContactButtons({ onClickEmail }) {
    const groupBtnsStyle = {
        // position: "sticky",
        // top: "83.5vh",
        // alignSelf: "center",
        // "& > :not(style) ~ :not(style)": {
        //     ml: 2,
        // },
    };
    return (
        <Box className="group-button-style" sx={groupBtnsStyle}>
            <Link onClick={onClickEmail} underline="none" target="blank">
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

GroupContactButtons.propTypes = {
    onClickEmail: PropTypes.func,
};
