import AnyMeSection from '@/components/AnyMeSection';
import DiscoverGenreSection from '@/components/home/DiscoverGenreSection';
import HeroSection from '@/components/home/HeroSection';
import SeasonalAnimeSection from '@/components/home/SeasonalAnimeSection';
import TopAnimeSection from '@/components/home/TopAnime';
import TopCharacterSection from '@/components/home/TopCharacter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SeasonalAnimeSection />
      <TopAnimeSection />
      <AnyMeSection />
      <TopCharacterSection />
      <DiscoverGenreSection />
    </main>
  );
}
