"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function CardNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "mary",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/1.png",
      link: "news",
    },
    {
      title: "mary2",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/3.png",
      link: "news",
    },
    {
      title: "mary3",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/2.png",
      link: "news",
    },
  ];

  const cardspc = [
    {
      title: "mary",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/1.png",
      link: "news",
    },
    {
      title: "mary2",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/3.png",
      link: "news",
    },
    {
      title: "mary3",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/2.png",
      link: "news",
    },
    {
      title: "mary",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/1.png",
      link: "news",
    },
    {
      title: "mary2",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/3.png",
      link: "news",
    },
    {
      title: "mary3",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/2.png",
      link: "news",
    },
    {
      title: "mary",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/1.png",
      link: "news",
    },
    {
      title: "mary2",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/3.png",
      link: "news",
    },
    {
      title: "mary3",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/2.png",
      link: "news",
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
  useEffect(() => {
    if (typeof $ !== "undefined")
      return (
        <>
          <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
          {/*pc*/}
          <div className=" hidden lg:block">
            <div className="flex items-center justify-center min-h-screen  ">
              <div className="relative flex items-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-[-45px] p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeftIcon className="w-6 h-6 text-primary" />
                </button>
                <div className="w-[300px] h-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      width: `${cards.length * 900}px`,
                      transform: `translateX(-${currentIndex * 900}px)`,
                    }}
                  >
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="h-full w-[300px] bg-black border-2 rounded-lg"
                      >
                        <Image
                          width={1920}
                          height={1080}
                          className="rounded-lg "
                          alt=" "
                          src={cardspc.image}
                        />
                        <h1 className="text-red-600 text-xl font-bold mt-4 ml-4">
                          {cardspc.title}
                        </h1>
                        <h2 className="ml-3 text-white opacity-50">
                          {cardspc.atualizado}
                        </h2>
                        <p className="text-white m-4 text-sm">
                          {cardspc.content}
                        </p>
                        <Link
                          href={$`{cardspc.link}`}
                          class="group  btn undefined"
                        >
                          <span className="h-10 m-1 bg-red-600 w-72 rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
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
          {/* mobile */}
          <div className=" block lg:hidden">
            <div className="flex items-center justify-center min-h-screen  ">
              <div className="relative flex items-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-[-45px] p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeftIcon className="w-6 h-6 text-primary" />
                </button>
                <div className="w-[300px] h-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      width: `${cards.length * 300}px`,
                      transform: `translateX(-${currentIndex * 300}px)`,
                    }}
                  >
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="h-full w-[300px] bg-black border-2 rounded-lg"
                      >
                        <Image
                          width={1920}
                          height={1080}
                          className="rounded-lg "
                          alt=" "
                          src={card.image}
                        />
                        <h1 className="text-red-600 text-xl font-bold mt-4 ml-4">
                          {card.title}
                        </h1>
                        <h2 className="ml-3 text-white opacity-50">
                          {card.atualizado}
                        </h2>
                        <p className="text-white m-4 text-sm">{card.content}</p>
                        <Link
                          href={$`{card.link}`}
                          class="group  btn undefined"
                        >
                          <span className="h-10 m-1 bg-red-600 w-72 rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
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
          <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
        </>
      );
  });
}
