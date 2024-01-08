import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify'

function App() {
  return (
    <div className="App">
      <h1>Willkommen zu meiner React App</h1>
      {/* Weitere Komponenten und Inhalte */}
    </div>
  );
}

export default withAuthenticator(App);
