import { gql } from "apollo-boost";

export const REMOVE_CLIENT = gql`
    mutation removeClient($clientId: ID!) {
        removeClient(clientId: $clientId) {
            message
            loading
        }
    }
`;
