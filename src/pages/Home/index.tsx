import { useEffect, useState } from "react";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { GetFirebase } from "../../utils/util";
import { Carousel } from "../../components/Carousel";
import { Body } from "../../components/Body";

import * as Styled from "./styled";
interface PropsImageAnnouncement {
  image: string;
  title: string;
  description: string;
  color?: boolean;
}
interface PropsProducts {
  data: DataProducts[];
}
interface DataProducts {
  name: string;
  image: string;
  presentation: string;
  black: boolean;
  order: number;
}
interface DataTV {
  name: string;
  image: string;
  show: boolean;
}

export function Home() {
  const [product, setProduct] = useState<DataProducts[]>([]);
  const [tv, setTV] = useState<DataTV[]>([]);
  // import { useDispatch } from 'react-redux'
  // import { setCart } from '../../redux/cart'
  // const dispatch = useDispatch();
  // onClick={() => dispatch(setCart(elm))}
  useEffect(() => {
    GetFirebase("Products", "order").then((result) => {
      setProduct(JSON.parse(result));
    });
  }, []);
  useEffect(() => {
    GetFirebase("TV").then((result) => {
      setTV(JSON.parse(result));
    });
  }, []);

  const AnnouncementPhone: React.FC<PropsImageAnnouncement> = (props) => {
    return (
      <Styled.AnnouncementContainer image={props.image}>
        <Styled.AnnouncementCenter>
          <Text
            text={props.title}
            color={props.color ? "secondary" : "title"}
            size="huge"
            family="Segoe"
            bold="500"
            align="center"
          />
          <Text
            text={props.description}
            color={props.color ? "secondary" : "title"}
            size="large"
            bold="300"
          />
          <Styled.AnnouncementButton>
            <Button
              href="/Products"
              text="Saiba mais"
              top="small"
              bottom="small"
            />
            <Button
              href="/Products"
              text="Comprar"
              top="small"
              bottom="small"
            />
          </Styled.AnnouncementButton>
        </Styled.AnnouncementCenter>
      </Styled.AnnouncementContainer>
    );
  };

  const GridItems: React.FC<PropsProducts> = ({ data }) => {
    return (
      <Styled.ContainerGridItems>
        {Array.isArray(data) &&
          data.map((elm: DataProducts, index: number) => {
            if (index < 2) {
              return (
                <AnnouncementPhone
                  key={index}
                  image={elm.image}
                  title={elm.name}
                  description={elm.presentation}
                  color={elm.black}
                />
              );
            }
            return (
              <Styled.GridItems key={index} image={elm.image}>
                <Text
                  text={elm.name}
                  color={elm.black ? "secondary" : "title"}
                  size="xxlarge"
                  bold="bold"
                />
                <Text
                  text={elm.presentation}
                  color={elm.black ? "secondary" : "title"}
                  size="large"
                />
                <Styled.GridButtons>
                  <Button href="/Products" text="Saiba Mais" />
                  <Button href="/Products" text="Comprar" />
                </Styled.GridButtons>
              </Styled.GridItems>
            );
          })}
      </Styled.ContainerGridItems>
    );
  };

  return (
    <Body>
      {product && <GridItems data={product} />}
      <Carousel>
        {tv.map((elm: DataTV, index: number) => {
          if (elm.show) {
            return (
              <Styled.ContainerCarousel key={index}>
                <Styled.ImageCarousel src={elm.image} />
              </Styled.ContainerCarousel>
            );
          }
        })}
      </Carousel>
    </Body>
  );
}
