import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Adicionar() {

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSalvar = () => {

        if (descricao === '' || valor === '' || tipo === '') {
            alert('Preencha todos os campos');
            return;
        }

        setMensagem(
            tipo + ': ' + descricao + ' - R$ ' + valor
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Novo Lançamento
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={descricao}
                onChangeText={(texto) => setDescricao(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="Valor"
                value={valor}
                onChangeText={(texto) => setValor(texto)}
                keyboardType="numeric"
            />

            <View style={styles.botoes}>
                <Button
                    title="Receita"
                    onPress={() => setTipo('Receita')}
                />

                <Button
                    title="Despesa"
                    color="red"
                    onPress={() => setTipo('Despesa')}
                />
            </View>

            <Text style={styles.tipo}>
                Tipo selecionado: {tipo}
            </Text>

            <Button
                title="Salvar"
                onPress={handleSalvar}
            />

            <Text style={styles.mensagem}>
                {mensagem}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    input: {
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },

    botoes: {
        marginVertical: 10,
        gap: 10,
    },

    tipo: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 15,
    },

    mensagem: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },

});