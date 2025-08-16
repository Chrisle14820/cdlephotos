"use client";
import * as React from "react";
import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "./components/layout/Header";
import Autoplay from "embla-carousel-autoplay";

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
            <CarouselSlide src="/japan.jpeg" label="Japan" />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CarouselSlide src="/korea.jpeg" label="South Korea" />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CarouselSlide src="/us.jpeg" label="United States" />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CarouselSlide src="/canada.jpeg" label="Canada" />
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CarouselSlide src="/costa.jpeg" label="Costa Rica" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default App;
