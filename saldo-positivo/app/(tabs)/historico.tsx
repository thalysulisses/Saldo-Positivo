import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Historico() {

    const lancamentos = [
    {
        id: '1',
        descricao: 'Salário',
        tipo: 'Receita',
        valor: 'R$ 2.000,00'
    },
    {
        id: '2',
        descricao: 'Mercado',
        tipo: 'Despesa',
        valor: 'R$ 300,00'
    },
    {
        id: '3',
        descricao: 'Serviço Extra',
        tipo: 'Receita',
        valor: 'R$ 500,00'
    },
    {
        id: '4',
        descricao: 'Combustível',
        tipo: 'Despesa',
        valor: 'R$ 250,00'
    }
];

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
                    {item.tipo}
                </Text>

                <Text>
                    {item.valor}
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
        backgroundColor: '#E5E5E5',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },

    descricao: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});