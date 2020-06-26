import { Alert } from "react-native";

const validate = () => {
    const validacion = false;

    Alert.alert("Confirmacion", "Estas seguro?", [
        {
            text: "Cancelar",
            style: "cancel",
        },
        {
            text: "Confirmar",
            onPress: () => {
                validacion = true;
            },
        },
    ]);

    return validacion;
};
