import React from 'react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

import UploadForm from './UploadForm.js'

const link = createUploadLink({
  uri: "http://localhost:4000/graphql"
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
    <UploadForm />
    </ApolloProvider>
  );
}

export default App;
