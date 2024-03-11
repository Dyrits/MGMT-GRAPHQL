// Libraries
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// Components
import Header from "./components/Header";
import Clients from "./components/Clients";
import Projects from "./components/Projects";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <Clients />
        <Projects />
      </div>
    </ApolloProvider>
  );
}

export default App;
