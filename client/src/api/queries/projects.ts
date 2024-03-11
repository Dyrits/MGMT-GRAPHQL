import { gql } from "@apollo/client";

import { PROJECT_FIELDS } from "../fragments/projects.ts";

const GET_PROJECTS = gql`
    ${PROJECT_FIELDS}
    {
        projects {
            ...ProjectFields
        }
    }
`;

export { GET_PROJECTS }