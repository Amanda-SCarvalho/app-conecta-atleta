// src/storage/storage.js
import { MMKV } from 'react-native-mmkv';

// Instância única do MMKV, usada nas telas de Login e de Cadastro
export const storage = new MMKV({ id: 'conectaatleta-storage' });
