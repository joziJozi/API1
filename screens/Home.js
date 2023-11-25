
import React from 'react'
import { Card, Text } from 'react-native-paper'




const Home = () => {
    return (

        <>
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

            <Text variant="titleLarge" style={{ textAlign: 'center', padding: 15 }}>Avalie</Text>

           

        </>
    )
}

export default Home

