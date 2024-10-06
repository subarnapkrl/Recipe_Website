import Banner from "../components/UI/Hero/Banner";
import BlogPart from "../components/UI/Hero/BlogPart";
import CategorySlider from "../components/UI/Hero/CategorySlider";
import Display from "../components/UI/Hero/Display";
import Recipeshow from "../components/UI/Hero/Recipeshow";

const Home = () => {
  return (
    <>
      <Banner />
      <CategorySlider />
      <Recipeshow />
      <Display />
      <BlogPart />
    </>
  );
};

export default Home;
