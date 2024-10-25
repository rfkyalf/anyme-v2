'use client';

import { getHeroes } from '@/lib/actions';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useState } from 'react';
import { HeroContent } from './HeroContent';
import { HeroIndicator } from './HeroIndicator';
import HeroLoading from './HeroLoading';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ['heroes'],
    queryFn: getHeroes,
  });

  if (isLoading) return <HeroLoading />;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="relative h-screen w-full">
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-neutral-950" />
      <div className="absolute z-10 h-full w-full bg-gradient-to-r via-transparent from-neutral-950" />
      {data?.data && data.data.length > 0 && (
        <div>
          {data.data.slice(currentIndex, currentIndex + 1).map((hero: any) => (
            <div key={hero.mal_id}>
              <Image
                src={
                  hero.mal_id === 11061
                    ? hero.trailer.images.large_image_url
                    : hero.trailer.images.maximum_image_url
                }
                alt={hero.title}
                width={5000}
                height={5000}
                className="absolute h-full w-full object-cover z-0"
              />
              <HeroContent hero={hero} currentIndex={currentIndex} />
            </div>
          ))}
          <HeroIndicator
            data={data}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      )}
    </section>
  );
}
