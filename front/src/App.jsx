// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { ProductProvider } from './contexts/ProductContext'
import useAuth from './hooks/useAuth';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <p className="text-4xl text-primary">Loading...</p>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-gray-200" >
      <ProductProvider>
          <AppRouter />
      </ProductProvider>
    </div>
  );
}

export default App;
