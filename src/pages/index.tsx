import { Temp } from "../components/Temp";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

Cookies.set("authToken", "your-jwt-token1", {
  expires: 7,
  sameSite: "none",
  secure: true,
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URI,
  credentials: "include",
});

const authLink = setContext((_, { headers }: any) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const customCookie = "customToken=12345";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Cookie: customCookie,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function Home() {
  // @ts-ignore
  fetch(process.env.NEXT_PUBLIC_TEMP_URI, { mode: "no-cors" });
  fetch("/api/hello", { credentials: "include" });
  return (
    <ApolloProvider client={client}>
      <div>Hello World</div>
      <Temp />
    </ApolloProvider>
  );
}
