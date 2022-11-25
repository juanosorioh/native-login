import React, { useEffect, useState } from 'react'
import { Button, View, FormControl } from 'react-native'

import {
 // FormControl,
  Stack,
  Box
} from "native-base";
import { TextInput } from 'react-native-web';

const Formulario = () => {
    const [datos2, setDatos] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [password, setPassword] = useState(null);
    
  /* ------------------------------ */
  
  
    const carga = async () => {
      try {
        const api = await fetch(
          "http://localhost:4000/administrativos/mostrarAlumnosActivos"
          );
          const datos = await api.json();
          console.log(datos.alumnos);
          setDatos(datos.alumnos);
        } catch (error) {
          console.log(error);
        }
      };
      
        useEffect(() => {
          carga();
        }, []);
  
        useEffect(() => {
          console.log(datos2)
          console.log(typeof datos2)
        }, [datos2]);
  
        /* ---------------------------------------- */
  
    const validar = () => {
      if (usuario.length == "" || password.length == "") {
        if (usuario.length == "") {
          alert("falta el usuario");
        }
        if (password.length == "") {
          alert("falta el password");
        }
  
        return false;
      }
        const searchUsuario = datos2.find(element => 
          element.nombre == usuario
          )
        const searchApellido = datos2.find(element => 
          element.apellido == password
          )
  
        if (!searchUsuario) {
          alert("usuario no encontrado")
          return false
        }
        if (!searchApellido) {
          alert("apellido no encontrado")
          return false
        }
      return true;
  
    };
  
    const nuevaPagina = ()=>{
      if(!validar()){
        alert("no valido")
        return false
      }
      alert("validado")
      return true
    }
  
    return (
      <View>
              <Box alignItems="center">
        <Box w="100%" maxWidth="300px">
          <FormControl isRequired>
            <Stack mx="4">
              <FormControl.Label>usuario</FormControl.Label>
              <TextInput
                type="text"
                defaultValue=""
                placeholder="Nombre"
                onChangeText={(value) => setUsuario(value)}
              />
              <FormControl.Label>password</FormControl.Label>
              <TextInput
                type="text"
                defaultValue=""
                placeholder="Apellido"
                onChangeText={(value) => setPassword(value)}
              />
            </Stack>
            <Box alignItems="center">
              <Button onPress={() => nuevaPagina()}>enviar</Button>
            </Box>
            ;
          </FormControl>
        </Box>
      </Box>
      </View>
    );
  };
export default Formulario