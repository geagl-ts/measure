export default `
    mutation AddPhone($phone: String!, $phoneType: ID!, $client: ID!) {
        addPhone(phoneData: {
            phone: $phone,
            phoneType: $phoneType,
            client: $client
        }){
            message
        }
    }
`;
