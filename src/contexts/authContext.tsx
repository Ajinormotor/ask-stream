import { createContext, PropsWithChildren, useContext } from "react";


type AuthContextType = {
  logIn: (email: string, password: string) => Promise<LoginResponse | void>;
};


interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: PropsWithChildren) => {
  const logIn = async (email: string, password: string): Promise<LoginResponse | void> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data: LoginResponse = await res.json();
      console.log("Login success:", data);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const values: AuthContextType = { logIn };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};


export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
