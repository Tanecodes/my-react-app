import Message from './Message';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Message title= "welcome!" body="this is a message component"/>
      <Greeting  name= "Tanecodes"/>
    </div>
  );
};

export default App;