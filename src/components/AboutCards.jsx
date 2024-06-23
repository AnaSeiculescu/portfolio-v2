import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AboutCards() {
    return (
        <>
            <Card
                sx={{
                    position: "absolute",
                    top: "3%",
                    boxShadow: "5",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    marginLeft: "55%",
                    marginTop: "50px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "2",
                    // backgroundColor: "#f7d31e",
                    // backgroundColor: "#25dadb",
                    backgroundColor: "#ff9008",
                    opacity: "0.90",
                }}
            >
                <CardContent>about me</CardContent>
            </Card>
            <Card
                sx={{
                    // position: "absolute",
                    marginTop: "150px",
                    marginLeft: "8%",
                    width: "75%",
                    // height: "650px",
                    boxShadow: "4",
                    borderRadius: "150px",
                }}
            >
                <CardContent>
                    <Typography variant="h6" align="center" sx={{ marginTop: "17%" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum repellat illum cum error hic
                        alias, amet commodi? Recusandae error totam dicta aperiam vero modi tenetur nulla perferendis
                        impedit dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum repellat
                        illum cum error hic alias, amet commodi? Recusandae error totam dicta aperiam vero modi tenetur
                        nulla perferendis impedit dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        harum repellat illum cum error hic alias, amet commodi? Recusandae error totam dicta aperiam
                        vero modi tenetur nulla perferendis impedit dolorum? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quod harum repellat illum cum error hic alias, amet commodi? Recusandae error
                        totam dicta aperiam vero modi tenetur nulla perferendis impedit dolorum? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quod harum repellat illum cum error hic alias, amet commodi?
                        Recusandae error totam dicta aperiam vero modi tenetur nulla perferendis impedit dolorum? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Quod harum repellat illum cum error hic
                        alias, amet commodi? Recusandae error totam dicta aperiam vero modi tenetur nulla perferendis
                        impedit dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum repellat
                        illum cum error hic alias, amet commodi? Recusandae error totam dicta aperiam vero modi tenetur
                        nulla perferendis impedit dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        harum repellat illum cum error hic alias, amet commodi? Recusandae error totam dicta aperiam
                        vero modi tenetur nulla perferendis impedit dolorum?
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
