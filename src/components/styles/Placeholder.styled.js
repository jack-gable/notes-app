import styled from "styled-components";

export const PlaceholderContainer = styled.div`
	margin-top: 10vh;
	display: ${({ showPlaceholder }) => showPlaceholder || "flex"};
	align-items: center;
	flex-direction: column;
`;

export const PlaceholderLogo = styled.svg`
	height: 120px;
	margin: 20px;
	opacity: 0.1;
	width: 120px;
`;

export const PlaceholderText = styled.p`
	color: #80868b;
	cursor: default;
	font-size: 1.375rem;
	font-weight: 400;
	line-height: 1.75rem;
`;
