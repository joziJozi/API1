import React, { useEffect, useState } from 'react'
import apiDeputados from '../services/apiDeputados'
import { Card, Text } from 'react-native-paper'

const Detalhes = ({ navigation, route }) => {

    const [deputado, setDeputado] = useState({})

    useEffect(() => {
        const id = route.params.id
        apiDeputados.get('/deputados/' + id).then(resultado => {
            setDeputado(resultado.data.dados)
        })
    }, [])

    return (
        <>
            <Card.Content>
            <Text>Nome: {deputado.nomeCivil}</Text>
            <Text>Cpf: {deputado.cpf}</Text>
            <Text>Sexo: {deputado.sexo}</Text>
            </Card.Content>
        </>
    )
}

export default Detalhes