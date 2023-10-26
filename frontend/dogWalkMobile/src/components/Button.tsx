import {ReactElement} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Text,
} from 'react-native';

interface Props {
  type: 'primary' | 'secondary';
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

/**
 * @note a simplified version of design system button
 */
export function Button({
  type,
  title,
  disabled,
  isLoading,
  onPress,
}: Props): ReactElement {
  const {textStyle, viewStyle} = combineStyles(type);
  return (
    <Pressable
      onPress={onPress}
      style={viewStyle}
      disabled={disabled || isLoading}>
      {isLoading && <ActivityIndicator />}
      {!isLoading && <Text style={textStyle}>{title}</Text>}
    </Pressable>
  );
}

function combineStyles(type: 'primary' | 'secondary'): {
  viewStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
} {
  const viewStyle: StyleProp<ViewStyle> = [styles.base];
  const textStyle: StyleProp<TextStyle> = [styles.textBase];
  switch (type) {
    case 'primary':
      viewStyle.push(styles.primary);
      textStyle.push(styles.textPrimary);
      break;
    case 'secondary':
      viewStyle.push(styles.secondary);
      textStyle.push(styles.textSecondary);

      break;
  }
  return {
    viewStyle,
    textStyle,
  };
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  primary: {
    backgroundColor: 'blue',
  },
  secondary: {
    backgroundColor: 'white',
  },
  textBase: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: 'white',
  },
  textSecondary: {
    color: 'blue',
  },
});
