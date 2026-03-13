import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import KeyFeatures from "@/components/home/KeyFeatures";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/shared/FinalCTA";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <KeyFeatures />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
