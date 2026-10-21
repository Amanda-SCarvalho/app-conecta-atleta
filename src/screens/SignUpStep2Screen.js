// src/screens/SignUpStep2Screen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { storage } from '../storage/storage';
import { mostrarAlerta } from '../utils/mensagem';

export function SignUpStep2Screen({ navigation }) {
  const [selectedSports, setSelectedSports] = useState(['Atletismo', 'Ciclismo']);
  const [apelido, setApelido] = useState('');
  const [bio, setBio] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const sportsList = ['Futebol', 'Natação', 'Atletismo', 'Surf', 'Ciclismo', 'Vôlei'];

  const toggleSport = (sport) => {
    if (selectedSports.includes(sport)) {
      setSelectedSports(selectedSports.filter(s => s !== sport));
    } else {
      setSelectedSports([...selectedSports, sport]);
    }
  };

  const finalizar = () => {
    const temp = storage.getString('cadastroTemp');
    if (!temp) {
      mostrarAlerta('Atenção', 'Preencha os dados do passo 1 primeiro.');
      navigation.navigate('SignUpStep1');
      return;
    }

    const dados = {
      ...JSON.parse(temp),
      apelido: apelido.trim(),
      bio: bio.trim(),
      localizacao: localizacao.trim(),
      modalidades: selectedSports,
    };

    const salvo = storage.getString('cadastros');
    const cadastros = salvo ? JSON.parse(salvo) : {};
    if (cadastros[dados.email]) {
      mostrarAlerta('Erro', 'Já existe uma conta com esse e-mail.');
      return;
    }

    cadastros[dados.email] = dados;
    storage.set('cadastros', JSON.stringify(cadastros));
    storage.set('usuario', dados.email);
    storage.delete('cadastroTemp');

    mostrarAlerta('Sucesso', 'Perfil criado com sucesso!');
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.stepHeader}>
          <Text style={styles.stepText}>PASSO 2 DE 2</Text>
          <Text style={styles.stepTextLight}>Quase lá!</Text>
        </View>
        <View style={styles.progressBar}><View style={styles.progressFill} /></View>

        <View style={styles.profilePicBox}>
          <View style={styles.avatar}>
             <Ionicons name="person" size={50} color={COLORS.borderColor} />
          </View>
          <TouchableOpacity style={styles.addPic}>
            <Ionicons name="close" size={12} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.picText}>Carregar foto de perfil</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome esportivo / apelido</Text>
          <TextInput style={styles.input} placeholder="Ex: Lucas 'Foguete'" value={apelido} onChangeText={setApelido} />

          <Text style={styles.label}>Biografia curta</Text>
          <TextInput style={[styles.input, {height: 80, textAlignVertical: 'top'}]} placeholder="Conte sua história" multiline value={bio} onChangeText={setBio} />
          
          <Text style={styles.label}>Localização</Text>
          <TextInput style={styles.input} placeholder="Cidade, Estado" value={localizacao} onChangeText={setLocalizacao} />

          <Text style={styles.label}>Selecione suas modalidades:</Text>
          <View style={styles.tagsContainer}>
            {sportsList.map((sport) => (
              <TouchableOpacity key={sport} style={[styles.tag, selectedSports.includes(sport) && styles.tagActive]} onPress={() => toggleSport(sport)}>
                <Text style={[styles.tagText, selectedSports.includes(sport) && styles.tagTextActive]}>{sport}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={finalizar}>
            <Text style={styles.buttonText}>Finalizar perfil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scroll: { padding: 24, paddingBottom: 50 },
  stepHeader: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 },
  stepText: { fontSize: 12, fontWeight: 'bold', color: COLORS.primary },
  stepTextLight: { fontSize: 12, color: COLORS.grayText },
  progressBar: { height: 6, backgroundColor: COLORS.lightGray, borderRadius: 3, marginBottom: 30 },
  progressFill: { height: '100%', width: '100%', backgroundColor: COLORS.primary, borderRadius: 3 },
  profilePicBox: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: COLORS.lightGray, borderWidth: 1, borderColor: COLORS.borderColor, justifyContent: 'center', alignItems: 'center' },
  addPic: { position: 'absolute', right: '35%', bottom: 25, backgroundColor: COLORS.primary, width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#FFF' },
  picText: { fontSize: 14, fontWeight: '600', color: '#1E1E1E', marginTop: 12 },
  form: { width: '100%' },
  label: { fontSize: 14, fontWeight: '600', color: '#1E1E1E', marginBottom: 8, marginTop: 16 },
  input: { borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 12, padding: 16, fontSize: 15, backgroundColor: COLORS.inputBackground },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  tag: { borderWidth: 1, borderColor: COLORS.borderColor, borderRadius: 20, paddingVertical: 8, paddingHorizontal: 16, marginRight: 8, marginBottom: 12 },
  tagActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  tagText: { color: '#1E1E1E', fontSize: 14 },
  tagTextActive: { color: COLORS.white, fontWeight: '600' },
  button: { backgroundColor: COLORS.primary, paddingVertical: 16, borderRadius: 12, alignItems: 'center', marginTop: 30 },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: 'bold' },
});