import { Button } from "@mui/material";

const Specialities = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${apiUrl}/specialities/`, {
        next: {
            revalidate: 30,
        },
    });

    const specialities = await res.json();
    // console.log(specialities);

    return (
        <div className="container">
            <h1 className="title">Explore Treatments across specialties</h1>
            <h2 className="sub-title">
                Find experienced doctors accross all specialties
            </h2>

            <div className="md:flex gap-10 pt-16 justify-center text-center rounded-full">
                {specialities.data?.map((speciality: any) => (
                    <div key={speciality.id} className="flex gap-4">
                        <div className="p-4 mb-3 md:p-6 bg-slate-100 w-full mx-auto flex flex-col items-center rounded-lg transition-transform duration-300 hover:scale-105">
                            <img
                                src={speciality.icon}
                                alt={speciality.title}
                                className="w-16 h-16 md:w-24 md:h-24 object-contain"
                            />
                            <p className="mt-2 md:mt-4 font-semibold">
                                {speciality.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center my-6">
                <Button variant="outlined">See more</Button>
            </div>
        </div>
    );
};

export default Specialities;
