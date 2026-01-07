"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { conversationType } from "@/types";



interface ConversationContextType {
  conversations: conversationType[];
  loading: boolean;
  error: string | null;
  fetchConversations: () => Promise<void>;
  sendConversation: (data: conversationType) => Promise<void>;
}


const defaultContext: ConversationContextType = {
  conversations: [],
  loading: false,
  error: null,
  fetchConversations: async () => {},
  sendConversation: async () => {},
};

// -------------------- Create Context --------------------
export const ConversationContext = createContext<ConversationContextType>(
  defaultContext
);

// -------------------- Provider --------------------
interface ConversationProviderProps {
  children: ReactNode;
}

export const ConversationProvider = ({ children }: ConversationProviderProps) => {
  const [conversations, setConversations] = useState<conversationType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

  // Fetch all conversations
  const fetchConversations = async () => {
    try {
      setLoading(true);
      const res = await axios.get<conversationType[]>(`${API_BASE}/conversations`);
      setConversations(res.data);
      setError(null);
    } catch (err: unknown) {
    //   console.error(err);
        if(err instanceof Error){
      setError(err?.message || "Failed to fetch conversations");
        }
    } finally {
      setLoading(false);
    }
  };

  // Send a new conversation
  const sendConversation = async (data: conversationType) => {
    try {
      setLoading(true);
      const res = await axios.post<conversationType>(`${API_BASE}/conversations`, data);
      setConversations((prev) => [res.data, ...prev]);
      setError(null);
    } catch (err: unknown) {
    //   console.error(err);
    if(err instanceof Error){
      setError(err?.message || "Failed to send conversation");
    }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConversationContext.Provider
      value={{ conversations, loading, error, fetchConversations, sendConversation }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

// -------------------- Custom Hook --------------------
export const useConversation = () => useContext(ConversationContext);
