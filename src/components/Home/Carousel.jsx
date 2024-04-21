import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants/theme";

const Carousel = ({ productsTops }) => {
  const slides = productsTops.map((product) => product.images[0]);
  return (
    <View style={styles.CarouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.green}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 12, width: "93%", marginTop: 15 }}
        imageLoadingColor={COLORS.green}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  CarouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
