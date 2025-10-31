import Hero from "../components/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <section className="w-full mx-auto sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px] mb-30">
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default Home;
