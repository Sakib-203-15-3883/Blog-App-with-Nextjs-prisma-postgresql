//The global state contains information shared by all components in the application such as the authentication status of a user

"use client";


import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";


import { useSession } from "next-auth/react";

import Spinner from "@/components/spinner";
// import { Blog, BlogFormData } from "@/utils/types";
// import { initialBlogFormData } from "@/utils";
// import { usePathname, useRouter } from "next/navigation";




//A TypeScript type called ContextType is defined. This type is used to specify the shape of the context data

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
//   formData: BlogFormData;
//   setFormData: Dispatch<SetStateAction<BlogFormData>>;
//   searchQuery: string;
//   setSearchQuery: Dispatch<SetStateAction<string>>;
//   searchResults: Blog[];
//   setSearchResults: Dispatch<SetStateAction<Blog[]>>;
};





const initialState = {
  loading: false,
  setLoading: () => {},
//   formData: initialBlogFormData,
//   setFormData: () => {},
//   searchQuery: "",
//   setSearchQuery: () => {},
//   searchResults: [],
//   setSearchResults: () => {},
};







export const GlobalContext = createContext<ContextType>(initialState);


// ReactNode {type}  means that it can hold any React element, an array of React elements, or a string, number, or boolean.

//ReactNode is useful when you want to specify that a prop or variable can hold any type of content that can be rendered by React, but you don't want to specify a more specific type. For example, you might use ReactNode when you want to allow a prop to hold a string, a number, an element, or an array of elements.

export default function GlobalState({ children }: { children: ReactNode }) {

  const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState(initialBlogFormData);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState<Blog[]>([]);
  const { data: session } = useSession();
//   const pathname = usePathname();
//   const router = useRouter();

  if (session === undefined) return <Spinner />;

//   if (session === null && pathname === "/create") router.push("/");

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        // formData,
        // setFormData,
        // searchQuery,
        // setSearchQuery,
        // searchResults,
        // setSearchResults,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}