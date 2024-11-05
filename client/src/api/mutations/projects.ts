import { gql } from "@apollo/client";
import { PROJECT_FIELDS } from "@/api/fragments/projects";

const CREATE_PROJECT = gql`
    ${PROJECT_FIELDS}
    mutation ($name: String!, $description: String!, $status: Status!, $client: ID!) {
        CreateProject(name: $name, description: $description, status: $status, client: $client) {
            ...ProjectFields
        }
    }
`;

export { CREATE_PROJECT };