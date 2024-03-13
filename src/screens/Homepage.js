import {
  Image,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Boton from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";
const URL = "http://192.168.1.131:3000/books/";

const HomePage = ({ navigation, books }) => {
  return Object.keys(books).length === 0 ? (
    <Text>cargando..</Text>
  ) : (
    <ScrollView>
      {books?.data.map((book) => (
        <View style={style.container} key={book.id}>
          <Text style={style.texttitle}>{book.title}</Text>
          <Text style={style.textauthor}>{book.author}</Text>
          <Boton
            text="Ver más"
            onPress={() => {
              navigation.navigate("detail", {
                id: book.id,
              });
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 30,
    margin: 20,
    flex: 0.8,
    alignItems: "center",
    backgroundColor: "#00013f1c",
    borderRadius: 20,
  },

  texttitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textauthor: {
    fontSize: 16,
  },
});

export default HomePage;
