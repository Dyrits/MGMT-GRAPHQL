import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
    mutation ($id: ID!) {
        DeleteClient(id: $id) {
            id
            name
            email
            phone
        }
    }
`;


export { DELETE_CLIENT };