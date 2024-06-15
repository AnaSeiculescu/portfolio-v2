import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ContactCards() {
    return (
        <>
            <Card
                sx={{
                    position: "absolute",
                    top: "450px",
                    left: "10%",
                    width: "40%",
                    height: "50%",
                    boxShadow: "4",
                }}
            >
                <CardContent></CardContent>
            </Card>
            <Card
                sx={{
                    boxShadow: "5",
                    width: "25%",
                    height: "100px",
                    marginLeft: "45%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                }}
            >
                <CardContent>Contact me</CardContent>
            </Card>
        </>
    );
}
