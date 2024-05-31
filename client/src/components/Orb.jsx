import { smallSphere, stars } from "../assets";
import Section from "./Section";

export const Orb = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <div className="hidden relative justify-center lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div
            className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2
          -translate-y-1/2 pointer-events-none"
          >
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
