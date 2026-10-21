// src/screens/AthleteProfileScreen.js
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export function AthleteProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.coverPhoto}>
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.profileBox}>
          <View style={styles.avatarContainer}>
             <View style={styles.avatar}><Ionicons name="person" size={40} color={COLORS.primary} /></View>
          </View>
          
          <Text style={styles.name}>Lucas 'Foguete' Silva</Text>
          <View style={styles.tag}><Text style={styles.tagText}>Atletismo • Santos, SP</Text></View>
          <Text style={styles.bio}>Velocista focado nos 100m e 200m rasos. Medalhista de bronze nacional e em busca de patrocínio para disputar o Sul-Americano de 2026.</Text>
          
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.outlineBtn}><Text style={styles.outlineBtnText}>Mensagem</Text></TouchableOpacity>
            <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('ProjectDetails')}><Text style={styles.primaryBtnText}>Apoiar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.outlineBtn}><Text style={styles.outlineBtnText}>Conectar</Text></TouchableOpacity>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}><Text style={styles.statNumber}>1.2k</Text><Text style={styles.statLabel}>Conexões</Text></View>
            <View style={styles.statBox}><Text style={styles.statNumber}>3</Text><Text style={styles.statLabel}>Projetos</Text></View>
            <View style={styles.statBox}><Text style={styles.statNumber}>4.8k</Text><Text style={styles.statLabel}>Hypes</Text></View>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <View style={[styles.tab, styles.tabActive]}><Text style={styles.tabTextActive}>Publicações</Text></View>
          <View style={styles.tab}><Text style={styles.tabTextInactive}>Projetos</Text></View>
        </View>

        <View style={styles.feed}>
          <View style={styles.postCard}>
            <View style={styles.postImage}><Ionicons name="image-outline" size={40} color={COLORS.grayText} /></View>
            <Text style={styles.postText}>Mais uma etapa de treinos de sprint finalizada hoje pela manhã! Rumo ao pódio nacional. 🏃‍♂️💨</Text>
            <Text style={styles.postTime}>Há 2 dias</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray },
  coverPhoto: { height: 160, backgroundColor: COLORS.primary, paddingTop: 20, paddingHorizontal: 16 },
  backBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' },
  profileBox: { backgroundColor: COLORS.white, paddingHorizontal: 24, paddingBottom: 24, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  avatarContainer: { alignItems: 'center', marginTop: -45, marginBottom: 16 },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: COLORS.white, borderWidth: 4, borderColor: COLORS.white, justifyContent: 'center', alignItems: 'center', elevation: 4 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#1E1E1E', textAlign: 'center', marginBottom: 8 },
  tag: { backgroundColor: '#F0F4FA', alignSelf: 'center', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginBottom: 16 },
  tagText: { color: COLORS.primary, fontSize: 12, fontWeight: 'bold' },
  bio: { fontSize: 14, color: COLORS.grayText, textAlign: 'center', lineHeight: 20, marginBottom: 24 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  outlineBtn: { flex: 1, borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 12, paddingVertical: 12, marginHorizontal: 4, alignItems: 'center' },
  outlineBtnText: { color: '#1E1E1E', fontWeight: 'bold', fontSize: 14 },
  primaryBtn: { flex: 1.2, backgroundColor: COLORS.primary, borderRadius: 12, paddingVertical: 12, marginHorizontal: 4, alignItems: 'center' },
  primaryBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderColor: COLORS.borderColor, paddingTop: 24 },
  statBox: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#1E1E1E' },
  statLabel: { fontSize: 12, color: COLORS.grayText, marginTop: 4 },
  tabsContainer: { flexDirection: 'row', backgroundColor: COLORS.white, marginTop: 8 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 16, borderBottomWidth: 2, borderColor: 'transparent' },
  tabActive: { borderColor: COLORS.primary },
  tabTextActive: { color: COLORS.primary, fontWeight: 'bold', fontSize: 15 },
  tabTextInactive: { color: COLORS.grayText, fontSize: 15 },
  feed: { padding: 16 },
  postCard: { backgroundColor: COLORS.white, borderRadius: 16, padding: 16, marginBottom: 16 },
  postImage: { height: 180, backgroundColor: COLORS.lightGray, borderRadius: 12, marginBottom: 12, justifyContent: 'center', alignItems: 'center' },
  postText: { fontSize: 14, color: '#1E1E1E', lineHeight: 20, marginBottom: 8 },
  postTime: { fontSize: 12, color: COLORS.grayText }
});