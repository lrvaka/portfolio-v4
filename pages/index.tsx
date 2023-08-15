import DesignPortfolio from "@/components/Home/DesignPortfolio";
import DevPortfolio from "@/components/Home/DevPortfolio";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="pt-[50px] w-full">
        <DevPortfolio />
      </section>
    </main>
  );
}
