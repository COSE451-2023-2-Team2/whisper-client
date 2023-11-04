import { useEffect, useRef, useState } from "react";

// NOTE: formatted with server type

export type LoginReq = {
  id: string;
  pw: string;
};

export type RegisterReq = {
  email: string;
  id: string;
  pw: string;
};

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

  const requestSendMessage = (message: string) => {
    if (socketRef.current) {
      socketRef.current.send(message);
    }
  };

  const requestLogin = (req: LoginReq) => {
    if (socketRef.current) {
      socketRef.current.send(JSON.stringify(req));
    }
  };

  const requestRegister = (req: RegisterReq) => {
    if (socketRef.current) {
      socketRef.current.send(JSON.stringify(req));
    }
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return {
    connected,
    requestSendMessage,
    requestLogin,
    requestRegister
  };
}
