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

import {useRef} from "react";

export const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    function ClearNoteChanges() {
        isNoteChange.current.title.old = "";
        isNoteChange.current.title.new = "";
        isNoteChange.current.tag.old = "";
        isNoteChange.current.tag.new = "";
        isNoteChange.current.subject.old = "";
        isNoteChange.current.subject.new = "";
    }

    const isNoteChange = useRef({
        title: {
            old: "",
            new: "",
        },
        tag: {
            old: "",
            new: "",
        },
        subject: {
            old: "",
            new: "",
        },
    });
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
                isNoteChange,
                ClearNoteChanges,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);
