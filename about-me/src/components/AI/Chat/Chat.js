import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { Container } from 'react-bootstrap';
import config from './config.js';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const Chat = () => {
  return (
    <Container  className='flex center' color='blue' >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </Container>
  );
  
};

export default Chat;