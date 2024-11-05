import type { CodegenConfig } from "@graphql-codegen/cli";

const configuration: CodegenConfig = {
  schema: "http://localhost:5000/graphql",
  documents: "./src/api/**/*.ts",
  generates: {
    "./src/api/types/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql"
      }
    }
  }
};

export default configuration;
