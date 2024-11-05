// Libraries
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
// Types
import { Client } from "@/api/types/graphql";
// [GraphQL] Queries
import { GET_CLIENTS } from "@/api/queries";
// [GraphQL] Mutations
import { DELETE_CLIENT } from "@/api/mutations";

function ClientRow({ client }: { client: Client }) {
  const [mutate] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { DeleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as {
        clients: Client[];
      };
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter(client => client.id !== DeleteClient.id)
        }
      });
    }
  });

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete client: ${client.name}?`)
    ) {
      mutate().then(() => {
        console.log("Client deleted successfully!");
      });
    }
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export default ClientRow;
