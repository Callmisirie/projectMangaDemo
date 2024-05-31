import { superwarCover } from "../assets/superwar";
import Section from "../components/Section";
import { RightLine, LeftLine } from "../components/design/Lines";
import { useNavigate } from "react-router-dom";

const Manga = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/manga/pages");
    window.scrollTo(0, 0);
  }

  return (
    <Section
      crosses
      className="overflow-hidden"
      customPaddings="py-8 lg:py-24 xl:py-10"
    >
      <div className="container relative z-2 flex justify-center">
        <div className="relative">
          <div className="flex ">
            <div
              className="w-[19rem] max-lg:w-full
              h-full px-6 bg-n-8 border border-n-6 rounded-[2rem]
              lg:w-auto py-8 my-4 text-color-1 cursor-pointer"
              onClick={handleClick}
            >
              <h4
                className="h4 mb-4 
              text-center font-bold 
              font-code uppercase"
              >
                Super War
              </h4>
              <div className="overflow-hidden rounded-xl">
                <img src={superwarCover} width={260} alt="superwar" />
              </div>

              <div className="h-auto mb-6"></div>
            </div>
          </div>
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Manga;
