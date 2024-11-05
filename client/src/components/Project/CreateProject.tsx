// Libraries
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FaList } from "react-icons/fa";
// Types
import { Client, Project, Status } from "@/api/types/graphql";
// [GraphQL] Queries
import { GET_CLIENTS, GET_PROJECTS } from "@/api/queries";
// [GraphQL] Mutations
import { CREATE_PROJECT } from "@/api/mutations";
import Spinner from "@/components/Spinner";

export default function CreateProject() {
  const [name, setName] = useState<string>(String());
  const [description, setDescription] = useState<string>(String());
  const [client, setClient] = useState<string>(String());
  const [status, setStatus] = useState<Status>(Status.Inactive);

  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>An error occurred....</p>;
  }

  const [mutate] = useMutation(CREATE_PROJECT, {
    variables: { name, description, status, client },
    update: (cache, { data: { CreateProject } }) => {
      const { projects } = cache.readQuery({ query: GET_PROJECTS }) as {
        projects: Project[];
      };
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.concat([CreateProject]) }
      });
    }
  });

  function handleSubmit($event: any) {
    $event.preventDefault();
    if (!name || !description || !status || !client) {
      alert("Please fill out all fields!");
    } else {
      mutate().then(() => {
        setName(String());
        setDescription(String());
        setStatus(Status.Inactive);
        setClient(String());
      });
    }
  }

  return data && (
    <>
      <button
        type="button"
        className="btn btn-secondary d-flex align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#createProjectModal"
      >
        <FaList className="icon" />
        Create a project
      </button>

      <div
        className="modal fade"
        id="createProjectModal"
        aria-labelledby="createProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="createProjectModalLabel">
                Create a project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={$event => setName($event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={$event => setDescription($event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select className="form-select" id="status" value={status} onChange={$event => setStatus($event.target.value as Status)}>
                    <option value={Status.Inactive}>Not started</option>
                    <option value={Status.Active}>In progress</option>
                    <option value={Status.Completed}>Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Client
                  </label>
                  <select className="form-select" id="client" value={client} onChange={$event => setClient($event.target.value)}>
                    <option value={0}>---</option>
                    { data.clients.map((client: Client) =>
                      <option key={client.id} value={client.id!}>{client.name}</option>
                    )}
                  </select>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
