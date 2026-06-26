import { StyleSheet, Text, View } from 'react-native';

export default function Receitas() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Receitas
            </Text>

            <View style={styles.card}>
                <Text style={styles.item}>
                    Salário - R$ 2.000,00
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.item}>
                    Serviço Extra - R$ 500,00
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
        backgroundColor: '#DFF6DD',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },

    item: {
        fontSize: 18,
        color: 'green',
    },
});