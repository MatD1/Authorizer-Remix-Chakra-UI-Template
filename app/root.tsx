// root.tsx
import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ChakraProvider, cookieStorageManagerSSR, extendTheme, localStorageManager } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node"; // Depends on the runtime you choose
import {
  AuthorizerProvider,
  Authorizer,
  useAuthorizer,
} from "@authorizerdev/authorizer-react";

import { ServerStyleContext, ClientStyleContext } from "./context";
import Layout from "./Components/Layout";

// Typescript
// This will return cookies
export const loader: LoaderFunction = async ({ request }) => {
  // first time users will not have any cookies and you may not return
  // undefined here, hence ?? is necessary
  return request.headers.get("cookie") ?? "";
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "EFTTools",
  viewport: "width=device-width,initial-scale=1",
});

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  const cookies = useLoaderData();
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme
  );
  return (
    <AuthorizerProvider
      config={{
        authorizerURL: "YOUR AUTHORIZER URL",
        redirectURL: "/",
        clientID: "YOUR AUTHORIZER CLIENT ID", // obtain your client id from authorizer dashboard
        //extraHeaders: 'Access-Crontol-Allow-Origin', // Optional JSON object to pass extra headers in each authorizer requests.
      }}
    >
      <Document>
        <ChakraProvider
          theme={myTheme}
          colorModeManager={
            typeof cookies === "string"
              ? cookieStorageManagerSSR(cookies)
              : localStorageManager
          }
        >
          <Layout>
            <Outlet />
          </Layout>
        </ChakraProvider>
      </Document>
    </AuthorizerProvider>
  );
}
