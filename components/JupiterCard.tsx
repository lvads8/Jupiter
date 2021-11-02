import React, { FC, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Context from '../Context';

export interface JupiterCardProps {
  width: string | number
  height: string | number
}

const JupiterCard: FC<JupiterCardProps> = (props) => {
  const scheme = useContext(Context.Scheme).scheme;
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: props.width,
      height: props.height,
      padding: 12,
      backgroundColor: scheme.backgroundColor,
      shadowColor: scheme.foregroundColorLight,
      shadowOffset: {
        width: 2,
        height: 2
      },
      shadowOpacity: scheme.isDark ? 0.6 : 0.3,
      shadowRadius: 8,
      elevation: 18,
      margin: 8
    }
  });

  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default JupiterCard;
