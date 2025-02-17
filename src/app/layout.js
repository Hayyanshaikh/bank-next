import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from './components/ui/Navbar.js';
import Footer from './components/ui/Footer.js';

const lexend = localFont({
  src: [
    {
      path: './fonts/Lexend-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Lexend-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
