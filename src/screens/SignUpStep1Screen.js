// src/screens/SignUpStep1Screen.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { COLORS } from '../theme/colors';
import { storage } from '../storage/storage';
import { mostrarAlerta } from '../utils/mensagem';

export function SignUpStep1Screen({ navigation }) {
  const [role, setRole] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const continuar = () => {
    const emailLimpo = email.trim().toLowerCase();
    if (!nome.trim() || !emailLimpo || !senha) {
      mostrarAlerta('Atenção', 'Preencha nome, e-mail e senha.');
      return;
    }
    if (!emailLimpo.includes('@')) {
      mostrarAlerta('Atenção', 'Informe um e-mail válido.');
      return;
    }
    if (senha.length < 6) {
      mostrarAlerta('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Guarda os dados do passo 1 até o passo 2 ser concluído
    storage.set('cadastroTemp', JSON.stringify({ nome: nome.trim(), email: emailLimpo, senha }));
    navigation.navigate('SignUpStep2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollPadding}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>Junte-se à maior comunidade esportiva de financiamento.</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput style={styles.input} placeholder="Ex: Lucas Silva" value={nome} onChangeText={setNome} />

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
          <TextInput
            style={styles.input}
            placeholder="Mínimo de 6 caracteres"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <PrimaryButton 
            title="Criar conta" 
            onPress={continuar}
            style={{ marginTop: 24 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollPadding: { padding: 24, paddingBottom: 50 },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.textDark, marginTop: 20 },
  subtitle: { fontSize: 15, color: COLORS.grayText, marginBottom: 30 },
  form: { width: '100%' },
  label: { fontSize: 14, fontWeight: '600', color: COLORS.textDark, marginBottom: 8, marginTop: 16 },
  input: { borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 12, padding: 16, fontSize: 15, backgroundColor: COLORS.inputBackground },
});