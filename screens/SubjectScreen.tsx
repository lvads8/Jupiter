import React, { FC, useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JupiterCard from '../components/JupiterCard';
import Context from '../Context';

const SubjectScreen: FC = ({ navigation, route }: any) => {
  const language = useContext(Context.Language).language;
  const scheme = useContext(Context.Scheme).scheme;
  const params = route.params;
  const subject = params.subject;
  useLayoutEffect(() => navigation.setOptions({ title: language.subjectDetails }), [navigation]);

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
      <Text style={styles.title}>{subject.key}</Text>
      <JupiterCard width='90%' height='auto'>
        <Info left={language.subjectName} right={subject.key} />
        <Info left={language.start} right={subject.start} />
        <Info left={language.end} right={subject.end} />
        <Info left={language.room} right={subject.room} />
        <Info left={language.teacher} right={subject.teacher} />
      </JupiterCard>
    </View>
  );
};

export default SubjectScreen;
