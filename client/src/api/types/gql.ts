/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment ClientFields on Client {\n    id\n    name\n    email\n    phone\n  }\n": types.ClientFieldsFragmentDoc,
    "\n  fragment ProjectFields on Project {\n    id\n    name\n    status\n  }\n": types.ProjectFieldsFragmentDoc,
    "\n  \n  \n  query GetProject($id: ID!) {\n    project(id: $id) {\n      ...ProjectFields\n      description\n      client {\n        ...ClientFields\n      }\n    }\n  }\n": types.GetProjectDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ClientFields on Client {\n    id\n    name\n    email\n    phone\n  }\n"): (typeof documents)["\n  fragment ClientFields on Client {\n    id\n    name\n    email\n    phone\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProjectFields on Project {\n    id\n    name\n    status\n  }\n"): (typeof documents)["\n  fragment ProjectFields on Project {\n    id\n    name\n    status\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  \n  query GetProject($id: ID!) {\n    project(id: $id) {\n      ...ProjectFields\n      description\n      client {\n        ...ClientFields\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  \n  query GetProject($id: ID!) {\n    project(id: $id) {\n      ...ProjectFields\n      description\n      client {\n        ...ClientFields\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;