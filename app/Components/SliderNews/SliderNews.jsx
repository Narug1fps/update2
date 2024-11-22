"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SliderNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "/images/1.png",
    },
    {
      image: "/images/1.png",
    },
    {
      image: "/images/1.png",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <div className=" ">
      {/*pc */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center min-h-screen  ">
          <div className="relative flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-[-45px] p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon className="w-6 h-6 text-primary" />
            </button>
            <div className="w-[800px] h-full overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  width: `${cards.length * 800}px`,
                  transform: `translateX(-${currentIndex * 800}px)`,
                }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="h-full w-[800px]  bg-black border-2 rounded-lg"
                  >
                    <Image
                      width={1920}
                      height={1080}
                      className="rounded-lg "
                      alt=" "
                      src={card.image}
                    />

                    <Link href="/" class="group  btn undefined">
                      <span className="h-10 m-1 bg-red-600 w-[99%] rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20  group-hover:skew-y-12">
                          See More
                        </div>
                        <div className="absolute  translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          See More
                        </div>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-[-45px]  p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === cards.length - 1}
            >
              <ChevronRightIcon className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
      {/*mobile */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-center m-10 ">
          <div className="relative flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-[-45px] p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon className="w-6 h-6 text-primary" />
            </button>
            <div className="w-[320px] h-[230px] overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  width: `${cards.length * 320}px`,
                  transform: `translateX(-${currentIndex * 320}px)`,
                }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="h-[23  0px] w-[320px]  bg-black border-2 rounded-lg"
                  >
                    <Image
                      width={1920}
                      height={1080}
                      className="rounded-lg "
                      alt=" "
                      src={card.image}
                    />

                    <Link href="/" class="group  btn undefined">
                      <span className="h-10 m-1 bg-red-600 w-[99%] rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20  group-hover:skew-y-12">
                          See More
                        </div>
                        <div className="absolute  translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                          See More
                        </div>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-[-45px]  p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === cards.length - 1}
            >
              <ChevronRightIcon className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
