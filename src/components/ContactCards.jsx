import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export default function ContactCards() {
    return (
        <Box sx={{ width: "85%" }}>
            <Card
                sx={{
                    // position: "absolute",
                    marginTop: "130px",
                    marginLeft: "20%",
                    width: "400px",
                    height: "450px",
                    boxShadow: "4",
                }}
            >
                <CardContent></CardContent>
            </Card>
            <Card
                sx={{
                    boxShadow: "5",
                    width: "200px",
                    height: "70px",
                    marginLeft: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    transform: "translateY(-150%) translateX(-70%)",
                }}
            >
                <CardContent>Contact me</CardContent>
            </Card>
        </Box>
    );
}
