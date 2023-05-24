import React from "react";
import { StyledNote, NotesTitle, NotesText } from "./styles/Notes.styled";
import Toolbar from "./Toolbar";
import Modal from "./Modal";

export default function Notes({ note }) {
	const [isModalOpen, setIsModalOpen] = React.useState("");

	return (
		<>
			{isModalOpen && (
				<Modal
					className={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					title={note.title}
					text={note.text}
					id={note.id}
				/>
			)}
			<StyledNote
				style={{ backgroundColor: `${note.color}` }}
				data-id={`${note.id}`}
			>
				<NotesTitle onClick={() => setIsModalOpen("open-modal")}>
					{note.title}
				</NotesTitle>
				<NotesText onClick={() => setIsModalOpen("open-modal")}>
					{note.text}
				</NotesText>
				<Toolbar noteId={note.id} />
			</StyledNote>
		</>
	);
}
