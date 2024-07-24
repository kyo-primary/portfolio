import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-3xl mb-4">Welcome to My Portfolio</h2>
        <p>This is a portfolio created using Next.js, React (TypeScript), and Tailwind CSS.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
