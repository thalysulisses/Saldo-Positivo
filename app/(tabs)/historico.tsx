import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Historico() {

    const [lancamentos, setLancamentos] = useState<any[]>([]);

    const buscarLancamentos = async () => {
        try {
            const dados = await getDocs(collection(db, 'lancamentos'));

            const lista: any[] = [];

            dados.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });

            setLancamentos(lista);

        } catch (error) {
            console.log('Erro ao buscar lançamentos:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            buscarLancamentos();
        }, [])
    );

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Histórico Financeiro
            </Text>

            <FlatList
                data={lancamentos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>

                        <Text style={styles.descricao}>
                            {item.descricao}
                        </Text>

                        <Text>
                            Tipo: {item.tipo}
                        </Text>

                        <Text>
                            R$ {item.valor}
                        </Text>

                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },

    descricao: {
        fontSize: 18,
        fontWeight: 'bold',
    },

});