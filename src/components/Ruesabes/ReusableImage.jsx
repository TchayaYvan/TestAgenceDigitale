import { Image, StyleSheet} from "react-native";
import React from "react";

// Composant ReusableImage pour afficher une image réutilisable
const ReusableImage = ({ source, height, mode, width , radius}) => {
  return (
      <Image source={source} style={styles.image(width, height, mode, radius)} />
  );
};


// Styles pour le composant ReusableImage
export default ReusableImage;

const styles = StyleSheet.create({
    image: (width, height, mode, radius) => ({
        width: width,
        height: height,
        borderRadius: radius,
        resizeMode: mode,
      }),
});
