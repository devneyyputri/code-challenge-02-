// app/providers.js
"use client";

import { Cacheprovider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
    return (
        <Cacheprovider>
            <ChakraProvider>{children}</ChakraProvider>
        </Cacheprovider>
    );
}