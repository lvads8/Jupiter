import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Context from '../Context';

export interface JupiterCheckBoxProps {
  value?: boolean
  onValueChanged?: (newValue: boolean) => void
  title: string
}

interface JupiterCheckBoxState {
  value: boolean
}

export default class JupiterCheckBox extends Component<JupiterCheckBoxProps, JupiterCheckBoxState> {
  static contextType = Context.Scheme
  declare context: React.ContextType<typeof Context.Scheme>

  constructor(props: JupiterCheckBoxProps) {
    super(props);
    this.state = {
      value: props.value ?? false
    }
  }

  render() {
    const scheme = this.context.scheme;
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
      },
      square: {
        marginLeft: 8,
        width: 24,
        height: 24,
        borderWidth: 2,
        backgroundColor: this.state.value ? scheme.backgroundTintColor : 'transparent',
        borderColor: this.state.value ? 'transparent' : scheme.backgroundColorAccent ,
        borderRadius: scheme.borderRadius,
      },
      text: {
        marginLeft: 8,
        color: scheme.foregroundColorAccent,
      }
    });

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.setState({ value: !this.state.value })}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
