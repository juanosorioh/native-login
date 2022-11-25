import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Button } from "react-native";

const Anuncios = ({ navigation }) => {
  const [datosJ, setDatosJ] = useState(null);

  const carga = (async) => {
    try {
      const datos = fetch(
        "http://localhost:4000/administrativos/mostrarAnuncios"
      )
      const datosJson = datos.json();
      setDatosJ(datosJson.anuncios);
    } catch (error) {
      console.log(error, "falló");
    }
  };

  useEffect(() => {
    carga();
  }, []);

  return (
    <View>
      <Box>
        <Text>
          {datosJ ? (datosJ.map((element) => {
            <Box>
              <Text>{element.autor.nombre}</Text>
              <Text>{element.autor.apellido}</Text>
              <Text>{element.materias}</Text>
              <Text>{element.comentarios.map((element2)=> element2.comentarios)}</Text>
            </Box>;
          })): (null)}
        </Text>
      </Box>
      {/* <Button
        title="ir a pestaña 1"
        onPress={() => navigation.navigate("Form")}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
};
export default Anuncios;
