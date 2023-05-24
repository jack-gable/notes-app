import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export const NoteContext = React.createContext();

export default function NotesProvider({ children }) {
	const [notes, setNotes] = useLocalStorage("notes", []);
	const [title, setTitle] = React.useState("");
	const [text, setText] = React.useState("");
	const [textDisplay, setTextDisplay] = React.useState("none");
	const [buttonDisplay, setButtonDisplay] = React.useState("none");

	function openForm() {
		setTextDisplay("block");
		setButtonDisplay("block");
	}

	function closeForm() {
		setTextDisplay("none");
		setButtonDisplay("none");
		setTitle("");
		setText("");
	}

	function addNote({ title, text }) {
		const newNote = {
			title,
			text,
			color: "white",
			id: crypto.randomUUID(),
		};
		setNotes([...notes, newNote]);
		closeForm();
	}

	function deleteNote(event, id) {
		event.stopPropagation();
		setNotes(notes.filter((note) => note.id !== id));
	}

	function editNote(newTitle, newText, id) {
		setNotes(
			notes.map((note) =>
				note.id === id ? { ...note, title: newTitle, text: newText } : note
			)
		);
	}

	function editNoteColor(color, id) {
		setNotes(
			notes.map((note) => (note.id === id ? { ...note, color: color } : note))
		);
	}

	return (
		<NoteContext.Provider
			value={{
				notes,
				setNotes,
				title,
				setTitle,
				text,
				setText,
				textDisplay,
				buttonDisplay,
				openForm,
				closeForm,
				addNote,
				editNoteColor,
				editNote,
				deleteNote,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
}
