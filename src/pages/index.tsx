"use client";
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
import Frame, {
  FrameContext,
  FrameComponentProps,
} from "react-frame-component";

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

const getInitialContent = () => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, viewport-fit=cover, initial-scale=1, shrink-to-fit=no" />
  </head>
  <body>
    <div class="frame-root"></div>
  </body>
</html>
`;

export default function Home() {
  const initialContent = React.useMemo(() => getInitialContent(), []);
  // @ts-ignore
  // fetch(process.env.NEXT_PUBLIC_TEMP_URI, { mode: "no-cors" });
  // fetch("/api/hello", { credentials: "include" });
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>(undefined);

  // React.useEffect(() => {
  //   const timeoutId = setTimeout(() => setError("error"), 10000);
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);
  return (
    <ApolloProvider client={client}>
      <div>Hello World1</div>
      <Frame initialContent={initialContent} mountTarget=".frame-root">
        <div>Hello World</div>
        <iframe
          src="/api/run"
          height="550px"
          width="500px"
          // style={{ visibility: isLoaded ? "visible" : "hidden" }}
        />
      </Frame>
    </ApolloProvider>
  );
}
