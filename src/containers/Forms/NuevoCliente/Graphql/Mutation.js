import { gql } from "apollo-boost";

// Nuevo cliente
export const AGREGAR_NUEVO_CLIENTE = gql`
    mutation addClient(
        $name: String!
        $user: ID!
        $height: Int!
        $waist: Int!
        $phone: String!
        $phoneType: ID!
    ) {
        addClient(
            input: {
                name: $name
                user: $user
                measures: { height: $height, waist: $waist }
                phone: { phone: $phone, phoneType: $phoneType }
            }
        ) {
            message
            success
            loading
        }
    }
`;
