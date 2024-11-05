import { gql } from "@apollo/client";

import { CLIENT_FIELDS } from "../fragments/clients.ts";

const GET_CLIENTS = gql`
  ${CLIENT_FIELDS}
  {
    clients {
      ...ClientFields
    }
  }
`;

export { GET_CLIENTS };
