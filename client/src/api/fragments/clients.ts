import { gql } from "@apollo/client";

const CLIENT_FIELDS = gql`
  fragment ClientFields on Client {
    id
    name
    email
    phone
  }
`;

export { CLIENT_FIELDS };
