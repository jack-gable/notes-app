import styled from "styled-components";

export const StyledToolbar = styled.div`
	opacity: 0;
	flex-direction: row-reverse;
	align-items: center;
	color: rgba(0, 0, 0, 0.54);
	display: flex;
	font-size: 12px;
	line-height: 26px;
	margin: 4px 0;
	position: relative;
	transition: opacity 0.218s ease-in-out, background-color 0.218s ease-in-out,
		box-shadow 0.218s ease-in-out;

	&:hover {
		opacity: 1;
	}
`;

export const ToolbarColor = styled.svg`
	height: 20px;
	margin: 0 8px;
	width: 20px;
	margin: 0 3px;
	cursor: pointer;
	color: #202124;
	opacity: 0.71;
`;

export const ToolbarDelete = styled.svg`
	height: 20px;
	margin: 0 8px;
	width: 20px;
	margin: 0 3px;
	cursor: pointer;
	color: #202124;
	opacity: 0.71;
`;
