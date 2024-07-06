import styled from 'styled-components'

interface PropsImageAnnouncement {
  image: string;
}

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
  @media (max-width: 1000px) {
    width: 100%;
  }
`
export const GridButtons = styled.span`
  margin-top: ${({ theme }) => theme.spacings.small};
  min-width: 176px;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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