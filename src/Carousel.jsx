import React, { useState } from 'react'
import {shortList, list, longList} from "./data";
import {FaQuoteRight} from "react-icons/fa";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);

  const prevSlide = () => {};
  const nextSlide = () => {};
  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, title, quote } = person;

        return (
          <article className="slide">
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button className="prev" type="button" onCLick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onCLick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;