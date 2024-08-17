import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../AboutCards.css";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import "../PageSections.css";

export default function AboutCards() {
    return (
        <Box sx={{ fontFamily: "Nunito, sans-serif", marginTop: "200px" }}>
            <Card
                className="about-card-title"
                sx={{
                    // position: "absolute",
                    // top: "1%",
                    // right: "10%",
                    boxShadow: "5",
                    // width: "250px",
                    // height: "250px",
                    borderRadius: "50%",
                    // marginTop: "50px",
                    // textAlign: "center",
                    // display: "flex",
                    // alignItems: "center",
                    // justifyContent: "center",
                    // zIndex: "2",
                    backgroundColor: "#ff9008",
                    // opacity: "0.85",
                }}
            >
                <CardContent sx={{ fontSize: "24px" }}>
                    a short story, <span style={{ fontSize: "32px" }}>about</span> me
                </CardContent>
            </Card>
            <Card
                className="about-card-text"
                sx={{
                    // marginTop: "150px",
                    // marginBottom: "80px",
                    // padding: "0 5% 0 37%",
                    boxShadow: "5",
                    fontFamily: "Nunito, sans-serif",
                }}
            >
                <CardContent sx={{ maxWidth: "80ch" }}>
                    <Typography
                        className="about-card-content-text"
                        variant="subtitle1"
                        align="center"
                        sx={{
                            marginTop: "13%",
                            marginBottom: "8%",
                            color: "grey",
                            letterSpacing: "0.5px",
                            lineHeight: "1.7",
                            fontFamily: "Nunito, sans-serif",
                        }}
                    >
                        I believe in signs, communication, teamwork, friendship, gratitude…
                        <br />
                        I also believe that every action we take holds multiple meanings and purposes.
                        <br />
                        <br />
                        <br />
                        <span>
                            <i>
                                &quot;The mind is beautiful because of the paradox. It uses itself to understand
                                itself.&quot;
                            </i>
                            <br /> — Adam Elenbaas
                        </span>
                    </Typography>

                    <Divider sx={{ marginTop: "50px", marginBottom: "40px", fontSize: "20px" }}>🦋</Divider>

                    <br />
                    <Typography variant="subtitle1" className="letter-space" sx={{ fontFamily: "Nunito, sans-serif" }}>
                        I am a junior web developer, curious and open-minded, eager to learn and embrace new challenges.
                    </Typography>
                    <br />
                    <Typography variant="subtitle1" className="letter-space" sx={{ fontFamily: "Nunito, sans-serif" }}>
                        I have honed skills in managing small projects, maintaining client communications, and being
                        both independent and proactive through my experience as a construction architect. Larger
                        projects have taught me the value of teamwork.
                    </Typography>
                    <Typography variant="subtitle1" className="letter-space" sx={{ fontFamily: "Nunito, sans-serif" }}>
                        🌤️ I have learned that trust and communication within a team can transform work into a joyful
                        and successful endeavor; without these, work becomes a less inspiring place.
                    </Typography>

                    <br />
                    <br />
                    <Typography variant="subtitle1" className="letter-space" sx={{ fontFamily: "Nunito, sans-serif" }}>
                        🐾 For some time now, I have been studying frontend development through online platforms and
                        teaching courses. I was also part of the WebDev Remote Learning Programme at Nagarro company.
                        <br />
                        <br />
                        When I&apos;m not at my computer, I enjoy meeting friends, engaging in sports, going for walks,
                        reading, and listening to music.
                    </Typography>
                    <br />
                    <Divider sx={{ marginTop: "30px" }}></Divider>
                    <Typography
                        variant="subtitle1"
                        className="letter-space"
                        sx={{ marginBottom: "80px", fontFamily: "Nunito, sans-serif" }}
                    >
                        <br />I eagerly await the opportunity to join a dynamic work environment where I can continue to
                        learn and contribute.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
