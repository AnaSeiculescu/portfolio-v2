import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
// import { grey } from "@mui/material/colors";

export default function ContactCards() {
    const inputsStyle = {
        marginBottom: "25px",
        // backgroundColor: "white",
    };
    const labelsStyle = {
        marginBottom: "7px",
    };
    // const mySecondaryColor = grey[500];
    return (
        <Box sx={{ position: "relative" /*, width: "90%"*/ }} className="contact-container">
            <Card
                className="message-card"
                sx={{
                    marginTop: "130px",
                    // marginLeft: "20%",
                    marginBottom: "40px",
                    marginRight: "-5px",
                    // width: "800px",
                    // height: "400px",
                    boxShadow: "5",
                    // background:
                    //     "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(192,76,241,1) 11%, rgba(255,255,255,1) 100%)",
                    // backgroundColor: "#e5edbc",
                    // opacity: "7",
                }}
            >
                <CardContent>
                    {/* <Stack
                        sx={{ margin: "30px 0", padding: "0 2%" }}
                        spacing={{ xs: 4, sm: 3 }}
                        direction="column"
                        useFlexGap
                        // flexWrap="wrap"
                    > */}
                    <Stack
                        sx={{ justifyContent: "center", flexGrow: "1", margin: "30px 0", padding: "0 8% 0 32%" }}
                        spacing={{ xs: 5, sm: 3 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                    >
                        {/* <Stack
                            sx={{
                                marginBottom: "40px",
                                width: "100%",
                            }}
                        >
                            <Typography variant="h5" sx={{ width: "100%" }}>
                                Send me an email
                            </Typography>
                        </Stack> */}
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

                    {/* </Stack> */}
                </CardContent>
            </Card>
            <Card
                sx={{
                    position: "absolute",
                    // top: "-50px",
                    top: "-150px",
                    right: "8%",
                    boxShadow: "5",
                    // width: "200px",
                    // height: "70px",
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    marginLeft: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    // backgroundColor: "#25dbc4",
                    backgroundColor: "#f7d31e",
                    // backgroundColor: "#c7e72e",
                    opacity: "0.85",
                    // transform: "translateY(-580%) translateX(-70%)",
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
