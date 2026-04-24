import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface User {
  name: string;
  email: string;
  role: string;
}

const App: React.FC = () => {
  const userData: User = {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'Desarrollador',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del Usuario</Text>
      
      <View style={styles.dataCard}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{userData.name}</Text>
        
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData.email}</Text>
        
        <Text style={styles.label}>Rol:</Text>
        <Text style={styles.value}>{userData.role}</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginTop: 15,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default App;
