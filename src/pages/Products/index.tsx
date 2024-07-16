import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Body } from "../../components/Body";
import { GetFirebase } from "../../utils/util";
import img from "../../assets/iphone-standart.jpg";

import * as Styled from "./style";

interface ProductsProps {
  data: ListProductsProps[];
}
interface ListProductsProps {
  name: string;
}

export const Products: React.FC<ProductsProps> = () => {
  const [data, setData] = React.useState<ListProductsProps[]>([]);
  React.useEffect(() => {
    GetFirebase("ListProducts").then((result) => {
      setData(JSON.parse(result));
    });
  }, []);

  const ListProducts: React.FC<ProductsProps> = ({ data }) => {
    return data.map((elm: ListProductsProps, index: number) => {
      return (
        <div key={index}>
          <p>{elm.name}</p>
        </div>
      );
    });
  };
  return (
    <Body>
      <Container>
        <Styled.ContainerBanner>
          <Styled.ContainerTitleBanner>
            <Styled.TitleBanner>Seu iPhone</Styled.TitleBanner>
            <Styled.TitleBanner>Em 24x</Styled.TitleBanner>
            <Styled.TitleBanner>+ Parcela final</Styled.TitleBanner>
          </Styled.ContainerTitleBanner>
          <Styled.ContainerImageBanner>
            <Styled.ImageBanner src={img} />
          </Styled.ContainerImageBanner>
        </Styled.ContainerBanner>
        <Row>
          <Col xs lg="2">
            <p>Filtro</p>
          </Col>
          <Col>
            <ListProducts data={data} />
          </Col>
        </Row>
      </Container>
    </Body>
  );
};
