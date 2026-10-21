// src/screens/NewPostScreen.js
import React from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export function NewPostScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Post</Text>
        <TouchableOpacity style={styles.publishBtn}>
          <Text style={styles.publishBtnText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.authorBox}>
          <View style={styles.avatar}><Ionicons name="person" size={24} color={COLORS.white} /></View>
          <View>
            <Text style={styles.authorName}>Lucas 'Foguete'</Text>
            <View style={styles.privacyTag}>
              <Ionicons name="globe-outline" size={12} color={COLORS.primary} />
              <Text style={styles.privacyText}>Público</Text>
            </View>
          </View>
        </View>

        <TextInput 
          style={styles.input} 
          placeholder="O que está acontecendo no seu treino hoje? Divulgue rifas, metas de crowdfunding ou conquistas..."
          multiline
          autoFocus
        />

        <TouchableOpacity style={styles.addMediaBox}>
          <Ionicons name="image-outline" size={32} color={COLORS.grayText} style={{marginBottom: 8}} />
          <Text style={styles.addMediaTitle}>Adicionar foto ou vídeo</Text>
          <Text style={styles.addMediaSub}>Arraste ou escolha da sua galeria</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.toolbar}>
        <View style={styles.tools}>
          <Ionicons name="camera-outline" size={24} color={COLORS.primary} style={{marginRight: 16}} />
          <Ionicons name="bar-chart-outline" size={24} color={COLORS.primary} style={{marginRight: 16}} />
          <Ionicons name="location-outline" size={24} color={COLORS.primary} style={{marginRight: 16}} />
          <Ionicons name="flame-outline" size={24} color={COLORS.primary} />
        </View>
        <Text style={styles.charCount}>0 / 280</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderColor: COLORS.borderColor },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.primary },
  publishBtn: { backgroundColor: COLORS.primary, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  publishBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14 },
  content: { flex: 1, padding: 16 },
  authorBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  authorName: { fontSize: 16, fontWeight: 'bold', color: '#1E1E1E', marginBottom: 4 },
  privacyTag: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.inputBackground, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, alignSelf: 'flex-start' },
  privacyText: { fontSize: 12, color: COLORS.primary, marginLeft: 4 },
  input: { fontSize: 18, color: '#1E1E1E', lineHeight: 24, minHeight: 120, textAlignVertical: 'top', marginBottom: 24 },
  addMediaBox: { borderWidth: 2, borderColor: COLORS.borderColor, borderStyle: 'dashed', borderRadius: 12, height: 160, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.inputBackground },
  addMediaTitle: { fontSize: 14, fontWeight: 'bold', color: '#1E1E1E' },
  addMediaSub: { fontSize: 12, color: COLORS.grayText, marginTop: 4 },
  toolbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderTopWidth: 1, borderColor: COLORS.borderColor },
  tools: { flexDirection: 'row' },
  charCount: { fontSize: 14, color: COLORS.grayText }
});