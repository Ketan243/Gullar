//import Carousel, { Pagination } from 'react-native-snap-carousel';

import { Image, Text, View } from 'react-native'

import React from 'react'

const CarouselView = () => {
    /*const [activeSlide, setActiveSlide] = React.useState(0);
    const data =[
        {
            id: 1,
            image:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            id: 2,
            image:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {  
            id: 3, 
            image:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },

    ]

    const renderItem = ({item, index}) => {
        return (
            <Image source={{uri: item.image}} style={{width: 300, height: 150,borderRadius:10}}/>
        )
    }

    const Pagination = ()=>{
        return (
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                containerStyle={{paddingVertical: 8}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        )
    }
  return (
      <View style={{marginTop:-30}}>
            <Carousel
                  data={data}
                  renderItem={renderItem}
                  onSnapToItem={(index) => setActiveSlide(index) }
                    sliderWidth={300}
                    itemWidth={300}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={3000}
                    autoplayInterval={3000}
                    loopClonesPerSide={2}
                    loopAdditionalSlides={1}
                    removeClippedSubviews={false}
                    inactiveSlideScale={0.9}
                    inactiveSlideOpacity={0.6}

                    containerCustomStyle={{
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginBottom: 10,
                        backgroundColor: '#fff',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                />
                
      </View>
  )
                */}

export default CarouselView