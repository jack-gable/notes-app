import styled from "styled-components";

export const ButtonContainer = styled.div`
	display: ${(props) => props.toggleButtonDisplay};
	text-align: right;
`;

export const StyledSubmitButton = styled.button`
	margin: 0.2em 0;
	box-sizing: border-box;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	letter-spacing: 0.01785714em;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.25rem;
	height: 36px;
	padding: 8px 24px;
	border-radius: 4px;
	border-color: transparent;
	background-color: #007bff;

	&:hover {
		filter: brightness(95%);
	}
`;

export const StyledCloseButton = styled.button`
	margin: 0.2em 0;
	box-sizing: border-box;
	color: rgba(0, 0, 0, 0.87);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	letter-spacing: 0.01785714em;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 1.25rem;
	height: 36px;
	padding: 8px 24px;
	border-radius: 4px;
	border-color: transparent !important;
	background-color: rgb(251, 251, 251);

	&:hover {
		filter: brightness(95%);
	}
`;
