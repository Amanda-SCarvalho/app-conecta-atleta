// src/screens/ProjectDetailsScreen.js
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export function ProjectDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.heroBanner}>
          <View style={styles.heroHeader}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
               <Ionicons name="close" size={28} color={COLORS.white} />
             </TouchableOpacity>
             <Text style={styles.heroNavTitle}>Detalhes do Projeto</Text>
             <TouchableOpacity><Ionicons name="share-social-outline" size={24} color={COLORS.white} /></TouchableOpacity>
          </View>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>RUMO AO SUL-AMERICANO</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.authorBox}>
            <View style={styles.avatar}><Ionicons name="person" size={20} color={COLORS.white} /></View>
            <View>
              <Text style={styles.authorName}>Lucas Silva</Text>
              <Text style={styles.authorMeta}>Atleta de Atletismo • Santos, SP</Text>
            </View>
          </View>

          <Text style={styles.projectTitle}>Sponsorship para Campeonato Sul-Americano de Atletismo</Text>
          <Text style={styles.projectDesc}>
            Este crowdfunding é destinado a cobrir as despesas de passagem aérea, hospedagem e alimentação necessárias para minha participação no torneio de Santiago de Chile em 2026. Representar nosso país é meu maior sonho!
          </Text>

          <View style={styles.fundingBox}>
            <View style={styles.fundingHeader}>
               <View>
                 <Text style={styles.fundingLabel}>Arrecadado</Text>
                 <Text style={styles.fundingValue}>R$ 8.750</Text>
               </View>
               <View style={{alignItems: 'flex-end'}}>
                 <Text style={styles.fundingLabel}>Meta do Projeto</Text>
                 <Text style={styles.fundingGoal}>R$ 15.000</Text>
               </View>
            </View>
            <View style={styles.progressBar}><View style={[styles.progressFill, {width: '58%'}]} /></View>
            
            <View style={styles.fundingFooter}>
              <View style={styles.footerItem}><Ionicons name="people-outline" size={16} color={COLORS.grayText} /><Text style={styles.footerText}> 47 Apoiadores</Text></View>
              <View style={styles.footerItem}><Ionicons name="time-outline" size={16} color={COLORS.grayText} /><Text style={styles.footerText}> 23 Dias restantes</Text></View>
            </View>

            <TouchableOpacity style={styles.supportBtn}>
              <Text style={styles.supportBtnText}>Apoiar este projeto</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Apoios recentes</Text>
          
          {[
            { id: 1, name: 'Thiago Oliveira', amount: 'R$ 150,00' },
            { id: 2, name: 'Soraia Mendes', amount: 'R$ 50,00' },
            { id: 3, name: 'Carlos Rocha', amount: 'R$ 300,00' }
          ].map(apoio => (
            <View key={apoio.id} style={styles.supporterCard}>
              <View style={styles.supporterLeft}>
                <View style={styles.supporterAvatar}><Ionicons name="person" size={16} color={COLORS.primary} /></View>
                <Text style={styles.supporterName}>{apoio.name}</Text>
              </View>
              <Text style={styles.supporterAmount}>{apoio.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray },
  heroBanner: { height: 240, backgroundColor: COLORS.primary, padding: 16 },
  heroHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  heroNavTitle: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
  heroContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heroTitle: { fontSize: 28, fontWeight: '900', color: COLORS.white, textAlign: 'center', width: '80%' },
  content: { backgroundColor: COLORS.lightGray, padding: 16 },
  authorBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: 12, borderRadius: 12, marginTop: -30, marginBottom: 24, elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  authorName: { fontSize: 15, fontWeight: 'bold', color: '#1E1E1E' },
  authorMeta: { fontSize: 12, color: COLORS.grayText },
  projectTitle: { fontSize: 22, fontWeight: 'bold', color: '#1E1E1E', marginBottom: 12 },
  projectDesc: { fontSize: 14, color: COLORS.grayText, lineHeight: 22, marginBottom: 24 },
  fundingBox: { backgroundColor: COLORS.white, padding: 20, borderRadius: 16, marginBottom: 24 },
  fundingHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  fundingLabel: { fontSize: 12, color: COLORS.grayText, marginBottom: 4 },
  fundingValue: { fontSize: 24, fontWeight: '900', color: '#1E1E1E' },
  fundingGoal: { fontSize: 16, fontWeight: 'bold', color: '#1E1E1E' },
  progressBar: { height: 8, backgroundColor: COLORS.lightGray, borderRadius: 4, marginBottom: 16 },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 4 },
  fundingFooter: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  footerItem: { flexDirection: 'row', alignItems: 'center' },
  footerText: { fontSize: 12, color: COLORS.grayText },
  supportBtn: { backgroundColor: COLORS.primary, paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  supportBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E1E1E', marginBottom: 16 },
  supporterCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.white, padding: 16, borderRadius: 12, marginBottom: 8 },
  supporterLeft: { flexDirection: 'row', alignItems: 'center' },
  supporterAvatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: COLORS.lightGray, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  supporterName: { fontSize: 14, fontWeight: 'bold', color: '#1E1E1E' },
  supporterAmount: { fontSize: 14, fontWeight: '900', color: '#1E1E1E' }
});
