import HeroSection from '@/components/sections/HeroSection';
import PackagesSection from '@/components/sections/PackagesSection';
import DevicesContentSection from '@/components/sections/DevicesContentSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContentCarousel from '@/components/sections/ContentCarousel';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import BlogCTASection from '@/components/sections/BlogCTASection';
import Footer from '@/components/layout/Footer';



export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  return (
    <>
      <HeroSection locale={locale} />
      <DevicesContentSection locale={locale} />
      <ContentCarousel locale={locale} />
      <WhyChooseUsSection locale={locale} />
      <PackagesSection locale={locale} />
      <HowItWorksSection locale={locale} />
      <FAQSection locale={locale} />
      <BlogCTASection locale={locale} />
      <Footer locale={locale} />
    </>
  );
}