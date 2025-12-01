import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

export default function App() {
  const [name, setName] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');
  const [error, setError] = useState<string>('');
  const MAX_LENGTH = 20;

  const handleGreet = async () => {
    // Vibración háptica al pulsar el botón
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    if (name.trim().length === 0) {
      setError('Por favor, introduce tu nombre');
      setGreeting('');
    } else {
      setError('');
      setGreeting(`¡Hola, ${name.trim()}!`);
    }
  };

  const handleNameChange = (text: string) => {
    setName(text);
    // Limpiar error cuando el usuario empieza a escribir
    if (error && text.trim().length > 0) {
      setError('');
    }
  };

  const isButtonDisabled = name.trim().length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Header con gradiente */}
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <MaterialIcons name="waving-hand" size={40} color="#FFF" />
          <Text style={styles.title}>Saludador Expo</Text>
        </LinearGradient>

        {/* Contenido principal */}
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Tu nombre:</Text>
            <TextInput
              style={[
                styles.input,
                error ? styles.inputError : null
              ]}
              placeholder="Escribe tu nombre aquí..."
              placeholderTextColor="#999"
              value={name}
              onChangeText={handleNameChange}
              maxLength={MAX_LENGTH}
              autoCapitalize="words"
              autoCorrect={false}
            />
            
            {/* Contador de caracteres */}
            <Text style={styles.charCounter}>
              {name.length} / {MAX_LENGTH}
            </Text>
          </View>

          {/* Botón de saludar */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              isButtonDisabled && styles.buttonDisabled,
              pressed && !isButtonDisabled && styles.buttonPressed
            ]}
            onPress={handleGreet}
            disabled={isButtonDisabled}
          >
            <MaterialIcons 
              name="person" 
              size={24} 
              color={isButtonDisabled ? '#999' : '#FFF'} 
            />
            <Text style={[
              styles.buttonText,
              isButtonDisabled && styles.buttonTextDisabled
            ]}>
              Saludar
            </Text>
          </Pressable>

          {/* Mensaje de error */}
          {error ? (
            <View style={styles.errorContainer}>
              <MaterialIcons name="error-outline" size={20} color="#e74c3c" />
              <Text style={styles.errorMessage}>{error}</Text>
            </View>
          ) : null}

          {/* Mensaje de saludo */}
          {greeting ? (
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingMessage}>{greeting}</Text>
            </View>
          ) : null}
        </View>

        {/* Footer informativo */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 Escribe tu nombre y pulsa el botón
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#e0e6ed',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#2c3e50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputError: {
    borderColor: '#e74c3c',
    backgroundColor: '#fef5f5',
  },
  charCounter: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'right',
    marginRight: 4,
  },
  button: {
    backgroundColor: '#667eea',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#e0e6ed',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: '#999',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fef5f5',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  errorMessage: {
    color: '#e74c3c',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  greetingContainer: {
    backgroundColor: '#e8f5e9',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  greetingMessage: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
});