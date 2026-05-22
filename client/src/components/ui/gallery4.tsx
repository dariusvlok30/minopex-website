import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Insights",
  description = "Thought leadership and news from the world of mining operations.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on("select", update);
    return () => { carouselApi.off("select", update); };
  }, [carouselApi]);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div className="flex flex-col gap-3">
            <div className="w-12 h-1 bg-[#F7C200] rounded-full" />
            <h2 className="text-3xl font-black text-[#111111] tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-gray-500 leading-relaxed">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full border-gray-200 disabled:opacity-30"
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full border-gray-200 disabled:opacity-30"
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[380px]"
              >
                <a href={item.href} className="group block rounded-2xl">
                  <div className="relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 h-full"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(17,17,17,0.88) 0%, rgba(17,17,17,0.35) 55%, transparent 100%)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-7">
                      <div className="mb-2 text-lg font-bold leading-tight md:text-xl">
                        {item.title}
                      </div>
                      <div className="mb-6 text-sm text-gray-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </div>
                      <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#F7C200] gap-1.5">
                        Read more
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:scale-x-[-1]" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#F7C200] w-6"
                  : "bg-gray-200 w-1.5 hover:bg-gray-300"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
