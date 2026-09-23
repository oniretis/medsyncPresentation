import Image from "next/image";

export default function Section2() {
    const phoneImages = Array.from({ length: 27 }, (_, i) => `/images/phone${i + 1}.png`);

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Phone Screens</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {phoneImages.map((src, index) => (
                    <div key={index} className="relative w-full aspect-[9/16]">
                        <Image
                            src={src}
                            alt={`Phone screen ${index + 1}`}
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
