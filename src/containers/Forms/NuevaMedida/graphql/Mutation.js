import { gql } from "apollo-boost";

export const AGREGAR_MEDIDA = gql`
    mutation addMeasure($waist: Int!, $height: Int!, $clientId: ID!) {
        addMeasure(
            clientId: $clientId
            measures: { waist: $waist, height: $height }
        ) {
            loading
            error
            message
            success
        }
    }
`;
