// src/screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

// Dados simulados para estruturar o front-end
const ATLETAS_MOCK = [
  {
    id: '1',
    nome: "Lucas 'Foguete'",
    modalidade: 'Atletismo',
    objetivo: 'Campeonato Nacional 2026',
    arrecadado: 75, // porcentagem
    local: 'São Paulo, SP'
  },
  {
    id: '2',
    nome: 'Mariana Costa',
    modalidade: 'Ciclismo',
    objetivo: 'Equipamento de Treino',
    arrecadado: 40,
    local: 'Santos, SP'
  }
];

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Apoiador! 👋</Text>
          <Text style={styles.subtitle}>Descubra novos talentos hoje</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={40} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Barra de Busca */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.grayText} style={styles.searchIcon} />
          <Text style={styles.searchText}>Buscar atletas ou modalidades...</Text>
        </View>

        {/* Categorias (Tags) */}
        <Text style={styles.sectionTitle}>Modalidades em alta</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {['Todos', 'Atletismo', 'Ciclismo', 'Natação', 'Vôlei'].map((cat, index) => (
            <TouchableOpacity key={index} style={[styles.categoryTag, index === 0 && styles.categoryTagActive]}>
              <Text style={[styles.categoryText, index === 0 && styles.categoryTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Feed de Atletas */}
        <Text style={styles.sectionTitle}>Atletas buscando patrocínio</Text>
        {ATLETAS_MOCK.map((atleta) => (
          <View key={atleta.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={24} color={COLORS.borderColor} />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.atletaNome}>{atleta.nome}</Text>
                <Text style={styles.atletaDetalhes}>{atleta.modalidade} • {atleta.local}</Text>
              </View>
            </View>
            
            <Text style={styles.objetivoTitle}>Meta: {atleta.objetivo}</Text>
            
            {/* Barra de Progresso */}
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${atleta.arrecadado}%` }]} />
              </View>
              <Text style={styles.progressText}>{atleta.arrecadado}% alcançado</Text>
            </View>

            <TouchableOpacity style={styles.supportButton}>
              <Text style={styles.supportButtonText}>Apoiar Atleta</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, backgroundColor: COLORS.white },
  greeting: { fontSize: 20, fontWeight: 'bold', color: COLORS.textDark },
  subtitle: { fontSize: 14, color: COLORS.grayText, marginTop: 4 },
  scrollContent: { padding: 24, paddingBottom: 50 },
  
  // Busca
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, borderRadius: 12, padding: 12, marginBottom: 24, borderWidth: 1, borderColor: COLORS.borderColor },
  searchIcon: { marginRight: 10 },
  searchText: { color: COLORS.grayText, fontSize: 15 },
  
  // Categorias
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 16 },
  categoriesContainer: { flexDirection: 'row', marginBottom: 24 },
  categoryTag: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.borderColor, marginRight: 10, height: 36 },
  categoryTagActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  categoryText: { color: COLORS.textDark, fontSize: 14 },
  categoryTextActive: { color: COLORS.white, fontWeight: 'bold' },
  
  // Card do Atleta
  card: { backgroundColor: COLORS.white, borderRadius: 16, padding: 16, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatarPlaceholder: { width: 50, height: 50, borderRadius: 25, backgroundColor: COLORS.lightGray, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  atletaNome: { fontSize: 16, fontWeight: 'bold', color: COLORS.textDark },
  atletaDetalhes: { fontSize: 13, color: COLORS.grayText, marginTop: 4 },
  objetivoTitle: { fontSize: 14, fontWeight: '600', color: COLORS.textDark, marginBottom: 12 },
  
  // Progresso
  progressContainer: { marginBottom: 16 },
  progressBar: { height: 8, backgroundColor: COLORS.lightGray, borderRadius: 4, marginBottom: 8 },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 4 },
  progressText: { fontSize: 12, color: COLORS.grayText, textAlign: 'right' },
  
  // Botão Apoiar
  supportButton: { backgroundColor: '#F0F4FA', paddingVertical: 12, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: COLORS.primary },
  supportButtonText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 14 }
});