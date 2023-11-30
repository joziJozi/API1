
import React from 'react'
import { Button, Linking, ScrollView, View } from 'react-native'
import { Card, Text } from 'react-native-paper'




const Home = () => {

    const handlePress = () => {
        Linking.openURL('http://127.0.0.1:5500/pages/');
      };

    return (

        <>
            <ScrollView>

                <Text variant="titleLarge" style={{ textAlign: 'center', padding: 15 }}>Deputados</Text>
                <Card>
                    <Card.Content>
                        <Text>
                            Bem-vindo ao nosso aplicativo dedicado a manter você informado sobre seus representantes políticos. Este app é seu guia interativo para conhecer os deputados atuantes, oferecendo uma visão detalhada sobre seus perfis, atividades legislativas, posicionamentos em debates-chave e iniciativas em que estão envolvidos.
                        </Text>
                    </Card.Content>
                </Card>

                <Card style={{ marginBottom: 15, padding: 15 }}>
                    <Card.Cover source={{ uri: 'https://www.camara.leg.br/tema/assets/images/imagens-compartilhamento/sessoes-do-plenario.jpg' }} />
                </Card>

                <Text variant="titleLarge" style={{ textAlign: 'center', padding: 15 }}>Maps</Text>

                <View style={{ marginBottom: 15, padding: 15 }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1687459002819!6m8!1m7!1sGy_A6yLgWRJqbFMB3jHS7w!2m2!1d-15.79919876882989!2d-47.86512973453013!3f113.14190172335316!4f-1.807287510786253!5f0.4000000000000002" className="w-100" height="450" style={{ border: "0", boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </View>

             
            </ScrollView>
        </>
    )
}

export default Home

