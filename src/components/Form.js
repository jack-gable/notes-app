import React from "react";
import { FormContainer, StyledForm } from "./styles/Form.styled";
import {
	ButtonContainer,
	StyledSubmitButton,
	StyledCloseButton,
} from "./styles/Button.styled";
import { StyledNoteTitle, StyledNoteText } from "./styles/Note.styled";
import { NoteContext } from "../NotesProvider";

export default function Form() {
	const {
		textDisplay,
		buttonDisplay,
		setTitle,
		setText,
		title,
		text,
		openForm,
		closeForm,
		addNote,
	} = React.useContext(NoteContext);

	function handleFormClick(event) {
		event.preventDefault();
		const hasNote = title || text;

		if (hasNote) {
			addNote({ title, text });
		} else {
			closeForm();
		}
	}

	return (
		<FormContainer>
			<StyledForm autoComplete="off" onSubmit={handleFormClick}>
				<StyledNoteTitle
					toggleDisplay={textDisplay}
					type="text"
					placeholder="Title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<StyledNoteText
					type="text"
					placeholder="Take a note..."
					value={text}
					onChange={(event) => setText(event.target.value)}
					onClick={openForm}
				/>
				<ButtonContainer toggleButtonDisplay={buttonDisplay}>
					<StyledSubmitButton type="submit">Submit</StyledSubmitButton>
					<StyledCloseButton type="button" onClick={closeForm}>
						Close
					</StyledCloseButton>
				</ButtonContainer>
			</StyledForm>
		</FormContainer>
	);
}
