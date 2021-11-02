import React, { FC, useContext, useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import JupiterCard from '../components/JupiterCard';
import Context from '../Context';

const GradeScreen: FC = ({ navigation, route }: any) => {
  const language = useContext(Context.Language).language;
  const scheme = useContext(Context.Scheme).scheme;
  const params = route.params;
  const grade = params.grade;
  useLayoutEffect(() => navigation.setOptions({ title: language.grades }), [navigation]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: scheme.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 48
    },
    title: {
      color: scheme.backgroundTintColorAccent,
      fontSize: 36,
      margin: 16
    },
    split: {
      width: '90%',
      margin: 3,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    text: {
      color: scheme.foregroundColor
    },
    left: {
      color: scheme.foregroundColor,
      alignSelf: 'flex-start'
    },
    right: {
      color: scheme.foregroundColor,
      alignSelf: 'flex-end',
      textAlign: 'right'
    }
  });

  const Info: FC<{ left: string, right: string}> = (props) => {
    return (
      <View style={styles.split}>
        <View style={{ flex: 1 }}>
          <Text style={styles.left}>{props.left}: </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.right}>{props.right}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{grade.key}</Text>
      <JupiterCard width='90%' height='auto'>
        <ScrollView style={{ width: '100%', height: 'auto' }} contentContainerStyle={{ width: '100%', alignItems: 'center' }}>
          {grade.grades.map((item: any) => { return (
            <JupiterCard key={item.key} width='90%' height='auto'>
              <Info left={language.date} right={item.date} />
              <Info left={language.gradeName} right={item.key} />
              <Info left={language.mark} right={item.mark} />
            </JupiterCard>
          )})}
        </ScrollView>
      </JupiterCard>
    </View>
  );
};

export default GradeScreen;