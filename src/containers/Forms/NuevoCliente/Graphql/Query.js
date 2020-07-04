import { gql } from "apollo-boost";

export const GET_USUARIO_TELEFONOS = gql`
    query {
        getUser {
            userData {
                id
            }
        }
        getPhoneTypes {
            types {
                id
                type
            }
        }
    }
`;
