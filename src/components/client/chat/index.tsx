'use client'
import { useEffect } from 'react';

export default function Chat() {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000/api/socket');
    // Send a message to the server
    setTimeout(() => {

      socket.send('Hello, server!');
    }, 3000);

    // Receive a message from the server
    socket.addEventListener('message', (event) => {
      const message = event.data;
      console.log('Received message:', message);
    });
    // ...
    return () => {
      socket.close();
    };
  }, []);

  return <>CHAT</>
}