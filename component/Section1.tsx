import Image from "next/image";

export default function Section1() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="relative w-full h-auto">
                <Image
                    src="/images/medicalImage.png"
                    alt="Medical Image"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            <div className="relative w-full h-auto">
                <Image
                    src="/images/section1.png"
                    alt="Section 1"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
}
