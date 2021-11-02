import React, { FC, useContext } from "react";
import { StyleSheet, TextInput } from "react-native";
import Context from "../Context";

export interface JupiterTextInputProps {
  style?: {
    padding?: number
    margin?: number
    borderColor?: string
    width?: number | string
  }
  placeholder?: string
  value?: string
  onChangeText?: (text: string) => void
  isInputHidden?: boolean
}

const JupiterTextInput: FC<JupiterTextInputProps> = (props) => {
  const style = props.style;
  const scheme = useContext(Context.Scheme).scheme;
  const styles = StyleSheet.create({
    container: {
      width: style?.width ?? '80%',
      color: scheme.foregroundColor,
      borderWidth: 2,
      borderColor: style?.borderColor ?? scheme.backgroundColorAccent,
      borderRadius: scheme.borderRadius,
      padding: style?.padding ?? 12,
      margin: style?.margin ?? 4
    }
  });

  return (
    <TextInput
      style={styles.container}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholderTextColor={scheme.foregroundColorLight}
      secureTextEntry={props.isInputHidden}
    />
  );
};

export default JupiterTextInput;
