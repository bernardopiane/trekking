import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Slider from "react-slick";

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  padding: 4em 0 0 0;
  /* flex-direction: ${(props) => (props.inverted ? "row-reverse" : "row")}; */
`;

const Title = styled.div`
  flex-grow: 1;
  text-align: ${(props) => (props.inverted ? "end" : "start")};
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  color: #424242;
`;

const TitleDecoration = styled.div`
  flex-grow: 20;
  height: 1px;
  border-top: 1px solid #cccccc;
`;

const ItemsArea = styled.div`
  margin-top: 3em;
`;
const Item = styled.div`
  :nth-child(even) > ${TitleArea} {
    flex-direction: row-reverse;
  }
  :nth-child(even) > ${TitleArea} > ${Title} {
    text-align: end;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

export default function ItemCarousel({ items, title }) {
  const [navSlider, setNavSlider] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Item>
      <TitleArea>
        <Title>{title}</Title>
        <TitleDecoration />
      </TitleArea>
      <ItemsArea>
        <Controls>
          <div>01/15</div>
          <div>
            <MdKeyboardArrowLeft onClick={() => navSlider.slickPrev()} />
            <MdKeyboardArrowRight onClick={() => navSlider.slickNext()} />
          </div>
        </Controls>
        <Slider
          {...settings}
          asNavFor={navSlider}
          ref={(slider) => setNavSlider(slider)}
        >
          {items}
        </Slider>
      </ItemsArea>
    </Item>
  );
}
