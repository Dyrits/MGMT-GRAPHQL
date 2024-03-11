import { Project } from "../../types";

function ProjectCard({project}: { project: Project }) {
  return <div className="col-md-4">
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.status}</p>
        <a href={`/projects/${project.id}`} className="btn btn-light">View</a>
      </div>
    </div>
  </div>;
}

export default ProjectCard;