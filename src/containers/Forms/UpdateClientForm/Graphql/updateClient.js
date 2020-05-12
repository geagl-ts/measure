export default `
mutation updateClient($clientId: ID!, $name: String!) {
    updateClient(clientId: $clientId, newData: { name: $name }) {
        message
    }
}
`;
