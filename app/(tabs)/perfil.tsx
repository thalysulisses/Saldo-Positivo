import { StyleSheet, Text, View } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Perfil do Usuário
            </Text>

            <Text style={styles.texto}>
                Nome: Thalys Ulisses
            </Text>

            <Text style={styles.texto}>
                Curso: ADS
            </Text>

            <Text style={styles.texto}>
                Aplicativo: Saldo Positivo
            </Text>

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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },

    texto: {
        fontSize: 18,
        marginBottom: 10,
    },
});