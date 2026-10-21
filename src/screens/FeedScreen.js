// src/screens/FeedScreen.js
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo}><Text style={styles.logoText}>CA</Text></View>
          <Text style={styles.headerTitle}>Conecta</Text>
        </View>
        <View style={styles.headerRight}>
          <Ionicons name="search-outline" size={24} color={COLORS.primary} style={{marginRight: 16}} />
          <Ionicons name="alert-circle-outline" size={24} color={COLORS.primary} style={{marginRight: 16}} />
          <View style={styles.avatarSmall}><Ionicons name="person" size={16} color={COLORS.white} /></View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.banner}>
          <Ionicons name="cash-outline" size={24} color={COLORS.primary} style={{marginRight: 12}} />
          <View>
            <Text style={styles.bannerTitle}>Seja o patrocinador de alguém hoje</Text>
            <Text style={styles.bannerText}>Apoie projetos em destaque com doações a partir de R$ 5,00.</Text>
          </View>
        </View>

        {/* Post 1 */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.avatar}><Ionicons name="person" size={20} color={COLORS.white} /></View>
            <View>
              <Text style={styles.postAuthor}>Arthur Santos</Text>
              <Text style={styles.postMeta}>Atletismo • Há 2 horas</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color={COLORS.grayText} style={{marginLeft: 'auto'}} />
          </View>
          <Text style={styles.postText}>Galera! Faltam apenas 15% para batermos a meta do crowdfunding para o campeonato pan-americano. Cada contribuição de R$10 já ajuda demais nas passagens! Rumo ao ouro! 🏃‍♂️🥇</Text>
          
          <View style={styles.campaignBox}>
            <View style={styles.campaignHeader}>
              <Text style={styles.campaignTitle}>Campanha de Apoio</Text>
              <Text style={styles.campaignPercent}>85% Alcançado</Text>
            </View>
            <View style={styles.progressBar}><View style={[styles.progressFill, {width: '85%'}]} /></View>
            <View style={styles.campaignFooter}>
              <Text style={styles.campaignValue}>Arrecadado: <Text style={{fontWeight: 'bold'}}>R$ 4250</Text></Text>
              <Text style={styles.campaignMeta}>Meta: R$ 5000</Text>
            </View>
          </View>
          
          <View style={styles.postImagePlaceholder}><Ionicons name="image-outline" size={40} color={COLORS.grayText} /></View>
          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionBtn}><Ionicons name="flame-outline" size={20} color={COLORS.grayText} /><Text style={styles.actionText}>420 Hypes</Text></TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}><Ionicons name="chatbubble-outline" size={20} color={COLORS.grayText} /><Text style={styles.actionText}>15 Comentários</Text></TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}><Ionicons name="share-social-outline" size={20} color={COLORS.grayText} /><Text style={styles.actionText}>Compartilhar</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Mockup da Bottom Tab */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem}><Ionicons name="home" size={24} color={COLORS.primary} /><Text style={[styles.tabText, {color: COLORS.primary}]}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Ionicons name="heart-outline" size={24} color={COLORS.grayText} /><Text style={styles.tabText}>Apoie</Text></TouchableOpacity>
        <TouchableOpacity style={styles.centerTabBtn} onPress={() => navigation.navigate('NewPost')}><Ionicons name="add" size={32} color={COLORS.white} /></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}><Ionicons name="people-outline" size={24} color={COLORS.grayText} /><Text style={styles.tabText}>Conexões</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('AthleteProfile')}><Ionicons name="person-outline" size={24} color={COLORS.grayText} /><Text style={styles.tabText}>Perfil</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: COLORS.white },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 32, height: 32, backgroundColor: COLORS.primary, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  logoText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.primary },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  avatarSmall: { width: 32, height: 32, borderRadius: 16, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
  scroll: { padding: 16, paddingBottom: 100 },
  banner: { flexDirection: 'row', backgroundColor: '#F0F4FA', padding: 16, borderRadius: 12, marginBottom: 16, alignItems: 'center' },
  bannerTitle: { fontSize: 14, fontWeight: 'bold', color: COLORS.primary, marginBottom: 4 },
  bannerText: { fontSize: 12, color: COLORS.grayText, width: '90%' },
  postCard: { backgroundColor: COLORS.white, borderRadius: 16, padding: 16, marginBottom: 16 },
  postHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  postAuthor: { fontSize: 15, fontWeight: 'bold', color: '#1E1E1E' },
  postMeta: { fontSize: 12, color: COLORS.grayText },
  postText: { fontSize: 14, color: '#1E1E1E', lineHeight: 20, marginBottom: 12 },
  campaignBox: { backgroundColor: COLORS.inputBackground, padding: 12, borderRadius: 8, marginBottom: 12 },
  campaignHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  campaignTitle: { fontSize: 13, fontWeight: 'bold', color: COLORS.primary },
  campaignPercent: { fontSize: 12, color: COLORS.grayText },
  progressBar: { height: 6, backgroundColor: COLORS.lightGray, borderRadius: 3, marginBottom: 8 },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 3 },
  campaignFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  campaignValue: { fontSize: 12, color: '#1E1E1E' },
  campaignMeta: { fontSize: 12, color: COLORS.grayText },
  postImagePlaceholder: { width: '100%', height: 200, backgroundColor: COLORS.lightGray, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  postActions: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderColor: COLORS.borderColor, paddingTop: 12 },
  actionBtn: { flexDirection: 'row', alignItems: 'center' },
  actionText: { fontSize: 13, color: COLORS.grayText, marginLeft: 6 },
  bottomTab: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: COLORS.white, paddingVertical: 12, borderTopWidth: 1, borderColor: COLORS.borderColor, position: 'absolute', bottom: 0, width: '100%' },
  tabItem: { alignItems: 'center' },
  tabText: { fontSize: 10, color: COLORS.grayText, marginTop: 4 },
  centerTabBtn: { width: 56, height: 56, borderRadius: 28, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginTop: -30, borderWidth: 4, borderColor: COLORS.white }
});