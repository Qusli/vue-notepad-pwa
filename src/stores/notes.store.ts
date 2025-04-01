import type { NoteType } from "@/types";

import { defineStore } from "pinia";

interface State {
    notes: {
        items: NoteType[],
        current: NoteType
    }
}

const LOCAL_STORAGE_KEYS = {
    NOTES: "notes"
}

const VALIDATE_KEYS = ["title", "content"]

export const useNotesStore = defineStore("notes-store", {
    state: (): State => ({
        notes: {
            items: [],
            current: {} as NoteType
        }
    }),
    getters: {
        notesEmpty: (state: State): boolean => {
            return state.notes.items.length === 0
        },
        currentNoteEmpty: (state: State): boolean => {
            return !state.notes.current
        }
    },
    actions: {
        init(): void {
            this.notes.items = this.getNotesWithStorage();
        },

        validate(note: NoteType): boolean {
            for (const [key, value] of Object.entries(note)) {
                for (const _key of VALIDATE_KEYS) {
                    if (key === _key && !value) return false 
                }
            }

            return true;
        },

        setCurrentNote(note: NoteType): void {
            if (this.validate(note)) return;

            this.notes.current = note;
        },

        updateNoteByUuid(uuid: string): void {
            const note: NoteType | undefined = this.notes.items.find((_note) => _note.uuid === uuid)

            if (note) {
                this.notes.current = note;
            } 
        },

        getNotesWithStorage(): NoteType[] {
            const items: string | null = localStorage.getItem(LOCAL_STORAGE_KEYS.NOTES)
            
            if (!items) {
                return []
            }

            return JSON.parse(items)
        },

        saveToStorage(note: NoteType): void {
            if (this.validate(note)) return;

            this.notes.items.push(note);

            localStorage.setItem(LOCAL_STORAGE_KEYS.NOTES, JSON.stringify(this.notes))
        },

        deleteNoteInStorage(uuid: string): void {
            const index = this.notes.items.findIndex(note => note.uuid === uuid)

            if (index > 0) {
                const notes = this.notes.items.splice(index, 1)
                
                localStorage.setItem(LOCAL_STORAGE_KEYS.NOTES, JSON.stringify(notes))
            }
        }
    }
});