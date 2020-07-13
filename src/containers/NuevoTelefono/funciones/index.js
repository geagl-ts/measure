import Toast from "../../../features/messageInScreen";

export default {
    actualizar: async (
        telefonoId,
        valores,
        tipo,
        actualizarTelefono,
        navigation
    ) => {
        try {
            if (tipo.length === 0) {
                Toast("Seleccione un tipo");
            } else {
                const { data } = await actualizarTelefono({
                    variables: {
                        phone: valores.telefono,
                        phoneType: tipo,
                        telefonoId,
                    },
                });

                const { success, error, message } = data.actualizarTelefono;

                if (success) {
                    navigation.navigate("HomeNavigator");
                    Toast(message);
                } else {
                    Toast(error);
                }
            }
        } catch (e) {
            Toast("Esto no debio pasar, disculpe");
        }
    },
};
