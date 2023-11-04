import { SocketConnectionContext } from "@/store/GlobalContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

// NOTE: formatted with server type
export type LoginReq = {
  MessageType: string;
  id: string;
  pw: string;
};

export type RegisterReq = {
  MessageType: string;
  email: string;
  id: string;
  pw: string;
};

export default function useSocket() {
  const [socket, setSocket, isSocketConnected, setIsSocketConnected] = useContext(SocketConnectionContext);

  const socketInitializer = useCallback(async () => {
    console.log("Starting new connection...");
    const socket = new WebSocket("ws://localhost:8000");

    socket.addEventListener("open", (event) => {
      console.log("Server connected!");
      setSocket(socket);
      setIsSocketConnected(true);
    });
  }, [setSocket, setIsSocketConnected]);

  const requestSendMessage = (message: string) => {
    socket?.send(message);
  };

  const requestAuth = async (req: LoginReq | RegisterReq): Promise<boolean> => {
    return new Promise((resolve) => {
      if (socket) {
        socket.send(JSON.stringify(req));

        socket.addEventListener("message", (event: MessageEvent) => {
          const messageType = JSON.parse(event.data).MessageType;
          if (messageType === "success") {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } else {
        resolve(false);
      }
    });
  };

  useEffect(() => {
    if (!isSocketConnected) {
      socketInitializer();
    }
  }, [isSocketConnected, socketInitializer]);

  return {
    isSocketConnected,
    requestSendMessage,
    requestAuth
  };
}
