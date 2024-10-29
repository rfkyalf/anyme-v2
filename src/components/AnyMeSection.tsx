import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function AnyMeSection() {
  return (
    <section
      className="py-8 md:py-12 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: 'url(/anyme.jpg)' }}
    >
      <div className="h-full w-full absolute top-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      <div className="h-full w-full absolute top-0 bg-gradient-to-b from-neutral-950 via-neutral-950/20 to-transparent" />
      <div className="wrapper relative">
        <div className="flex flex-col justify-center items-center gap-y-8">
          <div className="text-center">
            <h1 className="text-[1.4rem] md:text-[1.8rem] lg:text-[2.2rem] font-bold text-neutral-50">
              AnyMe.
            </h1>
            <span className="text-center text-[13px] md:text-[17px] text-violet-500 font-bold">
              アニメに関することなら何でも
            </span>
          </div>
          <p className="text-center text-[13px] md:text-[17px] text-neutral-200">
            Your ultimate source for everything anime! Discover reviews, the
            latest recommendations, fan-favorite characters, and exciting news
            and trivia. Dive into the world of anime with us and find your next
            favorite series to enjoy!
          </p>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <span className="text-neutral-200 font-bold text-[13px] md:text-[17px]">
              Follow us on
            </span>
            <div className="flex items-center gap-x-4 text-neutral-200">
              <FaLinkedin className="size-6 md:size-7 lg:size-8" />
              <FaInstagram className="size-6 md:size-7 lg:size-8" />
              <FaFacebook className="size-6 md:size-7 lg:size-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}