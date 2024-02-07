import { Welcome } from "./Welcome/Welcome";
import { Cloud } from "./Cloud/Cloud";
import { WhatIsIt } from "./WhatIsIt/WhatIsIt";
import { Testimonial } from "./Testimonial/Testimonial";
import { News } from "./News/News";
import { Features } from "./Features/Features";

export const Home = () => {
  return (
    <>
      <Welcome />
      <div className="container">
        <Cloud />
        <WhatIsIt />
        <Features />
        <Testimonial />
        <News />
      </div>
    </>
  );
};
