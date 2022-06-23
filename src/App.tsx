import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { Router } from './Router';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { client } from './lib/apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <BrowserRouter>
        <div className=" pt-28">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}
