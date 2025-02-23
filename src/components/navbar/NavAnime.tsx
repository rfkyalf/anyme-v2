import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navAnimeList = [
  {
    href: '/top/anime',
    label: 'Top Anime',
  },
  {
    href: '/top/airing',
    label: 'Top Airing',
  },
  {
    href: '/top/upcoming',
    label: 'Top Upcoming',
  },
  {
    href: '/top/movie',
    label: 'Top Movies',
  },
  {
    href: '/top/bypopularity',
    label: 'Most Popular',
  },
  {
    href: '/top/favorite',
    label: 'Most Favorited',
  },
];

export default function NavAnime() {
  const pathname = usePathname();

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger className="flex items-center gap-x-1 text-neutral-200 text-[1rem] font-medium hover:text-violet-500 cursor-pointer">
        Anime <ChevronDown className={`size-6`} />
      </HoverCardTrigger>
      <HoverCardContent
        side="bottom"
        className="flex flex-col px-2 py-1 text-neutral-200 text-[1rem] font-medium border-none bg-neutral-900"
      >
        {navAnimeList.map(({ href, label }, index: number) => (
          <Link
            key={index}
            href={href}
            title={label}
            className={`px-2 py-1 rounded-md hover:bg-violet-800 ${
              pathname === href ? 'bg-violet-800' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}
