"use client";
import {useRouter as Route} from "next/navigation";
import {useRouter as Router} from "next/router";
import React, {createContext, useContext, useState} from "react";

export type Note = {
    id: string;
    title: string;
    createdAt: string;
    archived: string;
    body: string;
    tags: string[];
};

import {useRef} from "react";

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

    function GoToRootUrl() {
        const route = Route();
        const router = Router();
        const url = router.pathname;
        const baseUrl = url.replace(
            /^(http:\/\/localhost:3000(?:\/[^/]+)*)\/.*/,
            "$1"
        );
        return route.replace(baseUrl);
    }
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
                GoToRootUrl,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
