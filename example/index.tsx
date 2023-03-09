import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbBotao, Card } from '../.';

const App = () => {
  return (
    <div>
      <Card>
        <p>Olá conteúdo</p>
      </Card>
      <AbBotao texto='Click me!' onClick={() => alert('Hi!!!')} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
