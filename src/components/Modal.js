import React from "react";
import {
	StyledModal,
	ModalContent,
	ModalText,
	ModalTitle,
	ModalCloseButton,
} from "./styles/Modal.styled";
import { NoteContext } from "../NotesProvider";

export default function Modal({ className, setIsModalOpen, title, text, id }) {
	const [modalTitle, setModalTitle] = React.useState(title);
	const [modalText, setModalText] = React.useState(text);
	const { editNote } = React.useContext(NoteContext);

	return (
		<StyledModal className={className}>
			<ModalContent>
				<ModalTitle
					placeholder="Title"
					type="text"
					value={modalTitle}
					onChange={(event) => setModalTitle(event.target.value)}
				/>
				<ModalText
					placeholder="Take a note..."
					type="text"
					value={modalText}
					onChange={(event) => setModalText(event.target.value)}
				/>
				<ModalCloseButton
					onClick={() => {
						setIsModalOpen("");
						editNote(modalTitle, modalText, id);
					}}
				>
					Close
				</ModalCloseButton>
			</ModalContent>
		</StyledModal>
	);
}
