import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import "../Work.css";

export default function Work() {
    return (
        <Box className="work-container" sx={{ padding: "2% 2% 2% 35%" }}>
            <Box className="first-scroll-container">
                <Box className="first-carousell-primary">
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "red", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "green", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "yellow", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "blue", boxShadow: "4" }}></Card>
                </Box>
                <Box className="first-carousell-primary first-carousell-secondary">
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "red", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "green", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "yellow", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "blue", boxShadow: "4" }}></Card>
                </Box>
            </Box>
            <Box className="second-scroll-container">
                <Box className="second-carousell-primary">
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "yellow", boxShadow: "4" }}></Card>
                    <Card
                        sx={{ width: "150px", height: "150px", backgroundColor: "lightgreen", boxShadow: "4" }}
                    ></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "purple", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "lightblue", boxShadow: "4" }}></Card>
                </Box>
                <Box className="second-carousell-primary second-carousell-secondary">
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "yellow", boxShadow: "4" }}></Card>
                    <Card
                        sx={{ width: "150px", height: "150px", backgroundColor: "lightgreen", boxShadow: "4" }}
                    ></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "purple", boxShadow: "4" }}></Card>
                    <Card sx={{ width: "150px", height: "150px", backgroundColor: "lightblue", boxShadow: "4" }}></Card>
                </Box>
            </Box>
        </Box>
    );
}
