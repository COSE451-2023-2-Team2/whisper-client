import { useEffect, useRef, useState } from "react";

export default function useSocket() {
  const [connected, setConnected] = useState<boolean>(false);
  const socketRef = useRef<WebSocket>();

  const socketInitializer = async () => {
    const socket = new WebSocket("ws://localhost:8000");
    socketRef.current = socket;

    socket.addEventListener("open", (event) => {
      console.log("Server connected!");
      setConnected(true);
    });

    socket.addEventListener("message", (event) => {
      console.log("Message received!", event.data);
    });

    socket.addEventListener("close", (event) => {
      console.log("Server disconnected!");
      setConnected(false);
    });

    return () => {
      socket.close();
    };
  };

  const sendMessage = (message: string) => {
    if (socketRef.current) {
      socketRef.current.send(message);
    }
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return {
    connected,
    sendMessage
  };
}
