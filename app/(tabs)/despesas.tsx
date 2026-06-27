import { StyleSheet, Text, View } from 'react-native';

export default function Despesas() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Despesas
            </Text>

            <View style={styles.card}>
                <Text style={styles.item}>
                    Mercado - R$ 300,00
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.item}>
                    Combustível - R$ 250,00
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 20,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#FFDADA',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },

    item: {
        fontSize: 18,
        color: 'red',
    },
});