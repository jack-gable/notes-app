import styled from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";

export const StyledTooltip = styled(Tooltip.Content)`
	border-bottom: 2px solid #fff;
	background: #fff;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	padding: 5px 7px 3px;
	width: 136px;
	height: 40px;
	justify-content: space-between;
`;

export const ColorOption = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid #dedede;
	background-color: ${({ option }) => option};

	&:hover {
		border: 1px solid black;
	}
`;
