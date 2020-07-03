import { gql } from "apollo-boost";

export const OBTENER_USUARIO = gql`
    query {
        getUser {
            userData {
                id
                email
            }
        }
    }
`;
