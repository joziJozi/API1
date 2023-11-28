import React, { useEffect, useState } from 'react'
import { Card, Text, DataTable, Button, TextInput, Avatar } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import apiDeputados from '../../services/api';
import Tag from '../../components/Tags';

const DeputadosDetalhes = ({ navigation, route }) => {
  const [deputados, setDeputados] = useState({})
  const [despesas, setDespesas] = useState([])
  const [orgaos, setOrgaos] = useState([])
  const [valores, setValores] = useState([])
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const foto = route.params?.foto || ""

  const colors = {
    purple: {
      default: "rgba(236, 179, 52, 1)",
      half: "rgba(236, 179, 52, 0.8)",
      quarter: "rgba(236, 179, 52, 0.25)",
      zero: "rgba(236, 179, 52, 0.2)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };
  // useEffect(() => {

  //   if (gastos.length > 0) {
  //     const ctx = canvasEl.current.getContext("2d");

  //     const gradient = ctx.createLinearGradient(0, 16, 0, 600);
  //     gradient.addColorStop(0, colors.purple.half);
  //     gradient.addColorStop(0.65, colors.purple.quarter);
  //     gradient.addColorStop(1, colors.purple.zero);

  //     const data = {
  //       labels: meses,
  //       datasets: [
  //         {
  //           backgroundColor: gradient,
  //           label: "Valor gasto",
  //           data: valores,
  //           fill: true,
  //           borderWidth: 2,
  //           borderColor: colors.purple.default,
  //           lineTension: 0.2,
  //           pointBackgroundColor: colors.purple.default,
  //           pointRadius: 3
  //         }
  //       ]
  //     };
  //     const config = {
  //       type: "line",
  //       data: data
  //     };
  //     const myLineChart = new Chart(ctx, config);

  //     return function cleanup() {
  //       myLineChart.destroy();
  //     }
  //   }

  // }, [valores])

  useEffect(() => {
    const id = route.params.id
    apiDeputados.get(`/deputados/${id}`).then(resultado => {
      setDeputados(resultado.data.dados)
    })
    apiDeputados.get(`/deputados/${id}/despesas?itens=5`).then(resultado => {
      setDespesas(resultado.data.dados)
    })
    apiDeputados.get(`/deputados/${id}/orgaos?itens=5`).then(resultado => {
      setOrgaos(resultado.data.dados)
    })

  }, [])


  return (
    <>
      <ScrollView style={{ margin: 10 }}>
        <View>
          <Card mode='outlined' style={{ margin: 10 }}>
            <Card.Content >
              <Card.Cover
                source={{ uri: foto }} style={{ height: 400 }}
              />
              <Text
                variant="titleLarge" style={{
                  marginTop: 5 ,
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: '#D3D031'
                }}
              >{deputados.nomeCivil}</Text>
              <Text
                variant="titleLarge" style={{
                  marginTop: 1,
                  fontSize: 14,
                  color: '#D3D031'
                }}
              >{deputados.municipioNascimento}</Text>


            </Card.Content>
          </Card>
        </View>
     
           
      
        <DataTable style={{ margin: 5 }}>
          <Text variant="titleLarge"> Despesas </Text>
          <DataTable.Header>
            <DataTable.Title>Ano</DataTable.Title>
            <DataTable.Title>Tipo</DataTable.Title>
            <DataTable.Title>Valor</DataTable.Title>
          </DataTable.Header>

          {despesas.map((d, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell>{d.ano}</DataTable.Cell>
              <DataTable.Cell>{d.tipoDespesa}</DataTable.Cell>
              <DataTable.Cell>{d.valorDocumento.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>

        <DataTable style={{ margin: 5 }}>
          <Text variant="titleLarge"> Orgãos </Text>
          <DataTable.Header>
            <DataTable.Title>Orgão</DataTable.Title>
            <DataTable.Title>Sigla</DataTable.Title>
            <DataTable.Title>Título</DataTable.Title>
          </DataTable.Header>

          {orgaos.map((d, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell>{d.nomeOrgao}</DataTable.Cell>
              <DataTable.Cell>{d.siglaOrgao}</DataTable.Cell>
              <DataTable.Cell>{d.titulo}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </>
  )
}

export default DeputadosDetalhes