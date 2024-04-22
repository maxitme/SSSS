
import StyleRegistry from '@root/src/app/StyleRegistry';
import NextAuthProvider from "./NextAuthProvider"
import { getSession } from '../authNotimplementation/WithSession'
export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession()
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className="flex flex-col min-h-screen font-sans antialiased bg-gray-100 ">
        <StyleRegistry>
          <NextAuthProvider session={session}>
            <>{children}</>
          </NextAuthProvider>
        </StyleRegistry>
      </body>
    </html>
  );
}
