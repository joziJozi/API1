import React, { useEffect, useState } from 'react'
import apiDeputados from '../services/apiDeputados'
import { Card, Text } from 'react-native-paper'
import { Image } from 'react-native'

const Deputado = ({navigation}) => {

    const [deputado, setDeputados] = useState([])

    useEffect(() => {
        apiDeputados.get('/deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })
    }, [])


  return (
    <>
            <Text variant='titleLarge' style={{textAlign: 'center', padding: 15}}>Deputados</Text>
           {deputado.map(item => (
                <Card mode='outlined' key={item.id} style={{ marginBottom: 15 }}>
                    <Card.Title
                        title={item.nome}
                        subtitle={item.siglaPartido}
                        left={(props) =>
                            <Image
                                source={{ uri: item.urlFoto }}
                                style={{ width: 40, height: 40, borderRadius: 40 }}
                            ></Image>
                        }
                       

                    />

                </Card>
            )

            )
            }
        </>
  )
}

export default Deputado