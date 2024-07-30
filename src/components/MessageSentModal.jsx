import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import PropTypes from "prop-types";

export function MesssageSentModal({ isSent }) {
    const [state, setState] = useState({
        open: false,
    });

    if (isSent) {
        setState({ open: true });
    }

    const handleAlertOnCLose = () => {
        setState({ open: false });
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={state.open}
            onClose={handleAlertOnCLose}
            message="Your message is sent"
            sx={{ textAlign: "center" }}
        />
    );
}

MesssageSentModal.propTypes = {
    isSent: PropTypes.bool,
};
