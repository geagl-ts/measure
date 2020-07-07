import { gql } from "apollo-boost";

export const ELIMINAR_TELEFONO = gql`
    mutation eliminarTelefono($telefonoId: ID!, $clienteId: ID!) {
        eliminarTelefono(telefonoId: $telefonoId, clienteId: $clienteId) {
            message
            loading
            success
            error
        }
    }
`;
