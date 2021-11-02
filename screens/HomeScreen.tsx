import React, { FC, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import JupiterButton from '../components/JupiterButton';
import JupiterCard from '../components/JupiterCard';
import Context from '../Context';

const HomeScreen: FC = ({ navigation }: any) => {
  const { scheme, setScheme } = useContext(Context.Scheme);
  const { language, setLanguage } = useContext(Context.Language);
  const user = useContext(Context.CurrentUser).currentUser;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer: {
      flex: 1,
      width: '100%',
    },
    cardTitle: {
      color: scheme.foregroundColor,
      fontSize: 22,
      fontWeight: '600'
    },
    bar: {
      marginTop: 2,
      marginBottom: 8,
      width: '90%',
      height: 2,
      borderBottomWidth: 1.7,
      borderColor: scheme.backgroundColorAccent,
      shadowColor: scheme.foregroundColorLight,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.7,
      shadowRadius: 3,
      elevation: 18,
    },
    name: {
      color: scheme.backgroundTintColorAccent,
      fontWeight: 'bold'
    },
    text: {
      color: scheme.foregroundColor
    }
  });

  const Card: FC<{ title: string }> = (props) => {
    return (
      <JupiterCard width='93%' height='auto'>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <View style={styles.bar}></View>
        {props.children}
      </JupiterCard>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.cardContainer} contentContainerStyle={{ alignItems: 'center' }}>
        <Card title={language.information}>
          <Text style={styles.text}>{language.hello} {user.name}!</Text>
          <Text style={{ ...styles.text, marginBottom: 6 }}>{user.programme}</Text>
          <Text style={styles.text}>{language.school}: {user.school}</Text>
          <Text style={styles.text}>{language.faculty}: {user.faculty}</Text>
        </Card>
        <Card title={language.grades}>
          {user.grades.map((item: any) => {
            return (
              <TouchableOpacity key={item.key} onPress={() => navigation.push('GradeDetails', { grade: item })}>
                <JupiterCard width={318} height='auto'>
                  <Text style={styles.text}>{item.key}</Text>
                </JupiterCard>
              </TouchableOpacity>
            )
          })}
        </Card>
        <Card title={language.timetable}>
          {user.timetable.map((item: any, idx: number) => {
            if (item.length == 0)
              return;
            return (
              <JupiterCard key={idx} width='90%' height='auto'>
                <Text style={styles.cardTitle}>{language.days[idx]}</Text>
                <View style={styles.bar}></View>
                  {item.map((subject: any) => {
                    return (
                      <TouchableOpacity key={subject.key} onPress={() => navigation.push('SubjectDetails', { subject: subject })}>
                        <JupiterCard width='85%' height='auto'>
                          <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignSelf: 'flex-start' }}>
                              <Text style={styles.text}>{subject.key}</Text>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'flex-end' }}>
                              <Text style={{ ...styles.text, textAlign: 'right' }}>({subject.start}-{subject.end})</Text>
                            </View>
                          </View>
                        </JupiterCard>
                      </TouchableOpacity>
                    )
                  })}
              </JupiterCard>
            )
          })}
        </Card>
        <Card title={language.settings}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <JupiterButton title='☀️' onPress={() => setScheme('light-purple')} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <JupiterButton title='🌙' onPress={() => setScheme('dark-purple')} />
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <JupiterButton title='🇭🇺' onPress={() => setLanguage('hu')} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <JupiterButton title='🇬🇧' onPress={() => setLanguage('en')} />
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
