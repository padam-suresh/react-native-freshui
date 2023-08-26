// lib/components/Card.tsx
import React from 'react';
import {View, Text, Platform} from 'react-native';
import {cardStyles} from '../styles/cardStyles';
import {colors} from '../styles/colors';

interface CardProps {
  title: string;
  content: string;
  cardColor?: keyof typeof colors | string;
  titleColor?: keyof typeof colors | string;
  contentColor?: keyof typeof colors | string;
  shadow?: boolean; // Prop to control box shadow
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  cardColor = 'defaultCardColor',
  titleColor = 'defaultTitleColor',
  contentColor = 'defaultContentColor',
  shadow = false, // Default value is false
}) => {
  const getColorValue = (colorName: keyof typeof colors | string) => {
    if (colorName in colors) {
      return colors[colorName as keyof typeof colors];
    }
    return colorName;
  };

  const dynamicCardStyles = {
    ...cardStyles.card,
    backgroundColor: getColorValue(cardColor),
    // Conditionally apply box shadow based on the shadow prop
    ...(shadow && Platform.OS === 'android' && {elevation: 3}),
    ...(shadow && Platform.OS === 'ios' && {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      }),
  };

  const dynamicTitleStyles = {
    ...cardStyles.title,
    color: getColorValue(titleColor),
  };

  const dynamicContentStyles = {
    ...cardStyles.content,
    color: getColorValue(contentColor),
  };

  return (
    <View style={cardStyles.container}>
      <View style={dynamicCardStyles}>
        <Text style={dynamicTitleStyles}>{title}</Text>
        <Text style={dynamicContentStyles}>{content}</Text>
      </View>
    </View>
  );
};

export default Card;
