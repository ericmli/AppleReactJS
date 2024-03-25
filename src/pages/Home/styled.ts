import styled from 'styled-components'
import image from '../../assets/back-study.png'

interface PropsImageAnnouncement {
  image: string;
}

export const MainBackStudy = styled.div`
  padding-top: 20px;
  background-color: #F5F5F7;
  width: 100%;
`
export const BackStudyContainer = styled.div`
  width: 40%;
  height: 70vh;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.xlarge};
  cursor: pointer;
`

export const ContainerImageStudy = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(image)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain ;
`
export const AnnouncementContainer = styled.div<PropsImageAnnouncement>`
  width: 100%;
  height: 60vh;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const AnnouncementCenter = styled.div`
  width: 40%;
  height: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.huge};
  overflow: hidden;
`
export const AnnouncementButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.small};
`

export const ContainerGridItems = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxnano};
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.xxnano};

`
export const GridItems = styled.div<{ image: string }>`
  width: 49%;
  min-height: 60vh;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  padding-top: ${({ theme }) => theme.spacings.huge};
`
export const GridButtons = styled.span`
  margin-top: ${({ theme }) => theme.spacings.small};
  width: 25%;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
`
export const ContainerCarousel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImageCarousel = styled.img`
  width: 100%;
`