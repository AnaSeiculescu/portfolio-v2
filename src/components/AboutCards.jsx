import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../AboutCards.css";
import Divider from "@mui/material/Divider";

export default function AboutCards() {
    return (
        <>
            <Card
                sx={{
                    position: "absolute",
                    top: "1%",
                    right: "10%",
                    boxShadow: "5",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    // marginLeft: "55%",
                    marginTop: "50px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    // backgroundColor: "#f7d31e",
                    // backgroundColor: "#25dadb",
                    backgroundColor: "#ff9008",
                    opacity: "0.85",
                }}
            >
                <CardContent sx={{ fontSize: "24px" }}>
                    a short story, <span style={{ fontSize: "32px" }}>about</span> me
                </CardContent>
            </Card>
            <Card
                sx={{
                    marginTop: "150px",
                    marginBottom: "80px",
                    padding: "0 5% 0 37%",
                    boxShadow: "5",
                    // letterSpacing: "0.2px",
                    // background:
                    //     "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(46,153,251,1) 11%, rgba(255,255,255,1) 100%)",
                }}
            >
                <CardContent>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        sx={{
                            marginTop: "13%",
                            marginBottom: "8%",
                            color: "grey",
                            maxWidth: "80ch",
                            letterSpacing: "0.3px",
                            // lineHeight: "1.5",
                        }}
                    >
                        I believe in signs, communication, teamwork, friendship, gratitude…
                        <br />
                        I also believe that every action we take holds multiple meanings and purposes.
                        <br />
                        <br />
                        <span>
                            &quot;The mind is beautiful because of the paradox. It uses itself to understand
                            itself.&quot;
                            <br /> — Adam Elenbaas
                        </span>
                        <Divider sx={{ marginTop: "50px", marginBottom: "40px", fontSize: "20px" }}>🦋</Divider>
                        <Typography className="about-me letter-space" align="left" sx={{ letterSpacing: "0.3px" }}>
                            <br />
                            <Typography className="letter-space" sx={{ fontSize: "21px", letterSpacing: "0.3px" }}>
                                I am a junior web developer, curious and open-minded, eager to learn and embrace new
                                challenges.
                            </Typography>
                            {/* <Divider sx={{ marginTop: "30px" }}></Divider> */}I have honed skills in managing small
                            projects, maintaining client communications, and being both independent and proactive
                            through my experience as a construction architect. Larger projects have taught me the value
                            of teamwork.
                            <Typography className="letter-space" sx={{ letterSpacing: "0.3px" }}>
                                🌤️ I have learned that trust and communication within a team can transform work into a
                                joyful and successful endeavor; without these, work becomes a less inspiring place.
                            </Typography>
                            {/* <Divider sx={{ marginTop: "30px" }}></Divider> */}
                            <br />
                            <br />
                            🐾 For some time now, I have been studying frontend development through online platforms and
                            teaching courses. I am also part of the WebDev Remote Learning Program at Nagarro company.
                            <br />
                            <br />
                            When I&apos;m not at my computer, I enjoy meeting friends, engaging in sports, going for
                            walks, reading, and listening to music.
                            <br />
                            <Divider sx={{ marginTop: "30px" }}></Divider>
                            <br />
                            🦋 I eagerly await the opportunity to join a dynamic work environment where I can continue
                            to learn and contribute.
                        </Typography>
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
