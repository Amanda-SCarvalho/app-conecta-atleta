// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { storage } from '../storage/storage';
import { mostrarAlerta } from '../utils/mensagem';

export function LoginScreen({ navigation }) {
  // MMKV é síncrono: dá para ler direto no valor inicial do useState
  const [email, setEmail] = useState(() => storage.getString('usuario') ?? '');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    const emailLimpo = email.trim().toLowerCase();
    if (!emailLimpo || !senha) {
      mostrarAlerta('Atenção', 'Informe e-mail e senha.');
      return;
    }

    const salvo = storage.getString('cadastros');
    const cadastros = salvo ? JSON.parse(salvo) : {};
    const usuario = cadastros[emailLimpo];

    if (!usuario || usuario.senha !== senha) {
      mostrarAlerta('Erro', 'E-mail ou senha incorretos.');
      return;
    }

    storage.set('usuario', emailLimpo);
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>CA</Text>
          </View>
          <Text style={styles.title}>Bem-vindo de volta!</Text>
          <Text style={styles.subtitle}>Entre para apoiar os seus atletas favoritos</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordBox}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Digite sua senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
            <Ionicons name="eye-off-outline" size={20} color={COLORS.grayText} />
          </View>
          
          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={entrar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.or}>ou</Text>

          <TouchableOpacity style={styles.googleBtn}>
            <Ionicons name="logo-google" size={20} color="#000" style={{marginRight: 10}} />
            <Text style={styles.googleText}>Entrar com Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('SignUpStep1')}>
          <Text style={styles.linkText}>Não possui conta? <Text style={{fontWeight: 'bold'}}>Criar conta</Text></Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scroll: { padding: 24, paddingBottom: 50 },
  header: { alignItems: 'center', marginTop: 40, marginBottom: 40 },
  logo: { width: 70, height: 70, backgroundColor: COLORS.primary, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  logoText: { fontSize: 28, fontWeight: '900', color: COLORS.white },
  title: { fontSize: 26, fontWeight: 'bold', color: '#1E1E1E', marginBottom: 8 },
  subtitle: { fontSize: 15, color: COLORS.grayText, textAlign: 'center' },
  form: { width: '100%' },
  label: { fontSize: 14, fontWeight: '600', color: '#1E1E1E', marginBottom: 8, marginTop: 16 },
  input: { borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 12, padding: 16, fontSize: 15, backgroundColor: COLORS.inputBackground },
  passwordBox: { flexDirection: 'row', borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 12, backgroundColor: COLORS.inputBackground, alignItems: 'center', paddingRight: 16 },
  passwordInput: { flex: 1, padding: 16, fontSize: 15 },
  forgot: { alignSelf: 'flex-end', marginTop: 12, marginBottom: 30 },
  forgotText: { fontSize: 14, fontWeight: '600', color: COLORS.primary },
  button: { backgroundColor: COLORS.primary, paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  or: { textAlign: 'center', color: COLORS.grayText, marginVertical: 20 },
  googleBtn: { flexDirection: 'row', borderWidth: 1, borderColor: COLORS.borderColor, paddingVertical: 16, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  googleText: { fontSize: 16, fontWeight: '600', color: '#1E1E1E' },
  footer: { alignItems: 'center', marginTop: 30 },
  linkText: { color: COLORS.grayText, fontSize: 14 },
});