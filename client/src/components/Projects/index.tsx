// Libraries
import { useQuery } from "@apollo/client";
// Components
import Spinner from "../Spinner";
import ProjectCard from "./ProjectCard.tsx";
// Types
import { Project } from "../../types";
// [GraphQL] Queries
import { GET_PROJECTS } from "../../api/queries";


function Projects() {
  const {loading, error, data} = useQuery(GET_PROJECTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>An error occurred....</p>;
  }

  return (
      <div className="row py-2">
        {data.projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
  );
}

export default Projects;