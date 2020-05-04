import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header, SubHeader } from "../components";

import { List, ContentItemList } from "../components/ListComponents";

const ModalDeCliente = ({ data }) => {
    const [active, setActive] = useState(false);

    return (
        <>
            <Modal animationType="fade" transparent={true} visible={active}>
                <VistaDelModal>
                    {/* Exit button */}
                    <ContenedorDeBotonSalir>
                        <BotonDeSalir
                            onSubmit={() => {
                                setActive(!active);
                            }}
                        />
                    </ContenedorDeBotonSalir>
                    {/* data */}
                    <ContenedorDeDatos>
                        <Header>Nombre</Header>
                        <SubHeader>{data.name}</SubHeader>
                        <Header>Telefonos</Header>
                        <ListaTelefonos telefonos={data.phones} />
                        <Header>Medidas</Header>
                        <ListaMedidas medidas={data.medidas} />
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

const VistaAntesDelModal = ({ data, onSubmit }) => (
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
        <ExtraData title="Telefono" description="9711053131" />
    </TouchableOpacity>
);

const ListaTelefonos = ({ telefonos }) => {
    const Items = ({ item }) => (
        <>
            <ContentItemList bold={true}>{item.phone}</ContentItemList>
            <ContentItemList>
                {item.isMain ? "Principal" : "Normal"}
            </ContentItemList>
        </>
    );

    return (
        <List data={telefonos}>
            <Items />
        </List>
    );
};

const ListaMedidas = ({ medidas }) => {
    const Items = ({ item }) => (
        <>
            <ContentItemList bold={true}>
                Alt: {item.medida.altura} {"\t\t"}
                Cin:{item.medida.cintura}
            </ContentItemList>
            <ContentItemList>
                {item.isMain ? "Actual" : "Anterior"}
            </ContentItemList>
        </>
    );

    return (
        <List data={medidas}>
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
