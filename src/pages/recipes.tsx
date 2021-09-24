import React from 'react';
import AllRecipies from '../components/AllRecipies';
import Layout from '../components/Layout';

function Recipes() {
  return (
    <Layout>
      <main className="container mx-auto bg-gray-100">
        <AllRecipies />
      </main>
    </Layout>
  );
}

export default Recipes;
