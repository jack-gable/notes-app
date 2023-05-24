import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledHeader, Logo, Title } from "./styles/Header.styles";

export default function Header() {
	return (
		<Container>
			<StyledHeader>
				<>
					<Logo
						src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png"
						alt="google keep icon"
					/>
					<Title>Keep</Title>
				</>
			</StyledHeader>
		</Container>
	);
}
