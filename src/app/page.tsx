import Articles from "../../public/components/home/Articles";
import Hero from "../../public/components/home/hero";
import HomeCategories from "../../public/components/home/HomeCategories";
import Offers from "../../public/components/home/Offers";
import Organizers from "../../public/components/home/Organizers";
import HomeStats from "../../public/components/home/HomeStats";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeCategories />
      <Offers />
      <Organizers />
      <Articles />
      <HomeStats />
    </>
  );
}

