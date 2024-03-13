import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Boton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    color: "#FFF",
  },

  btn: {
    backgroundColor: "#0000FF",
    color: "#FFF",
    padding: 15,
    margin: 20,
    borderRadius: 10,
  },
});

export default Boton;
