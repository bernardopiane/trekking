import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import {
  childrenToggle,
  menToggle,
  selectItems,
  womenToggle,
} from "../features/cart/cartSlice";
import ItemDisplay from "./ItemDisplay";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Wrapper = styled.div`
  padding: 4em 0 4em 0;
`;

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

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

const Item = styled.div`
  :nth-child(even) > ${TitleArea} {
    flex-direction: row-reverse;
  }
  :nth-child(even) > ${TitleArea} > ${Title} {
    text-align: end;
  }
`;

export default function FilteredItems() {
  const [navSlider, setNavSlider] = useState();
  const [navSliderWo, setNavSliderWo] = useState();
  const [navSliderCh, setNavSliderCh] = useState();

  const items = useSelector(selectItems);

  const menShow = useSelector(menToggle);

  const womenShow = useSelector(womenToggle);

  const childrenShow = useSelector(childrenToggle);

  const sampleItems = items.slice(0, 15).map((item) => {
    return <ItemDisplay key={item.name} item={item} />;
  });

  const sampleItemsWo = items.slice(16, 30).map((item) => {
    return <ItemDisplay key={item.name} item={item} />;
  });

  const sampleItemsCh = items.slice(31, 45).map((item) => {
    return <ItemDisplay key={item.name} item={item} />;
  });

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
    <Wrapper>
      <Container>
        {menShow ? (
          <Item>
            <TitleArea>
              <Title>Men</Title>
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
                {sampleItems}
              </Slider>
            </ItemsArea>
          </Item>
        ) : (
          <></>
        )}

        {womenShow ? (
          <Item>
            <TitleArea>
              <Title>Women</Title>
              <TitleDecoration />
            </TitleArea>
            <ItemsArea>
              <Controls>
                <div>01/15</div>
                <div>
                  <MdKeyboardArrowLeft
                    onClick={() => navSliderWo.slickPrev()}
                  />
                  <MdKeyboardArrowRight
                    onClick={() => navSliderWo.slickNext()}
                  />
                </div>
              </Controls>
              <Slider
                {...settings}
                asNavFor={navSliderWo}
                ref={(slider) => setNavSliderWo(slider)}
              >
                {sampleItemsWo}
              </Slider>
            </ItemsArea>
          </Item>
        ) : (
          <></>
        )}
        {childrenShow ? (
          <Item>
            <TitleArea>
              <Title>Children</Title>
              <TitleDecoration />
            </TitleArea>
            <ItemsArea>
              <Controls>
                <div>01/15</div>
                <div>
                  <MdKeyboardArrowLeft
                    onClick={() => navSliderCh.slickPrev()}
                  />
                  <MdKeyboardArrowRight
                    onClick={() => navSliderCh.slickNext()}
                  />
                </div>
              </Controls>
              <Slider
                {...settings}
                asNavFor={navSliderCh}
                ref={(slider) => setNavSliderCh(slider)}
              >
                {sampleItemsCh}
              </Slider>
            </ItemsArea>
          </Item>
        ) : (
          <></>
        )}
      </Container>
    </Wrapper>
  );
}
