import { Button, Container } from "@mui/material";
import Image from "next/image";
import gridSvg from "@/assets/svgs/grid.svg";
import arrowSvg from "@/assets/svgs/arrow.svg";
import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";
import stethoscope from "@/assets/images/Stetoscope.png";

const Hero = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row justify-between items-center lg:h-screen relative">
                {/* Left Section */}
                <div className="relative flex flex-col justify-center items-start w-full md:w-1/2 h-full p-8">
                    {/* Centered Text */}
                    <div className="flex flex-col items-start w-full">
                        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                            Healthier Hearts
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                            Comes From
                        </h1>
                        <h1 className="text-blue-600 text-4xl md:text-6xl font-semibold mb-4">
                            Preventive Care
                        </h1>
                        <p className="text-justify text-gray-500 mb-8 text-sm md:text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Animi magni deleniti quam minima tempore
                            beatae? Sit ipsa explicabo accusamus consectetur,
                            distinctio culpa minima ullam laborum
                        </p>
                        <div className="flex gap-3 w-full">
                            <Button>Make Appointment</Button>
                            <Button variant="outlined">Contact Us</Button>
                        </div>
                    </div>
                    {/* Background Image */}
                    <Image
                        src={gridSvg}
                        alt="grid"
                        className="absolute object-cover transition-transform duration-200 hover:scale-110 hidden md:w-[600]"
                    />
                </div>

                <div className="hidden md:block relative w-1/2">
                    {/* Use absolute positioning within a relative container */}
                    <div className="relative w-full h-full">
                        <Image
                            src={doctor1}
                            alt="Doctor 1"
                            width={200}
                            height={300}
                            className="absolute object-cover"
                            style={{ top: "-150px", right: "300px" }}
                        />
                        <Image
                            src={arrowSvg}
                            alt="Arrow"
                            width={100}
                            height={200}
                            className="absolute object-cover"
                            style={{ top: "-220px", right: "260px" }}
                        />
                        <Image
                            src={stethoscope}
                            alt="Stethoscope"
                            width={200}
                            height={300}
                            className="absolute object-cover"
                            style={{ bottom: "-250px", right: "10px" }}
                        />
                        <Image
                            src={doctor2}
                            alt="Doctor 2"
                            width={200}
                            height={300}
                            className="absolute object-cover"
                            style={{ bottom: "-120px", right: "80px" }}
                        />
                        <Image
                            src={doctor3}
                            alt="Doctor 3"
                            width={200}
                            height={200}
                            className="absolute object-cover"
                            style={{ bottom: "-200px", right: "210px" }}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Hero;
