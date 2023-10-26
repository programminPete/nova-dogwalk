import {ReactElement} from 'react';
import {Image, ImageProps, StyleSheet, View} from 'react-native';

interface Props {
  imageUrl: ImageProps;
}
export function ProfileImage({imageUrl}: Props): ReactElement {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
