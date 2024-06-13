import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ContactCards() {
    return (
        <>
            <Card
                sx={{
                    position: "absolute",
                    top: "200px",
                    left: "10%",
                    width: "60%",
                    height: "300px",
                    boxShadow: "4",
                }}
            >
                <CardContent></CardContent>
            </Card>
            <Card
                sx={{
                    boxShadow: "5",
                    width: "30%",
                    height: "150px",
                    marginLeft: "50%",
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
