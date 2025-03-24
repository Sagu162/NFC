import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-landing">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
