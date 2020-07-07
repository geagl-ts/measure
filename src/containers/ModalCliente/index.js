import React from "react";
import { Modal, Linking } from "react-native";

import fun from "./funciones";
import {
    ModalCliente,
    VistaPrevia,
    BotonSalir,
    Informacion,
    Dato,
    ListaTelefonos,
    ListaMedidas,
} from "./componentes";

export default function index({ navigation: { navigate }, cliente, ...props }) {
    const modalState = React.useState(false);

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalState[0]}
            >
                <ModalCliente>
                    <BotonSalir onSubmit={fun.cerrarModal(modalState)} />
                    <Informacion>
                        <Dato label="nombre" valor={cliente.name} />
                        <Dato
                            label="Telefonos"
                            btnLabel="Agregar"
                            callback={fun.agregarTelefono(
                                navigate,
                                modalState,
                                cliente.id
                            )}
                        >
                            <ListaTelefonos
                                telefonos={cliente.phones}
                                clienteId={cliente.id}
                                navigate={navigate}
                                modalState={modalState}
                            />
                        </Dato>
                        <Dato label="Medidas">
                            <ListaMedidas medidas={cliente.measures} />
                        </Dato>
                    </Informacion>
                </ModalCliente>
            </Modal>
            <VistaPrevia
                cliente={cliente}
                onSubmit={fun.abrirModal(modalState)}
            />
        </>
    );
}
