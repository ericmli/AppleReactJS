import * as React from "react";
import { Body } from "../../components/Body";
import { Container } from "react-bootstrap";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = () => {
  return (
    <Body>
      <Container fluid="xl">
        <p>hello</p>
      </Container>
    </Body>
  );
};
