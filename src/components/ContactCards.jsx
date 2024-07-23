import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";

export default function ContactCards() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadingOnClick = () => {
        setIsLoading(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLoadingOnClick();

        const serviceID = "service_tfrhdd6";
        const templateID = "template_o82suek";
        const publicKey = "QN8EhX4ApY_fsmSnd";

        const templateParams = {
            name: name,
            email: email,
            to_name: "Ana Seiculescu",
            message: message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setName("");
                setEmail("");
                setMessage("");
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error sending email: ", error);
            });
    };

    const inputsStyle = {
        marginBottom: "25px",
        fontFamily: "Nunito, sans-serif",
    };
    const labelsStyle = {
        marginBottom: "7px",
        fontFamily: "Nunito, sans-serif",
    };
    return (
        <Box sx={{ position: "relative" }} className="contact-container">
            <Card
                className="message-card"
                sx={{
                    marginTop: "130px",
                    marginBottom: "40px",
                    marginRight: "-5px",
                    boxShadow: "5",
                }}
            >
                <CardContent>
                    <Stack
                        sx={{ justifyContent: "center", flexGrow: "1", margin: "30px 0", padding: "0 8% 0 32%" }}
                        spacing={{ xs: 5, sm: 3 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                    >
                        <Stack sx={{ width: "380px" }}>
                            <Stack>
                                <Typography sx={labelsStyle}>Name:</Typography>
                                <TextField
                                    id="outlined-required"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={inputsStyle}
                                />
                            </Stack>
                            <Stack>
                                <Typography sx={labelsStyle}>Email:</Typography>
                                <TextField
                                    id="outlined-required"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={inputsStyle}
                                />
                            </Stack>
                        </Stack>

                        <Stack sx={{ width: "380px" }}>
                            <Typography sx={labelsStyle}>Message:</Typography>
                            <TextField
                                multiline
                                id="outlined-required"
                                name="message"
                                minRows={6}
                                maxRows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                sx={{
                                    ...inputsStyle,
                                }}
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    width: "100px",
                                    alignSelf: "right",
                                    bgcolor: "black",
                                    border: "1px solid black",
                                    boxShadow: 1,
                                    fontFamily: "Nunito, sans-serif",
                                }}
                                onClick={handleSubmit}
                            >
                                {isLoading && <CircularProgress size={25} />}
                                Send
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
            <Card
                sx={{
                    position: "absolute",
                    top: "-150px",
                    right: "8%",
                    boxShadow: "5",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    marginLeft: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",

                    backgroundColor: "#f7d31e",
                    opacity: "0.85",
                }}
            >
                <CardContent sx={{ fontSize: "20px", textAlign: "center" }}>Send me an email</CardContent>
            </Card>

            <Typography
                variant="subtitle1"
                align="center"
                sx={{ padding: "5% 5% 0 30%", color: "grey", fontFamily: "Nunito, sans-serif" }}
            >
                I welcome all feedback—whether you found delight, distaste, excitement, or boredom here.
                <br /> Your thoughts are invaluable to me. <br /> Thank you!
            </Typography>
            <Divider sx={{ padding: "0 5% 5% 30%", marginTop: "50px", marginBottom: "40px", fontSize: "20px" }}>
                🦋
            </Divider>
        </Box>
    );
}
