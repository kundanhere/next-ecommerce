"use client";

import Cookies from "js-cookie"; // js-cookie helps to access cookies in client components
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { createContext, ReactNode } from "react";

// Get the refreshToken for each, when user visits the website without logging in
// so that they can add a products in cart.
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
    //   currentCart, // Uncomment if you want to use the currentCart store
  },
  auth: OAuthStrategy({
    // provide wix client id
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: {
        value: "",
        expiresAt: 0,
      },
    },
  }),
});

export type WixClient = typeof wixClient;

// Create a context for the WixClient
export const WixClientContext = createContext<WixClient>(wixClient);

// Wrap the application with the WixClientContextProvider
export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
