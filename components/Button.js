import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'


export const CircleButton = ({imgUrl, handlePress, }) => {
  return (
    <TouchableOpacity
    style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absoulte',
      borderRadius: SIZES.extraLarge,
      alginItems: 'center',
      justifyCotent: 'center',
      ...SHADOWS.light,
    
    }}
   onPress={handlePress}
    >
      <Image
      source={imgUrl}
      resizeMode="contain"
      style={{width: 24, height: 24}}
       />
    </TouchableOpacity>
  )
}
export const RectButton = ({minWidth, fontSize, handlePress,  }) => {
  return (
    <TouchableOpacity
    style={{
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    minWidth: minWidth,
    padding: SIZES.small,
   
    }}
   onPress={handlePress}
    >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: 'center'
      }} >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}

