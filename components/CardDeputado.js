import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import cardDeputadoStyles from "../styles/cardDeputadoStyles";


const CardDeputado = () => {

    const type = infos.type != null ? infos.type : infos.types[0]?.type?.name
    const image = infos.icon != null ? infos.icon : infos.sprites.other.home.front_default


  return (
    <View style={[cardDeputadoStyles.card]}>
      <Image
        style={cardDeputadoStyles.image}
        resizeMode="contain"
        source={{uri: image}}
      />
         <Text style={cardDeputadoStyles.title}>{infos.name.toUpperCase()}</Text>
      
    </View>
  )
}

export default CardDeputado