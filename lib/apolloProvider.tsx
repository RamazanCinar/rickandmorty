"use client";

import { ApolloProvider } from "@apollo/client";

import { client } from "./apolloClient";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ApolloWrapper({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
