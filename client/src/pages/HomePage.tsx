import ClientList from "@/components/Client/ClientList";
import ProjectList from "@/components/Project/ProjectList";

function HomePage() {
  return (
    <>
      <ClientList />
      <hr />
      <ProjectList />
    </>
  );
}

export default HomePage;
