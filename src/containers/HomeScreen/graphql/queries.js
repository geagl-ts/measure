import { gql } from "apollo-boost";

export const GET_USER = gql`
    query {
        getUser {
            loading
            userData {
                id
                clients {
                    id
                    name
                    measures {
                        id
                        height
                        waist
                    }
                    phones {
                        id
                        phone
                        isMain
                    }
                }
            }
        }
    }
`;
