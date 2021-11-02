import React, { FC, useContext, useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import JupiterButton from '../components/JupiterButton';
import JupiterCard from '../components/JupiterCard';
import JupiterCheckBox from '../components/JupiterCheckBox';
import JupiterTextInput from '../components/JupiterTextInput';
import Context from '../Context';
import Data from '../data.json';

const LoginScreen: FC = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const language = useContext(Context.Language).language;
  const scheme = useContext(Context.Scheme).scheme;
  const { setCurrentUser } = useContext(Context.CurrentUser);

  const styles = StyleSheet.create({
    container: {
      paddingBottom: 128,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: scheme.backgroundColor
    },
    title: {
      color: scheme.backgroundTintColorAccent,
      fontSize: 42,
      fontWeight: 'bold',
      marginVertical: 24
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jupiter</Text>
      <JupiterCard width='90%' height='auto'>
        <JupiterTextInput placeholder={language.neptunCode} value={username} onChangeText={setUsername} />
        <JupiterTextInput placeholder={language.password} isInputHidden={true} value={password} onChangeText={setPassword} />
        <JupiterCheckBox title={language.rememberMe} />
        <JupiterButton title={language.login} onPress={() => {
          if (username === 'teszt' && password === '12345')
            setCurrentUser(Data);
          else
            Alert.alert(language.invalidCredentials);
        }} />
      </JupiterCard>
    </View>
  );
};

export default LoginScreen;
