// src/screens/OnboardingScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: COLORS.primary }]}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>CA</Text>
        </View>
        <Text style={styles.title}>Conecta Atleta</Text>
        <Text style={styles.subtitle}>Conectando atletas e patrocinadores de forma inovadora.</Text>

        <View style={styles.card}>
          <View style={styles.iconPlaceholder}>
            <Ionicons name="people-circle-outline" size={60} color={COLORS.primary} />
          </View>
          <Text style={styles.cardTitle}>Apoie atletas locais</Text>
          <Text style={styles.cardText}>Financie projetos esportivos e ajude talentos a alcançarem o pódio através de financiamento coletivo rápido.</Text>
        </View>

        <View style={styles.pagination}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpStep1')}>
          <Text style={styles.buttonText}>Começar agora</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Já tem uma conta? <Text style={{fontWeight: 'bold'}}>Entrar</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', paddingTop: 60, paddingHorizontal: 24 },
  logoContainer: { width: 80, height: 80, backgroundColor: COLORS.white, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  logoText: { fontSize: 32, fontWeight: '900', color: COLORS.primary },
  title: { fontSize: 28, fontWeight: 'bold', color: COLORS.white, marginBottom: 12 },
  subtitle: { fontSize: 16, color: COLORS.white, textAlign: 'center', opacity: 0.8, marginBottom: 40 },
  card: { backgroundColor: COLORS.white, borderRadius: 20, padding: 24, alignItems: 'center', width: '100%', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 5 },
  iconPlaceholder: { width: 80, height: 80, backgroundColor: COLORS.lightGray, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary, marginBottom: 12 },
  cardText: { fontSize: 14, color: COLORS.grayText, textAlign: 'center', lineHeight: 22 },
  pagination: { flexDirection: 'row', marginTop: 30 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.3)', marginHorizontal: 4 },
  dotActive: { backgroundColor: COLORS.white, width: 10, height: 10, borderRadius: 5 },
  footer: { padding: 24, paddingBottom: 40 },
  button: { backgroundColor: '#162C4E', paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  linkText: { color: COLORS.white, fontSize: 14, textAlign: 'center' },
});