import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { Button, Card, DataTable, Text } from 'react-native-paper';

const News = () => {
    const [noticias, setNoticias] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const noticiasPorPagina = 10;
    const numeroDePaginas = Math.ceil(noticias.length / noticiasPorPagina);
    const indiceUltimaNoticia = paginaAtual * noticiasPorPagina;
    const indicePrimeiraNoticia = indiceUltimaNoticia - noticiasPorPagina;
    const noticiasPaginadas = noticias.slice(indicePrimeiraNoticia, indiceUltimaNoticia);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/everything?q=deputados&language=pt&apiKey=9f6af0220e884608992a91c7847f9f84'
                );
                setNoticias(response.data.articles);
            } catch (error) {
                console.log(error);
            }
        };

        fetchNoticias();
    }, []);

    const handlePaginaClicada = (numeroPagina) => {
        setPaginaAtual(numeroPagina);
    };

    return (
        <>
            <ScrollView style={{ margin: 10 }}>

              
 {noticiasPaginadas.filter(noticia => noticia.urlToImage && noticia.title).map((noticia, index) => (
                          

                     <Card style={{ marginBottom: 15 }}>
                     <Card.Cover source={{ uri: noticia.urlToImage }} />
                     <Card.Content>
                       <Text variant="titleLarge">{noticia.title}</Text>
                       <Text variant="bodyMedium">{noticia.overview}</Text>
                       <div className="mt-auto">
                                        <Button variant="success" onPress={noticia.url}>Ver mais</Button>
                                    </div>
                     </Card.Content>
                   </Card>
                          
                 ))}
                          
         <DataTable>
          {Array.from({ length: numeroDePaginas }, (_, index) => (
            <DataTable.Pagination
              key={index + 1}
              active={index + 1 === paginaAtual}
              onClick={() => handlePaginaClicada(index + 1)}
            >
              {index + 1}
            </DataTable.Pagination>
          ))}
        </DataTable>  
                       
            
        
            </ScrollView>
        </>

    );
};

export default News;
