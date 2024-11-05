import { gql } from "@apollo/client";

const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    name
    status
  }
`;

export { PROJECT_FIELDS };
