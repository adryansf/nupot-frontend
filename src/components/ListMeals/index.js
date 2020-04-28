import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { MdStar } from 'react-icons/md';

// Styles
import { Container, Meal } from './styles';

export default function ListMeals({ data }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    rows: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function renderStars(amount) {
    const stars = [];
    for (let i = 0; i < amount; i++) {
      stars.push(<MdStar />);
    }

    return stars;
  }

  return (
    <Container>
      <Slider {...settings}>
        {data.map(meal => (
          <Meal>
            <img src={meal.image} alt={meal.name} />

            <div>
              <h2>{meal.name}</h2>

              <p>{meal.description}</p>

              <span>
                <span>{renderStars(meal.stars)}</span>
                <button type="button">Order</button>
              </span>
            </div>
          </Meal>
        ))}
      </Slider>
    </Container>
  );
}

ListMeals.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
    })
  ).isRequired,
};
