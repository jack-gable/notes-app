import styled from "styled-components";

export const StyledModal = styled.div.attrs((props) => ({
	className: props.className,
}))`
	position: fixed;
	left: 0;
	z-index: 200;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(229, 229, 229, 0.5);
	opacity: 0;
	visibility: hidden;
	transform: scale(1.1);
	transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;

	&.open-modal {
		opacity: 1;
		visibility: visible;
		transform: scale(1);
		transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
	}
`;

export const ModalContent = styled.div`
	box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302),
		0 4px 8px 3px rgba(60, 64, 67, 0.149);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 1rem 1.5rem;
	width: 24rem;
	border-radius: 0.5rem;
`;

export const ModalTitle = styled.input`
	width: calc(100% - 10px);
	min-height: 43px;
	margin: 0 5px;
	font-weight: 500;
	line-height: 1.5rem;
	letter-spacing: 0.00625em;
	border: 0;
	overflow: hidden;
	position: relative;
	font-size: 1.375rem;
	font-weight: 400;
	line-height: 1.75rem;
	padding-bottom: 12px;
	padding-top: 16px;
`;

export const ModalText = styled.input`
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
	color: #202124;
	font-size: 14px;
	line-height: 19px;
	min-height: 46px;
	padding: 4px 16px 12px 0px;
`;

export const ModalCloseButton = styled.span`
	float: right;
	margin: 0.2em 0;
	box-sizing: border-box;
	color: rgba(0, 0, 0, 0.87);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	letter-spacing: 0.01785714em;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.25rem;
	height: 36px;
	padding: 8px 24px;
	border-radius: 4px;
	border-color: transparent !important;
	background-color: rgb(251, 251, 251);
	cursor: pointer;

	&:hover {
		background-color: rgba(95, 99, 104, 0.039);
	}
`;
