import { useEffect, useState } from 'react'

import { Text } from '../../components/Text'
import { Button } from '../../components/Button'
import { GetFirebase } from "../../utils/util"
import { Carousel } from '../../components/Carousel'
import { Body } from '../../components/Body'

import * as Styled from './styled'
import { useDispatch } from 'react-redux'
import { setCart } from '../../redux/cart'

interface PropsImageAnnouncement {
  image: string;
  title: string;
  description: string;
  color?: boolean;
}
interface PropsProducts {
  data: DataProducts[]
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
  const [product, setProduct] = useState<DataProducts[]>([])
  const [tv, setTV] = useState<DataTV[]>([])
  const dispatch = useDispatch();
  useEffect(() => {
    GetFirebase('Products', 'order').then((result) => {
      setProduct(JSON.parse(result));
    });
    GetFirebase('TV').then((result) => {
      setTV(JSON.parse(result));
    });
  }, []);

  const BackStudy = () => {
    return (
      <Styled.MainBackStudy>
        <Styled.BackStudyContainer>
          <Text text="Última chance de economizar para a faculdade." color="title" size="huge" family="Segoe" bold="700" align="center" />
          <Text text="Compre um Mac, e os AirPods entram na turma." color="title" family="Segoe" top="nano" size="large" />
          <Text text="Compre um iPad, e o Apple Pencil não pesa na mochila." color="title" family="Segoe" top="nano" size="large" />
          <Text text="É só até 13 de março" color="tertiary" family="Segoe" top="small" size="medium" />
          <Button text="Comprar" top="small" bottom="small" />
          <Styled.ContainerImageStudy />
        </Styled.BackStudyContainer>
      </Styled.MainBackStudy>
    )
  }

  const AnnouncementPhone: React.FC<PropsImageAnnouncement> = (props) => {
    return (
      <Styled.AnnouncementContainer image={props.image}>
        <Styled.AnnouncementCenter>
          <Text text={props.title} color={props.color ? "secondary" : "title"} size="huge" family="Segoe" bold="500" align="center" />
          <Text text={props.description} color={props.color ? "secondary" : "title"} size="large" bold="300" />
          <Styled.AnnouncementButton>
            <Button text="Saiba mais" top="small" bottom="small" />
            <Button text="Comprar" top="small" bottom="small" />
          </Styled.AnnouncementButton>
        </Styled.AnnouncementCenter>
      </Styled.AnnouncementContainer>
    )
  }

  const GridItems: React.FC<PropsProducts> = ({ data }) => {
    return (
      <Styled.ContainerGridItems>
        {Array.isArray(data) && data.map((elm: DataProducts, index: number) => {

          if(index < 2) {
            return (
              <AnnouncementPhone key={index} image={elm.image} title={elm.name} description={elm.presentation} color={elm.black} />
            )
          }
          return (
            <Styled.GridItems key={index} image={elm.image}>
              <Text text={elm.name} color={elm.black ? 'secondary' : 'title'} size='xxlarge' bold='bold' />
              <Text text={elm.presentation} color={elm.black ? 'secondary' : 'title'} size='large' />
              <Styled.GridButtons>
                <Button text='Saiba Mais' />
                <Button text='Comprar' />
              </Styled.GridButtons>
            </Styled.GridItems>
          )
        })}
      </Styled.ContainerGridItems>
    )
  }

  return (
    <Body>
      {/* <BackStudy /> */}
      {product && <GridItems data={product} />}
      <Carousel>{tv.map((elm: DataTV, index: number) => {
        if (elm.show) {
          return (
            <Styled.ContainerCarousel onClick={() => dispatch(setCart(elm))} key={index}>
              <Styled.ImageCarousel src={elm.image} />
            </Styled.ContainerCarousel>
          )
        }
      })}</Carousel>
    </Body>
  )
}
