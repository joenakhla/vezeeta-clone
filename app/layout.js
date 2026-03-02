import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Vezeeta Clone - Book Your Doctor',
  description: 'Find and book the best doctors near you. Healthcare booking platform for testing Zoho Flow integrations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

    <script>window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}</script><script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siq8263b309495b54b189c0cd864b1a611bb88a012ae2562f1d8a6e8be3d8ea6f41" defer></script>
      </body>
    </html>
  );
}

