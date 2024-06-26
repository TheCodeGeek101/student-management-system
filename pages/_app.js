import { MaterialTailwindControllerProvider } from '@/context/Admin/Index';
import '@/styles/globals.css';

import { ThemeProvider } from '@material-tailwind/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
                    <Component {...pageProps} />
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </>
  );
}
