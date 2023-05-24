import styled from "styled-components";

export const NotesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StyledNoteTitle = styled.input`
	display: ${(props) => props.toggleDisplay};
	width: calc(100% - 10px);
	min-height: 43px;
	margin: 0 5px;
	padding: 10px 10px;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5rem;
	border: 0;

	&:focus {
		outline: none;
	}
`;

export const StyledNoteText = styled.input`
	display: block;
	width: calc(100% - 10px);
	min-height: 43px;
	margin: 0 5px;
	padding: 10px 10px;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5rem;
	letter-spacing: 0.00625em;
	border: 0;
	overflow: hidden;
	position: relative;

	&:focus {
		outline: none;
	}
`;
