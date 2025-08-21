"use client";
import * as React from "react";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "./components/layout/Header";
import Autoplay from "embla-carousel-autoplay";
import SubNavMenu from "./components/ui/sub-nav-button";

const subData: { href: string; label: string }[] = [
  {
    href: "/",
    label: "Tokyo",
  },
  {
    href: "/",
    label: "Kyoto",
  },
  {
    href: "/",
    label: "Osaka",
  },
];

function App() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
      <header>
        <Header />
      </header>
      <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu title="Japan" src="/japan.jpeg" subTitle={subData} />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu title="South Korea" src="/korea.jpeg" />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu
              title="United States"
              src="/us.jpeg"
              subTitle={subData}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu title="Canada" src="/canada.jpeg" subTitle={subData} />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu title="Costa Rica" src="/costa.jpeg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
