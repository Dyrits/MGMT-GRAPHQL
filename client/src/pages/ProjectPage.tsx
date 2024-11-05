// Libraries
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
// Components
import Spinner from "@/components/Spinner";
import ClientInfo from "@/components/Client/ClientInfo.tsx";
// Types
import { Project } from "@/api/types/graphql";
// [GraphQL] Queries
import { GET_PROJECT } from "@/api/queries/projects";

function ProjectPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>An error occurred....</p>;
  }

  const project: Project = data?.project;

  return (
    <>
      <div className="mx-auto-w-75 card p-5">
        <Link to={`/`} className="btn btn-light btn-sm w-25 d-inline ms-auto">
          Back
        </Link>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <h5 className="mt-3">Project status</h5>
        <p>{project.status}</p>
        <div className="mt-5">
          <ClientInfo client={project.client!} />
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
