import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Boton from "../components/Button";
import deleteBookFetch from "../services/deleteBookFetch";

const BookDetail = ({ navigation, route, setBooks }) => {
  const id = route.params.id;
  const URL = `http://192.168.1.131:3000/books/${id}`;

  const [bookbyid, setBookbyid] = useState({});

  async function loadData() {
    const res = await fetch(URL);
    const data = await res.json();
    setBookbyid(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const deletePost = async (id) => {
    const json = await deleteBookFetch(id);

    setBooks(json);
  };

  return Object.keys(bookbyid).length === 0 ? (
    <Text>cargando..</Text>
  ) : (
    <>
      <View style={style.view}>
        <Text style={style.texttitle}>{bookbyid.data.title}</Text>
        <Text style={style.textauthor}>{bookbyid.data.author}</Text>
        <Text style={style.textsynopsis}>{bookbyid.data.synopsis}</Text>
      </View>
      <View style={style.boton}>
        <Boton
          text="Borrar"
          onPress={() => {
            deletePost(bookbyid.data.id);

            navigation.navigate("homepage");
          }}
        />
        <Boton
          text="Modificar"
          onPress={() =>
            navigation.navigate("modifypage", {
              bookbyid: bookbyid,
            })
          }
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 0.6,
    backgroundColor: "white",
    margin: 20,
    padding: 30,
    justifyContent: "space-around",
  },

  texttitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },

  textauthor: {
    fontSize: 20,
    color: "white",
    backgroundColor: "gray",
    alignSelf: "center",
    padding: 10,
  },

  textsynopsis: {
    fontSize: 18,
  },

  boton: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default BookDetail;
