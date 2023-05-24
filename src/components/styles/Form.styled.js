import styled from "styled-components";

export const FormContainer = styled.div`
	border-radius: 8px;
	border: 0.5px solid #d3d3d3;
	box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
		0 2px 6px 2px rgba(60, 64, 67, 0.149);
	margin: 32px auto 16px auto;
	max-width: 496px;
	transition-duration: 0.218s;
	transition-property: background, border, opacity, box-shadow, transform;
	transition-timing-function: ease-in;
`;

export const StyledForm = styled.form`
	position: relative;
	border: none;
	margin: 1px;
	border-radius: 8px;
	transition-duration: 0.218s;
	transition-property: background, border, opacity, box-shadow, transform;
	transition-timing-function: ease-in;

	&:focus {
		outline: none;
	}
`;
