import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {

        if (email === 'admin@teste.com' && senha === '123456') {

            router.replace('/(tabs)');

        } else {

            alert('Email ou senha inválidos');

        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Saldo Positivo
            </Text>

            <Text style={styles.subtitulo}>
                Controle Financeiro Pessoal
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
                secureTextEntry
            />

            <Button
                title="Entrar"
                onPress={handleLogin}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },

    input: {
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
    },
});