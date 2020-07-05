import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Linking,
} from "react-native";
import { Header, SubHeader } from "../components";

import { List, ContentItemList } from "../components/ListComponents";

const ModalDeCliente = ({ data, navigation }) => {
    const [active, setActive] = useState(false);

    const cerrarModal = () => {
        setActive(!active);
    };

    const agregarTelefono = () => {
        setActive(!active);
        navigation.navigate("FormularioTelefono", { clientid: data.id });
    };

    return (
        <>
            <Modal animationType="fade" transparent={true} visible={active}>
                <VistaDelModal>
                    {/* Exit button */}
                    <ContenedorDeBotonSalir>
                        <BotonDeSalir onSubmit={cerrarModal} />
                    </ContenedorDeBotonSalir>
                    {/* data */}
                    <ContenedorDeDatos>
                        <Header>Nombre</Header>
                        <SubHeader>{data.name}</SubHeader>
                        <Header>Telefonos</Header>
                        <ListaTelefonos
                            telefonos={data.phones}
                            onSubmit={agregarTelefono}
                        />
                        <Header>Medidas</Header>
                        <ListaMedidas medidas={data.measures} />
                    </ContenedorDeDatos>
                </VistaDelModal>
            </Modal>
            <VistaAntesDelModal
                data={data}
                onSubmit={() => {
                    setActive(true);
                }}
            />
        </>
    );
};

const VistaDelModal = ({ children }) => (
    <View style={styles.centeredView}>
        <View
            style={{
                ...styles.modalView,
            }}
        >
            {children}
        </View>
    </View>
);

const ContenedorDeBotonSalir = ({ children }) => (
    <View
        style={{
            ...styles.buttonContainer,
        }}
    >
        {children}
    </View>
);

const ContenedorDeDatos = ({ children }) => (
    <View
        style={{
            ...styles.dataContainer,
        }}
    >
        {children}
    </View>
);

const BotonDeSalir = ({ onSubmit }) => (
    <TouchableOpacity
        activeOpacity={0.6}
        style={{
            ...styles.exitButton,
        }}
        onPress={onSubmit}
    >
        <Text
            style={{
                ...styles.exitButtonText,
            }}
        >
            X
        </Text>
    </TouchableOpacity>
);

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const MAIN_PHONE = gql`
    query getMainPhone($clientId: ID!) {
        getMainPhone(clientId: $clientId) {
            phone {
                phone
            }
        }
    }
`;

const VistaAntesDelModal = ({ data, onSubmit }) => {
    const { loading, data: mainPhone } = useQuery(MAIN_PHONE, {
        variables: { clientId: data.id },
    });

    if (loading) {
        return (
            <TouchableOpacity
                style={{ width: "100%" }}
                activeOpacity={0.5}
                onPress={onSubmit}
            >
                <Text
                    style={[
                        { color: "#2ba6ff", marginHorizontal: 5 },
                        {
                            fontSize: 30,
                            fontWeight: "bold",
                            marginTop: 2,
                            textAlign: "center",
                        },
                    ]}
                >
                    {data.name}
                </Text>
            </TouchableOpacity>
        );
    } else {
        const { getMainPhone } = mainPhone;

        return (
            <TouchableOpacity
                style={{ width: "100%" }}
                activeOpacity={0.5}
                onPress={onSubmit}
            >
                <Text
                    style={[
                        { color: "#2ba6ff", marginHorizontal: 5 },
                        {
                            fontSize: 30,
                            fontWeight: "bold",
                            marginTop: 2,
                            textAlign: "center",
                        },
                    ]}
                >
                    {data.name}
                </Text>
                <ExtraData
                    title="Telefono"
                    description={getMainPhone.phone.phone}
                />
            </TouchableOpacity>
        );
    }
};

const ListaTelefonos = ({ telefonos, onSubmit }) => {
    const Items = ({ item }) => (
        <View key={item.id}>
            <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                    Linking.openURL(`tel:${item.phone}`);
                }}
            >
                <ContentItemList bold={true}>{item.phone}</ContentItemList>
            </TouchableOpacity>
            <ContentItemList>
                {item.isMain ? "Principal" : "Normal"}
            </ContentItemList>
        </View>
    );

    return (
        <List data={telefonos} accionNuevo={onSubmit}>
            <Items />
        </List>
    );
};

const ListaMedidas = ({ medidas }) => {
    const Items = ({ item }) => (
        <View key={item.id}>
            <ContentItemList bold={true}>
                Alt: {item.height} {"\t\t"}
                Cin:{item.waist}
            </ContentItemList>
            <ContentItemList>
                {item.isMain ? "Actual" : "Anterior"}
            </ContentItemList>
        </View>
    );

    return (
        <List
            data={medidas}
            accionNuevo={() => {
                console.log("fui presionado en medidas");
            }}
        >
            <Items />
        </List>
    );
};

const ExtraData = ({ title, description, dosPuntos }) => {
    return (
        <View
            style={{
                marginTop: 4,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={[
                    { color: "#2ba6ff", marginHorizontal: 5 },
                    { fontSize: 22, fontWeight: "700" },
                ]}
            >
                {title} {dosPuntos ? ":" : ""}
            </Text>
            <Text
                style={[
                    { color: "#2ba6ff", marginHorizontal: 5 },
                    { fontSize: 20 },
                ]}
            >
                {description}
            </Text>
        </View>
    );
};

export default ModalDeCliente;

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        height: "92%",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    exitButton: {
        backgroundColor: "#2ba6ff",
        textAlignVertical: "center",
        height: 39,
        width: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    exitButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        textAlignVertical: "center",
        marginBottom: 1,
    },
    dataContainer: {
        position: "relative",
        height: "86%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        position: "absolute",
        top: 10,
        right: 15,
    },
});
