import Toast from "../../../../features/messageInScreen";

export default async (valores, clientId, agregarMedida, navigation) => {
    try {
        const { data } = await agregarMedida({
            variables: {
                height: parseInt(valores.height),
                waist: parseInt(valores.waist),
                clientId,
            },
        });

        const { message, error, success } = data.addMeasure;

        if (success) {
            navigation.navigate("HomeNavigator");
            Toast(message);
        } else {
            Toast(error);
        }
    } catch (e) {
        Toast("A ocurrido un error");
    }
};
