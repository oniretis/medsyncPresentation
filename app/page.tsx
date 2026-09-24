
import Hero from "@/component/Hero";
import Section1 from "@/component/Section1";
import Section2 from "@/component/Section2";
import Section3 from "@/component/Section3";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
