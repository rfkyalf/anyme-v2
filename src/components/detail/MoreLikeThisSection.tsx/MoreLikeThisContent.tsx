import { toSlug } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function MoreLikeThisContent({
  moreLikeThisList,
}: {
  moreLikeThisList: any;
}) {
  return (
    <>
      {moreLikeThisList?.data.slice(0, 25).map((moreLike: any) => (
        <Link
          href={`/detail/${moreLike.entry.mal_id}?title=${toSlug(
            moreLike.entry.title
          )}`}
          key={moreLike.entry.mal_id}
          className="flex flex-col gap-y-2 hover:scale-105 transition-all duration-300"
        >
          <Image
            src={moreLike.entry.images.webp.large_image_url}
            alt={moreLike.entry.title}
            height={5000}
            width={5000}
            priority
            className="h-[210px] md:h-[230px] lg:h-[260px] xl:h-[320px] w-full rounded-xl object-cover"
            loading="lazy"
          />
          <h2>
            {moreLike.entry.title.length > 20
              ? `${moreLike.entry.title.substring(0, 20)}...`
              : moreLike.entry.title}
          </h2>
        </Link>
      ))}
    </>
  );
}
