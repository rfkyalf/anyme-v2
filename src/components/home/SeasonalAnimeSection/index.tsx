'use client';

import ViewMoreButton from '@/components/ViewMoreButton';
import { getSeasonalAnime } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import SeasonalAnimeContent from './SeasonalAnimeContent';
import SeasonalLoading from './SeasonalLoading';
import { toTitleCase } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function SeasonalAnimeSection() {
  const {
    data: seasonalList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['seasonalAnime'],
    queryFn: () => getSeasonalAnime(1),
  });

  const currentSeasonData = seasonalList?.data[0];
  const seasonName = currentSeasonData?.season || '??';
  const seasonYear = currentSeasonData?.year || '??';

  if (isLoading) return <SeasonalLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="wrapper"
      >
        <div className="flex justify-between items-end mb-2 md:mb-4 lg:mb-5">
          <div className="flex flex-col gap-y-1 md:gap-y-2 lg:gap-y-3">
            <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold border-l-4 border-violet-500 pl-2 md:pl-3 lg:pl-4">
              Seasonal Anime
            </h1>
            <span className="text-neutral-200 text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
              {toTitleCase(seasonName)} {seasonYear}
            </span>
          </div>
          <ViewMoreButton href="/seasonal" display="hidden md:flex" />
        </div>
        <SeasonalAnimeContent seasonalList={seasonalList} />
        <ViewMoreButton href="/seasonal" display="flex md:hidden" />
      </motion.div>
    </section>
  );
}
