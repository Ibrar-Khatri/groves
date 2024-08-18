import Wrapper from "@/components/common/Wrapper";
import ExperienceCard from "./ExperienceCard";

const FinestCuisine = () => {
  const experience = [
    { label: "Vide Vera", image: "experience01.png" },
    { label: "Zama Zulu", image: "experience02.png" },
    { label: "Khawaja Yanni", image: "experience03.png" },
    { label: "Yamagala", image: "experience04.png" },
  ];
  return (
    <Wrapper className="flex flex-col gap-8 text-white 	flex direct-col items-center">
      <div className="flex flex-col gap-3 max-w-3xl	">
        <h1 className="sm:text-center text-4xl">
          Experience the Finest Cuisine
        </h1>
        <p className="sm:text-center	text-xs mb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          mollitia, maiores rem voluptates itaque corrupti corporis minus sed
          delectus consectetur officiis tempora facere quaerat eligendi voluptas
          magni non ipsa facilis.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {experience.map((exp, ind) => (
          <ExperienceCard key={ind} experience={exp} />
        ))}
      </div>
    </Wrapper>
  );
};

export default FinestCuisine;
