import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Place Order"}
          onPress={() => {
            console.warn("Your order is placed.");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Add to cart"}
          onPress={() => {
            console.warn("This item is added to cart.");
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;
