// Libraries
import { useQuery } from "@apollo/client";
// Components
import Spinner from "@/components/Spinner";
import ClientRow from "./ClientRow";
import CreateClient from "./CreateClient.tsx";
// Types
import { Client } from "@/api/types/graphql";
// [GraphQL] Queries
import { GET_CLIENTS } from "@/api/queries";

function ClientList() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>An error occurred....</p>;
  }

  return (
    <div className="py-2">
      <div className="d-flex gap-3 mb-4">
        <CreateClient />
      </div>
      <div>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client: Client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClientList;
