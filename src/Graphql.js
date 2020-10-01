import { gql } from "apollo-boost";

export const Query = {
    TRAER_CLIENTES: gql`
        query {
            getUser {
                userData {
                    id
                    clients {
                        id
                        name
                    }
                }
            }
        }
    `,
};
