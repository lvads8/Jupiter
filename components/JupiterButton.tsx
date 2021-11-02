import React, { FC, useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import Context from '../Context';

export interface JupiterButtonProps {
  style?: {
    width?: number | string
    height?: number | string
    padding?: number | string
    margin?: number
    fontSize?: number
  }
  title: string
  onPress: (event: GestureResponderEvent) => void
};

const JupiterButton: FC<JupiterButtonProps> = (props: JupiterButtonProps) => {
  const style = props.style;
  const scheme = useContext(Context.Scheme).scheme;
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: scheme.backgroundTintColor,
      borderColor: scheme.backgroundTintColor,
      borderWidth: 4,
      borderRadius: scheme.borderRadius,
      width: style?.width ?? '80%',
      height: style?.height,
      margin: style?.margin ?? 4
    },
    text: {
      color: scheme.foregroundTintColor,
      fontWeight: '600',
      fontSize: style?.fontSize ?? 14,
      padding: style?.padding ?? 10
    }
  });

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default JupiterButton;
