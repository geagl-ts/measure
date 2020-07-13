import { gql } from "apollo-boost";

export default gql`
    mutation actualizarTelefono(
        $phone: String!
        $phoneType: ID!
        $telefonoId: ID!
    ) {
        actualizarTelefono(
            datos: { phone: $phone, phoneType: $phoneType }
            telefonoId: $telefonoId
        ) {
            message
            success
            error
        }
    }
`;
