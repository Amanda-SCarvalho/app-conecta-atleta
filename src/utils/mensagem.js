// src/utils/mensagem.js
import { Alert, Platform } from 'react-native';

// Alert.alert não funciona na web: usa window.alert nesse caso
export const mostrarAlerta = (titulo, mensagem) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensagem}`);
    return;
  }
  Alert.alert(titulo, mensagem);
};
