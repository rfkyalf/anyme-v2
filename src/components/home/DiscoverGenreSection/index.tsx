'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { getGenres } from '@/lib/actions';
import { MotionLink } from '@/lib/framer';
import { toSlug } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';

export default function DiscoverGenreSection() {
  const {
    data: genreList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['genre'],
    queryFn: getGenres,
  });

  if (isLoading)
    return (
      <section className="bg-neutral-950 pb-8 md:pb-12">
        <div className="wrapper">
          <Skeleton className="h-10 w-[70%] md:w-[40%] lg:w-[25%] bg-neutral-800 mb-4 self-center" />
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-3 md:mt-4 lg:mt-5">
            {Array.from({ length: 36 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-10 bg-neutral-800" />
            ))}
          </div>
        </div>
      </section>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <section className="bg-neutral-950 pb-8 md:pb-12">
      <div className="wrapper">
        <h1 className="text-neutral-50 text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold self-center text-pretty">
          Struggling to Choose? Discover Anime by Genre!
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-3 md:mt-4 lg:mt-5">
          {genreList?.data.map((genre: any) => (
            <MotionLink
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.4 },
                y: { duration: 0.2 },
              }}
              viewport={{ once: true }}
              href={`/genre/${genre.mal_id}?name=${toSlug(genre.name)}`}
              key={genre.mal_id}
              target="_blank"
              className="text-neutral-50 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] break-words border border-violet-500 px-2 py-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-violet-500 hover:scale-105 cursor-pointer"
            >
              {genre.name}
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
