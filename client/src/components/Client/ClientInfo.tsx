import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

import { Client } from "@/api/types/graphql";

function ClientInfo({ client }: { client: Client }) {
  return (
    <>
      <h5>Client information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="me-2" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="me-2" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="me-2" />
          {client.phone}
        </li>
      </ul>
    </>
  );
}

export default ClientInfo;
