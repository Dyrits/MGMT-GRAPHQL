import { gql } from "@apollo/client";

import { PROJECT_FIELDS } from "../fragments/projects.ts";
import { CLIENT_FIELDS } from "../fragments/clients.ts";

const GET_PROJECTS = gql`
  ${PROJECT_FIELDS}
  {
    projects {
      ...ProjectFields
    }
  }
`;

const GET_PROJECT = gql`
  ${PROJECT_FIELDS}
  ${CLIENT_FIELDS}
  query GetProject($id: ID!) {
    project(id: $id) {
      ...ProjectFields
      description
      client {
        ...ClientFields
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
