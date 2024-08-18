import HeaderSection from "./HeaderSection";
import EndlessPossibilities from "./EndlessPossibilities";
import FinestCuisine from "./FinestCuisine";
import LocationSection from "./LocationSection";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#283606] to-[#0F1500] flex flex-col gap-10">
      <HeaderSection />
      <EndlessPossibilities />
      <FinestCuisine />
      <LocationSection />
    </div>
  );
};

export default Home;
