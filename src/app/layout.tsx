import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Linguistas - Aprenda Idiomas com Personalidades Históricas',
  description: 'Plataforma de aprendizado de idiomas com figuras históricas inspiradoras, tornando seu estudo uma jornada emocionante.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        </head>
        <body className={inter.className}>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
