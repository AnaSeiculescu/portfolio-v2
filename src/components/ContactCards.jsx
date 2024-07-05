import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";

export default function ContactCards() {
    const inputsStyle = {
        marginBottom: "25px",
    };
    const labelsStyle = {
        marginBottom: "7px",
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
                                    // required
                                    // disabled={isLoading}
                                    id="outlined-required"
                                    name="name"
                                    // label="Required"
                                    // value={localUserInput.username}
                                    // onChange={(event) => handleInput(event)}
                                    sx={inputsStyle}
                                    // fullWidth
                                />
                            </Stack>
                            <Stack>
                                <Typography sx={labelsStyle}>Email:</Typography>
                                <TextField
                                    // required
                                    // disabled={isLoading}
                                    id="outlined-required"
                                    name="email"
                                    // label="Required"
                                    // value={localUserInput.username}
                                    // onChange={(event) => handleInput(event)}
                                    sx={inputsStyle}
                                    // fullWidth
                                />
                            </Stack>
                        </Stack>

                        <Stack sx={{ width: "380px" }}>
                            <Typography sx={labelsStyle}>Message:</Typography>
                            <TextField
                                // required
                                multiline
                                // disabled={isLoading}
                                id="outlined-required"
                                name="message"
                                // prop
                                // InputProps={{
                                //     sx: {
                                //         height: "200px",
                                //         overflowY: "scroll",
                                //     },
                                // }}
                                minRows={6}
                                maxRows={6}
                                // label="Multiline"
                                // value={localUserInput.username}
                                // onChange={(event) => handleInput(event)}
                                sx={{
                                    ...inputsStyle,
                                    // height: 200,
                                    //  flexShrink: 0
                                }}
                                // fullWidth
                            />
                            <Button
                                // fullWidth
                                variant="contained"
                                // disabled={isLoading}
                                sx={{
                                    width: "100px",
                                    alignSelf: "right",
                                    bgcolor: "black",
                                    border: "1px solid black",
                                    boxShadow: 1,
                                }}
                                // onClick={handleSignUp}
                            >
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

            <Typography variant="subtitle1" align="center" sx={{ padding: "5% 5% 0 30%", color: "grey" }}>
                I welcome all feedback—whether you found delight, distaste, excitement, or boredom here.
                <br /> Your thoughts are invaluable to me. <br /> Thank you!
            </Typography>
            <Divider sx={{ padding: "0 5% 5% 30%", marginTop: "50px", marginBottom: "40px", fontSize: "20px" }}>
                🦋
            </Divider>
        </Box>
    );
}
