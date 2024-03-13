import { Text, View, ScrollView, TextInput, StyleSheet } from "react-native";
import Boton from "../components/Button";
import { useState } from "react";

const ModifyPage = ({ navigation, route, setBooks }) => {
  const { bookbyid } = route.params;

  const [newbook, setNewbook] = useState({
    title: bookbyid.title,
    author: bookbyid.author,
    synopsis: bookbyid.synopsis,
  });
  const handleChangeBook = (name, text) => {
    setNewbook({
      ...newbook,
      [name]: text,
    });
  };

  const changeBook = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://192.168.1.131:3000/books/${bookbyid.data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newbook),
      }
    );

    const data = await response.json();
    setBooks(data);

    if (response.ok) {
      return { success: true, message: "Cambio realizado con éxito", response };
    }
  };

  return (
    <ScrollView>
      <Text style={style.text}>Modifica tu libro: {bookbyid.data.title}</Text>
      <View style={style.form}>
        <View style={style.textarea}>
          <TextInput
            placeholder="Título"
            onChangeText={(text) => handleChangeBook("title", text)}
            value={newbook.title}
          />
        </View>
        <View style={style.textarea}>
          <TextInput
            placeholder="Autor"
            onChangeText={(text) => handleChangeBook("author", text)}
            value={newbook.author}
          />
        </View>
        <View style={style.textarea}>
          <TextInput
            placeholder="Sinopsis"
            multiline
            maxLength={1000}
            onChangeText={(text) => handleChangeBook("synopsis", text)}
            value={newbook.synopsis}
          />
        </View>
      </View>
      <Boton
        text="Modificar Campo"
        onPress={(id) => {
          changeBook(id);
          navigation.navigate("homepage");
        }}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  form: {
    borderRadius: 3,
    color: "#999",
    fontSize: 0.8,
    padding: 20,
    margin: 30,
    width: 500,
    alignSelf: "center",
  },
  textarea: {
    padding: 15,
    backgroundColor: "white",
    margin: 10,
  },
});

export default ModifyPage;
