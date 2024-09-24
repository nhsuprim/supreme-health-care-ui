import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopRatedDoctor = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${apiUrl}/doctor/?limit=3`, {
        next: {
            revalidate: 30,
        },
    });

    const topDoctors = await res.json();
    // console.log(topDoctors);
    return (
        <div
            className="py-64"
            style={{
                backgroundColor: "rgba(20, 20, 20, 0.1)",
                clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
            }}
        >
            <h1 className="title text-center">Our Top Rated Doctors</h1>
            <p className="sub-title text-center">
                Access to expert physicians and surgeons, advance technologies
            </p>
            <p className="sub-title text-center">
                and top-quality surgery facilities right here.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mx-5 my-8">
                {topDoctors.data?.map((doctor: any) => (
                    <div
                        key={doctor.id}
                        className="flex justify-center items-center w-full md:w-auto"
                    >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={doctor.profilePhoto}
                                    alt={doctor.name}
                                    sx={{
                                        // height: 200, // Adjust height as needed
                                        width: "100%",
                                        objectFit: "contain", // Ensures the entire image is visible
                                        display: "block",
                                        margin: "0 auto",
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        align="left"
                                        fontWeight={400}
                                    >
                                        {doctor.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            textAlign: "left",
                                        }}
                                    >
                                        {doctor.qualification} ,{" "}
                                        {doctor.designation}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "text.secondary",
                                            textAlign: "start",
                                            py: 1,
                                            mb: 2,
                                        }}
                                    >
                                        <LocationOnIcon /> {doctor.address}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                sx={{
                                    justifyContent: "space-between",
                                    mx: 1,
                                }}
                            >
                                <Button size="small" color="primary">
                                    Book Now
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                >
                                    View profile
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="flex justify-center my-8">
                <Button variant="outlined">View all doctors</Button>
            </div>
        </div>
    );
};

export default TopRatedDoctor;
