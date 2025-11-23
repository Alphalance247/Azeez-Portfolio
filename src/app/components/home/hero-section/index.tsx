import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I&apos;m Azeez</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              <h1>Frontend Engineer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Crafting high-performance, accessible web applications with React,
              Next.js, and TypeScript. I transform complex product requirements
              into polished UI flows, delivering scalable solutions that drive
              business impact. Currently building enterprise-grade platforms
              that process payroll for thousands of users while maintaining
              exceptional performance and user experience.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/about-me/about.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/about-me/about.png")}
          alt="banner-img"
          width={685}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
