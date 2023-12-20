// Libraries
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaUser } from "react-icons/fa";
// Types
import { Client } from "../../types";
// [GraphQL] Queries
import { GET_CLIENTS } from "../../queries";
// [GraphQL] Mutations
import { CREATE_CLIENT } from "../../mutations";


export default function CreateClient() {
  const [name, setName] = useState<string>(String());
  const [email, setEmail] = useState<string>(String());
  const [phone, setPhone] = useState<string>(String());

  const [mutate] = useMutation(CREATE_CLIENT, {
    variables: { name, email, phone },
    update: ((cache, { data: { CreateClient } }) => {
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as { clients: Client[] };
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.concat([CreateClient]) }
      });
    })
  });

  function handleSubmit($event: any) {
    $event.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill out all fields!");
    } else {
      mutate().then(() => {
        setName(String());
        setEmail(String());
        setPhone(String());
      });
    }
  }

  return (
    <>
      <button type="button" className="btn btn-secondary d-flex align-items-center" data-bs-toggle="modal"
              data-bs-target="#createClientModal">
        <FaUser className="icon" />
        Create a client
      </button>

      <div className="modal fade" id="createClientModal" aria-labelledby="createClientModalLabel"
           aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createClientModalLabel">Create a client</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={($event) => setName($event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="teemailxt"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={($event) => setEmail($event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={($event) => setPhone($event.target.value)}
                  />
                </div>
                <button type="submit" data-bs-dismiss="modal" className="btn btn-secondary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}