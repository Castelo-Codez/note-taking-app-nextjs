"use client";
import React, {createContext, useContext, useState} from "react";

export type Note = {
    id: string;
    title: string;
    createdAt: string;
    archived: string;
    body: string;
    tags: string[];
};

export const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [notes, setNewNotes] = useState<Note[]>([]);
    const [currentRoute, setNewCurrentRoute] = useState<string>("all notes");
    const [currentRouteIndex, setNewCurrentRouteIndex] = useState<number>(0);
    const [searchKeyword, setNewsearchKeyword] = useState("");
    return (
        <GlobalStateContext.Provider
            //@ts-expect-error
            value={{
                notesHandler: {notes, setNewNotes},
                currentRouteHandler: {currentRoute, setNewCurrentRoute},
                CurrentRouteIndexHandler: {
                    currentRouteIndex,
                    setNewCurrentRouteIndex,
                },
                searchKeywordHandler: {searchKeyword, setNewsearchKeyword},
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
