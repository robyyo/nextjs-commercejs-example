import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Cabinet of Curiosities',
    description: 'Find the most interesting items from around the world.',
  };

const MainLayout = ({ children }) => {
    return (
      <html lang='en'>
        <body>
          <main>{children}</main>
        </body>
      </html>
    );
  };
  
  export default MainLayout;