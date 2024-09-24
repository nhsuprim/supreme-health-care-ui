import Head from "next/head";
import Hero from "../Components/Hero/Hero";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import Specialities from "../Components/Specialities/Specialities";
import TopRatedDoctor from "../Components/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "../Components/WhyUs/WhyUs";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Supreme Health Care</title>
            </Head>
            <div>
                <Hero />
                <Specialities />
                <TopRatedDoctor />
                <WhyUs />
                <HowItWorks />
            </div>
        </>
    );
}
