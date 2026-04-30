
import About from "@/components/sections/About";
import Header from "@/components/layout/Header"
import Committess from "@/components/sections/Committess";


export default function Home() {
  return (
      <>
          <Header variant="transparent" />
          <About />
          <Committess/>
      </>
  );
}