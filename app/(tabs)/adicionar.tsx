import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from '../../firebase';

export default function Adicionar() {

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSalvar = async () => {

    if (descricao === '' || valor === '' || tipo === '') {
        alert('Preencha todos os campos!');
        return;
    }

    try {

    await addDoc(collection(db, 'lancamentos'), {
        descricao,
        valor: Number(valor),
        tipo,
        });

        alert('Lançamento salvo com sucesso!');

        setDescricao('');
        setValor('');
        setTipo('');

    } catch (error) {

        alert('Erro ao salvar.');

    }

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
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.input}
                placeholder="Valor"
                value={valor}
                onChangeText={setValor}
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
        backgroundColor: 'white',
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

});