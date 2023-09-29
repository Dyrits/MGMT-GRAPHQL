import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
    {
        clients {
            id
            email
            name
            phone
        }
    }
`;

export { GET_CLIENTS }