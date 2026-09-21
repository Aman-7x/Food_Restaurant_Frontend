import { SpecialRecipe } from "./../specialRecipe/SpecialRecipe";
import { Exprience } from "./../exprience/Exprience";

import { HeadTheme } from "../header/HeadTheme";
export const Home = () => {
  return (
    <>
      <HeadTheme />
      <Exprience />
      <SpecialRecipe />
    </>
  );
};
