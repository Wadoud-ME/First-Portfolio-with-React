import { useTheme } from "../../hooks/useTheme";
import { BRANDS } from "../../data/brands";

const Brands = () => {
  const { isDark } = useTheme();

  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">
        Trusted by Leading Brands
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="w-70 h-42 sm:w-full sm:h-36 md:h-40 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <img
              src={isDark ? brand.darkModeLogo : brand.lightModeLogo}
              alt={`${brand.name} logo`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Brands;