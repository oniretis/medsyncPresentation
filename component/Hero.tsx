export default function Hero() {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: "url('/images/02.jpg')" }}
        >
            {/* Overlay to dim background image */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Main Foreground Container */}
            <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-12">

                {/* Header Text - Prominent Foreground */}
                <div className="max-w-3xl z-0 space-y-4 absolute ">
                    <h1 className="text-[clamp(80px,15vw,200px)] font-black leading-none tracking-[-0.04em] text-white/85 drop-shadow-2xl"> MedSync </h1>
                </div>

                {/* App Image - Placed beneath the text */}
                <div className="w-full max-w-4xl z-20">
                    <img
                        src="/images/homeImage.png"
                        alt="MedSync App Interface"
                        className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                    />
                </div>

            </div>
        </section>
    );
}