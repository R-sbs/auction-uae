import Hero from "@/_components/Hero";
import BrowseCatrgories from "@/_components/BrowseByCategories";
import UpcomingArticles from "@/_components/UpcomingAuctions";
import HomeAboutUs from "@/_components/HomeAboutUs";
import DowloadAppCTC from "@/_components/DowloadAppCTC";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      <BrowseCatrgories />
      <UpcomingArticles />
      <HomeAboutUs />
      <DowloadAppCTC />
    </main>
  );
}
