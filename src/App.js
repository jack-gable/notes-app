import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Form from "./components/Form";
import Placeholder from "./components/Placeholder";
import Notes from "./components/Notes";
import { NoteContainer } from "./components/styles/Notes.styled";
import { NoteContext } from "./NotesProvider";

const theme = {};

function App() {
	const { notes } = React.useContext(NoteContext);
	const hasNotes = notes.length > 0;

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Form />
				{hasNotes ? (
					<NoteContainer>
						{notes.map((note) => (
							<Notes key={note.id} note={note} />
						))}
					</NoteContainer>
				) : (
					<Placeholder />
				)}
			</>
		</ThemeProvider>
	);
}

export default App;
