
import About from "@/components/sections/About";
import Header from "@/components/layout/Header"
import Committess from "@/components/sections/Committess";
import Memories from "@/components/sections/Memories";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
      <>
          <Header variant="transparent" />
          <About />

          <Team/>
          <Committess/>
          <Memories/>
      </>
  );
}