import React, { useEffect, useState } from "react";

import Header from "./src/components/Header";
import HomePage from "./src/screens/Homepage";
import BookDetail from "./src/screens/BookDetail";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import ModifyPage from "./src/screens/ModifyPage";
import { StyleSheet } from "react-native";

function App() {
  const Stack = createStackNavigator();

  const [books, setBooks] = useState({});

  async function loadData() {
    const res = await fetch("http://192.168.1.131:3000/books/");
    const data = await res.json();
    setBooks(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            style={style.screen}
            name="homepage"
            options={{ headerShown: false }}>
            {(props) => (
              <HomePage navigation={props.navigation} books={books} />
            )}
          </Stack.Screen>

          <Stack.Screen name="detail" options={{ headerShown: false }}>
            {(props) => (
              <BookDetail
                route={props.route}
                navigation={props.navigation}
                setBooks={setBooks}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="modifypage" options={{ headerTitle: "atras" }}>
            {(props) => (
              <ModifyPage
                route={props.route}
                navigation={props.navigation}
                setBooks={setBooks}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
  screen: {
    backgroundColor: "black",
  },
});

export default App;
