import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from '@/ui/mui/theme'; '../ui/mui/theme';
import { Inter } from "next/font/google";
import { TasksProvider } from '@/utils/reducers/tasks';
import { Container, CssBaseline } from '@mui/material';
import { Header } from '@/ui/components/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeTracker",
  description: "DevNotes.it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <TasksProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline />
              <Container maxWidth="md">
                {children}
              </Container>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </TasksProvider>
      </body>
    </html>
  );
}
