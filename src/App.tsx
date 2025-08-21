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
import { japan, usa, canada } from "./countries";

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
            <SubNavMenu
              title="Japan"
              src="/assets/japan.jpeg"
              subTitle={japan}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu title="South Korea" src="/assets/korea.jpeg" />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu
              title="United States"
              src="/assets/us.jpeg"
              subTitle={usa}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu
              title="Canada"
              src="/assets/canada.jpeg"
              subTitle={canada}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <SubNavMenu title="Costa Rica" src="/assets/costa.jpeg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
