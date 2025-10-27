import Brands from "../components/PROFILE/Brands";
import ProfileIntro from "../components/PROFILE/ProfileIntro";
import Stats from "../components/PROFILE/Stats";

const About = () => {
  return (
    <>
      <section className="w-full mx-auto px-4 py-6 sm:py-8 md:py-10 sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px]">
        <ProfileIntro />
      </section>
      <section className="w-full bg-bg-buttons my-16 md:my-20 lg:my-24">
        <Stats />
      </section>
      <section className="w-full mx-auto px-4 py-6 sm:py-8 md:py-10 sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px]">
        <Brands />
      </section>
    </>
  );
};

export default About;
