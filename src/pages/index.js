import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section position="absolute">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="left"
					font="--lead"
					color="#ffffff"
				>
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section
			padding="40px 0 40px 0"
			min-height="100vh"
			lg-padding="80px 0 80px 0"
			md-padding="96px 0 96px 0"
			sm-padding="72px 0 96px 0"
			background="url(https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_3461-2.jpg?v=2023-07-18T13:58:01.645Z) 0% 0%/cover,rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Section>
					<Override slot="SectionContent" display="flex" flex="0 1 auto" />
					<Text
						margin="0px 0px 24px 0px"
						color="--light"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						text-align="center"
						width="80%"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						sm-width="100%"
						display="block"
						align-self="center"
						order="0"
					>
						Transformando momentos
						<br />
						em memórias
					</Text>
					<Text
						margin="0px 0px 32px 0px"
						color="#FFFFFF"
						font="--base"
						lg-text-align="center"
						text-align="center"
						display="block"
						max-width="700px"
						align-self="center"
					>
						Acreditamos no poder das imagens em eternizar memórias e emocionar pessoas. Com o compromisso de oferecer um serviço de qualidade excepcional, estamos empenhados em tornar cada sessão fotográfica uma experiência marcante e personalizada.
					</Text>
				</Section>
				<Link
					href="#"
					padding="12px 24px 12px 24px"
					color="--dark"
					background="--color-orange"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 0px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-orange"
					sm-margin="0px 0px 0px 0px"
					sm-text-align="center"
					hover-transition="background-color 0.2s ease-in-out 0s"
				>
					Show More
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64b69612477c3a0019b54374"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});