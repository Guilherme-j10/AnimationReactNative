import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerEventPayload, TouchableOpacity } from 'react-native-gesture-handler';
import { ContainerInitial } from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { MenuIcon } from '../../assets/MenuIcon';
import Map from '../../assets/map.png';
import Moto from '../../assets/moto.png';

export const Initial = () => {

  const WidthAnimated = useSharedValue(700);
  const HeightAnimated = useSharedValue(700);
  const BorderRadiusAnimated = useSharedValue(700);

  const AnimatedFontSize = useSharedValue(700);

  const ImagePositionTop = useSharedValue(700);
  const ImagePositionLeft = useSharedValue(700);

  const PowerOffPositionBottom = useSharedValue(700);
  const PowerOffPositionRight = useSharedValue(700);

  const maxValuePosY = 700;
  const minValuePosY = 600;

  const Gesture = useAnimatedGestureHandler({
    onActive: (event: PanGestureHandlerEventPayload, ctx: any) => {

      WidthAnimated.value = event.absoluteY;
      HeightAnimated.value = event.absoluteY;
      BorderRadiusAnimated.value = event.absoluteY;

      AnimatedFontSize.value = event.absoluteY;

      ImagePositionTop.value = event.absoluteY;
      ImagePositionLeft.value = event.absoluteY;

      PowerOffPositionBottom.value = event.absoluteY;
      PowerOffPositionRight.value = event.absoluteY;

    },
    onEnd: (event: PanGestureHandlerEventPayload) => {

      const WidthEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;
      const HeightEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;
      const BorderEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;

      const FontSizeEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;

      const ImagePositionTopEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;
      const ImagePositionLeftEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;

      const PowerOffPositionBottomEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;;
      const PowerOffPositionRightEnd = event.absoluteY > (maxValuePosY - minValuePosY) / 2 + minValuePosY ? maxValuePosY : minValuePosY;;

      WidthAnimated.value = withTiming(WidthEnd, { duration: 200 });
      HeightAnimated.value = withTiming(HeightEnd, { duration: 200 });
      BorderRadiusAnimated.value = withTiming(BorderEnd, { duration: 200 });

      AnimatedFontSize.value = withTiming(FontSizeEnd, { duration: 200 });

      ImagePositionTop.value = withTiming(ImagePositionTopEnd, { duration: 200 });
      ImagePositionLeft.value = withTiming(ImagePositionLeftEnd, { duration: 200 });

      PowerOffPositionBottom.value = withTiming(PowerOffPositionBottomEnd, { duration: 200 });
      PowerOffPositionRight.value = withTiming(PowerOffPositionRightEnd, { duration: 200 });

    }
  });

  const AnimatedScale = useAnimatedStyle(() => {

    const WidthInterpolation = interpolate(WidthAnimated.value, [maxValuePosY, minValuePosY], [100, 75], Extrapolate.CLAMP);
    const HeightInterpolation = interpolate(HeightAnimated.value, [maxValuePosY, minValuePosY], [100, 75], Extrapolate.CLAMP);
    const BorderRadiusInterpolated = interpolate(BorderRadiusAnimated.value, [maxValuePosY, minValuePosY], [0, 50], Extrapolate.CLAMP);

    return {
      width: `${WidthInterpolation}%`,
      height: `${HeightInterpolation}%`,
      borderBottomLeftRadius: withTiming(BorderRadiusInterpolated, { duration: 15 })
    }

  }); 

  const AnimatedText = useAnimatedStyle(() => {

    const FontSizeInterpolate = interpolate(AnimatedFontSize.value, [maxValuePosY, minValuePosY], [380, 220], Extrapolate.CLAMP);

    return {
      fontSize: FontSizeInterpolate
    }
  });

  const AnimatedImage = useAnimatedStyle(() => {

    const ImagePositionTopInterpolate = interpolate(ImagePositionTop.value, [maxValuePosY, minValuePosY], [200, 20], Extrapolate.CLAMP);
    const ImagePositionLeftInterpolate = interpolate(ImagePositionLeft.value, [maxValuePosY, minValuePosY], [-47, -230], Extrapolate.CLAMP);

    return{
      top: ImagePositionTopInterpolate,
      left: ImagePositionLeftInterpolate
    }

  });

  const AnimatedBoxSwiep = useAnimatedStyle(() => {

    const PowerOffPositionBottomInterpolate = interpolate(PowerOffPositionBottom.value, [maxValuePosY, minValuePosY], [200, 20], Extrapolate.CLAMP);
    const PowerOffPositionRightInterpolate = interpolate(PowerOffPositionRight.value, [maxValuePosY, minValuePosY], [-400, 0], Extrapolate.CLAMP);

    return{
      bottom: PowerOffPositionBottomInterpolate,
      right: PowerOffPositionRightInterpolate
    }

  })

  return(
    <LinearGradient colors={['#73b2fe', '#4a78fc']} style={ContainerInitial.ContainerMain}>
      
      <PanGestureHandler onGestureEvent={Gesture}>
        <Animated.View style={[ContainerInitial.ContianerAnimated, AnimatedScale]} >

          <View style={ContainerInitial.Content}>
            <Animated.Text style={[ContainerInitial.TextCenter, AnimatedText]}>GO</Animated.Text>      
            <Animated.Image source={Moto} style={[ContainerInitial.MotoPicture, AnimatedImage]} />
          </View>

          <Animated.View style={[ContainerInitial.ContainerTurnOff, AnimatedBoxSwiep]}>
            <View style={ContainerInitial.ContainerLineOf}>
              <LinearGradient colors={['#73b2fe', '#4a78fc']} style={ContainerInitial.ButtonOfff}>
                <FontAwesome name="power-off" size={24} color="white" />
              </LinearGradient>
              <View style={ContainerInitial.BoxMessage}>
                <Text style={ContainerInitial.textBox} >Swipe to off</Text>
                <FontAwesome5 name="arrow-right" size={16} color="#ccc" />
              </View>
            </View>
          </Animated.View>

        </Animated.View>
      </PanGestureHandler>

      <View style={ContainerInitial.ContainerMenu} >
        <View style={ContainerInitial.ContainerLineButton}>
          <TouchableOpacity style={[ContainerInitial.ContainerButton, { backgroundColor: 'transparent' }]} >
            <MenuIcon />
          </TouchableOpacity>
          <TouchableOpacity style={ContainerInitial.ContainerButton} >
            <AntDesign name="home" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={ContainerInitial.ContainerButton} >
            <MaterialCommunityIcons name="battery-charging" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={ContainerInitial.ContainerButton} >
            <MaterialCommunityIcons name="barcode-scan" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={ContainerInitial.ContainerButton} >
            <FontAwesome5 name="map-marked-alt" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ImageBackground
        source={Map}
        style={ContainerInitial.ContainerMap}
      > 
      </ImageBackground>

    </LinearGradient>
  );
}