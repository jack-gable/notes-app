import React from "react";
import { StyledTooltip, ColorOption } from "./styles/ColorTooltip.styled";
import { ToolbarColor } from "./styles/Toolbar.styled";
import * as Tooltip from "@radix-ui/react-tooltip";
import { NoteContext } from "../NotesProvider";

export default function ColorTooltip({ noteId }) {
	const { editNoteColor } = React.useContext(NoteContext);
	return (
		<div>
			<Tooltip.Provider delayDuration={400}>
				<Tooltip.Root>
					<Tooltip.Trigger asChild>
						<ToolbarColor
							data-id={`${noteId}`}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fillRule="evenodd"
								d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z"
								clipRule="evenodd"
							/>
						</ToolbarColor>
					</Tooltip.Trigger>
					<Tooltip.Portal>
						<StyledTooltip
							className="TooltipContent"
							sideOffset={5}
							side="bottom"
							onClick={(event) => {
								const color = event.target.dataset.color;
								editNoteColor(color, noteId);
							}}
						>
							<ColorOption data-color="#fff" option="#fff" />
							<ColorOption data-color="#d7aefb" option="#d7aefb" />
							<ColorOption data-color="#fbbc04" option="#fbbc04" />
							<ColorOption data-color="#a7ffeb" option="#a7ffeb" />
							<Tooltip.Arrow className="TooltipArrow" />
						</StyledTooltip>
					</Tooltip.Portal>
				</Tooltip.Root>
			</Tooltip.Provider>
		</div>
	);
}
