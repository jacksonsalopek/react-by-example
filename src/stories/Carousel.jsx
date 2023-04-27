import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CarouselButton = styled.button`
  background-color: rgba(0, 0, 0, 0.12);
  border: none;
  color: white !important;
  padding: 4px 12px;
  transition: all 0.5s;
  font-size: 16px;
  position: relative;
  display: block;
  ${props => props.id === 'prev' ? 'right: -80px;' : 'left: -80px;'}

  &:hover {
    background-color: rgba(0, 0, 0, 0.45);
  }
`

const CarouselEllipseButton = styled.button`
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)'};
  border-radius: 50%;
  display: block;
  width: 12px;
  height: 12px;
  border: none;
`

const CarouselImageWrapper = styled.div`
`

const CarouselImageButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.imageCount}, 1fr)`};
  position: relative;
  top: -20px;
  justify-items: center;
  align-items: center;
  width: ${(props) => `${props.imageCount * 16}px`};
  margin: 0 auto;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
`

const CarouselWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  justify-content: center;
`

export const Carousel = ({ imageUrls }) => {
  const [currentImage, setCurrentImage] = React.useState(imageUrls[0])
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const onClick = (type) => {
    if (type === 'next') {
      if (currentIndex === imageUrls.length - 1) {
        setCurrentIndex(0)
        setCurrentImage(imageUrls[0])
      } else {
        setCurrentIndex(currentIndex + 1)
        setCurrentImage(imageUrls[currentIndex + 1])
      }
    } else if (type === 'prev') {
      if (currentIndex === 0) {
        setCurrentIndex(imageUrls.length - 1)
        setCurrentImage(imageUrls[imageUrls.length - 1])
      } else {
        setCurrentIndex(currentIndex - 1)
        setCurrentImage(imageUrls[currentIndex - 1])
      }
    } else {
      setCurrentIndex(type)
      setCurrentImage(imageUrls[type])
    }
  }

  React.useEffect(() => {
    
  }, [])

  return (
    <CarouselWrapper>
      <CarouselButton onClick={() => onClick('prev')} id="prev" title="Previous image button">&lt;</CarouselButton>
      <CarouselImageWrapper>
        <CarouselImage src={currentImage} alt="Carousel image" />
        <CarouselImageButtonsContainer imageCount={imageUrls.length}>
          {imageUrls.map((imageUrl, index) => (
            <CarouselEllipseButton key={index} onClick={() => onClick(index)} active={index === currentIndex} />
          ))}
        </CarouselImageButtonsContainer>
      </CarouselImageWrapper>
      <CarouselButton onClick={() => onClick('next')} id="next" title="Previous image button">&gt;</CarouselButton>
    </CarouselWrapper>
  )
}

Carousel.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Carousel.defaultProps = {
  imageUrls: [
    'https://www.freecodecamp.org/news/content/images/2021/07/jackson-so-_t-l5FFH8VA-unsplash.jpg',
    'https://images.unsplash.com/photo-1681916882860-adfcc0a42d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    'https://images.unsplash.com/photo-1682268329792-db6575d60b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80'
  ],
}
