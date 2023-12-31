// Libraries
import { useQuery } from "@apollo/client";
// Components
import Spinner from "../Spinner";
import ClientRow from "./ClientRow";
import CreateClient from "./CreateClient.tsx";
// Types
import { Client } from "../../types";
// [GraphQL] Queries
import { GET_CLIENTS } from "../../queries";

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) { return <Spinner />; }
  if (error) { return <p>An error occurred....</p>; }

  return (
    <>
    <CreateClient />
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
        { data.clients.map((client : Client) => <ClientRow key={client.id} client={client} />) }
        </tbody>
      </table>
    </div>
     </>
  );
}

export default Clients;