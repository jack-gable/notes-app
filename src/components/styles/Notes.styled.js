import styled from "styled-components";

export const NoteContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StyledNote = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 16px;
	width: 250px;
	background-color: #fff;
	border-color: #e0e0e0;
	border: 1px solid #d3d3d3;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	border-radius: 8px;
	transition-duration: 0.218s;
	transition-property: background, border, opacity, box-shadow, transform;
	transition-timing-function: ease-in;

	&:hover {
		box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
			0 1px 3px 1px rgba(60, 64, 67, 0.149);
	}
`;

export const NotesTitle = styled.div`
	padding-top: 12px;
	letter-spacing: 0.00625em;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5rem;
	min-height: 38px;
	padding: 16px 16px 0 16px;
	transition: background-color 0.218s ease-in;
	box-sizing: border-box;
	font-variant-ligatures: none;
	outline: none;
	white-space: pre-wrap;
	word-wrap: break-word;
`;

export const NotesText = styled.div`
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.5rem;
	min-height: 30px;
	letter-spacing: 0.01428571em;
	padding: 4px 16px 12px 16px;
	box-sizing: border-box;
	font-variant-ligatures: none;
	outline: none;
	white-space: pre-wrap;
	word-wrap: break-word;
`;
