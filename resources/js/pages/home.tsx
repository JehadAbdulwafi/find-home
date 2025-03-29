import FeaturedProperties from '@/components/featured-properties';
import { Testimonials } from "@/components/testimonials"
import { HowItWorks } from '@/components/how-it-works';
import { NeighborhoodGuide } from '@/components/neighborhood';
import { CTASection } from '@/components/cta-section';
import { PropertyCategories } from "@/components/property-categories"
import { HeroSection } from '@/components/hero-section';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';


export default function Welcome() {
  return (
    <AppLayout>
      <Head title="Welcome">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <HeroSection />
      <FeaturedProperties />
      <PropertyCategories />
      <HowItWorks />
      <Testimonials />
      <NeighborhoodGuide />
      <CTASection />
    </AppLayout>
  );
}


