import './globals.css';
import { Providers } from './providers';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barrel',
  description: 'Greasing the Wheels of Business Spend & Procurement',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link href='/assets/barrel-tab-logo.svg' rel='icon' />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
