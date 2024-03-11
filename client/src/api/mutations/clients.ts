import { gql } from "@apollo/client";

import { CLIENT_FIELDS } from "../fragments/clients.ts";

const DELETE_CLIENT = gql`
    ${CLIENT_FIELDS}
    mutation ($id: ID!) {
        DeleteClient(id: $id) {
            ...ClientFields
        }
    }
`;

const CREATE_CLIENT = gql`
    ${CLIENT_FIELDS}
    mutation ($name: String!, $email: String!, $phone: String!) {
        CreateClient(name: $name, email: $email, phone: $phone) {
            ...ClientFields
        }
    }
`;


export { DELETE_CLIENT, CREATE_CLIENT };