import { gql } from "apollo-boost";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            message
            loading
            user {
                token
            }
        }
    }
`;

export const REGISTRO = gql`
    mutation register($email: String!, $password: String!) {
        register(input: { email: $email, password: $password }) {
            message
            loading
        }
    }
`;
