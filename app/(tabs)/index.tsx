import { router } from 'expo-router';
import { Button, Share, StyleSheet, Text, View } from 'react-native';

export default function Resumo() {

    const compartilharResumo = async () => {
    try {
        await Share.share({
            message:
                'Resumo Financeiro\n\nSaldo Atual: R$ 1.950,00\nReceitas: R$ 2.500,00\nDespesas: R$ 550,00\n\nEnviado pelo aplicativo Saldo Positivo.'
        });
    } catch (error) {
        alert('Não foi possível compartilhar.');
    }
};
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Saldo Positivo
            </Text>

            <Text style={styles.subtitulo}>
                Resumo Financeiro
            </Text>

            <View style={styles.card}>
                <Text style={styles.label}>
                    Saldo Atual
                </Text>

                <Text style={styles.saldo}>
                    R$ 1.950,00
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.receita}>
                    Receitas do mês: R$ 2.500,00
                </Text>

                <Text style={styles.despesa}>
                    Despesas do mês: R$ 550,00
                </Text>
            </View>

            <Text style={styles.historicoTitulo}>
                Últimas movimentações
            </Text>

            <Text style={styles.movReceita}>
                + Salário .......... R$ 2.000,00
            </Text>

            <Text style={styles.movDespesa}>
                - Mercado .......... R$ 300,00
            </Text>

            <Text style={styles.movDespesa}>
                - Combustível ...... R$ 250,00
            </Text>

            <Text style={styles.movReceita}>
                + Serviço Extra ............. R$ 500,00
            </Text>

            <View style={styles.areaBotoes}>

            <Button
                title='Compartilhar Resumo'
                onPress={compartilharResumo}
            />

            <View style={styles.espaco} />

            </View>    

            <Button
                title='Sair'
                onPress={() => router.replace('/login')}
                color='red'
            />

        </View>
         );
    }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },

    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },

    label: {
        fontSize: 18,
        textAlign: 'center',
    },

    saldo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
        marginTop: 10,
    },

    receita: {
        fontSize: 18,
        color: 'green',
        marginBottom: 5,
    },

    despesa: {
        fontSize: 18,
        color: 'red',
    },

    historicoTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },

    movReceita: {
        fontSize: 18,
        color: 'green',
        marginBottom: 5,
    },

    movDespesa: {
        fontSize: 18,
        color: 'red',
        marginBottom: 5,
    },

    areaBotoes: {
        marginTop: 30,
    },

    espaco: {
        marginTop: 10,
    },

});