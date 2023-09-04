import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Icon, Text, LinkBox, Section, Strong, Button, Span, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia, Formspree } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { GiFairyWings } from "react-icons/gi";
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
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-3" background="#002A3A">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Image
				src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16:11:42.573Z"
				display="inline-block"
				width="50px"
				height="50px"
				align-self="center"
				min-width="fit-content"
				min-height="initial"
				order="-1"
				srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			/>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="600 16px sans-serif"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
						<Override slot="link-cases" color="--darkL2">
							Cases
						</Override>
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section
			padding="200px 0 200px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_3461%20%281%29.jpg?v=2023-07-18T13:41:32.366Z) 50% 70%/cover"
			color="--light"
			font="--base"
			display="inline-block"
		>
			<Override
				slot="SectionContent"
				sm-align-items="center"
				flex="1 1 0%"
				order="-1"
				align-self="center"
			/>
			<Image
				src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16:11:42.573Z"
				display="inline-block"
				height="90px"
				align-self="center"
				min-width="fit-content"
				min-height="initial"
				order="-1"
				width="90px"
				srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box width="100%">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="20px"
					text-transform="uppercase"
					font="100 38px/1.5 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					<br />
					Transformando momentos em memórias{"\n\n"}
				</Text>
				<Button
					position="absolute"
					background="#ffffff"
					color="#000000"
					left="675px"
					right="auto"
					width="151.475px"
					bottom="auto"
					height="40px"
					top="647px"
				>
					<Strong>
						Saiba mais!
					</Strong>
				</Button>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" font="16px sans" background="--color-lightD1">
			<Override slot="SectionContent" align-items="center" background="rgba(0, 0, 0, 0)" />
			<Text
				as="h2"
				font="100 38px/1.5 --fontFamily-sans"
				md-font="--headline2"
				margin="20px 0 0 0"
				text-transform="uppercase"
			>
				3 dobras
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Uma parceria por dois apaixonados pela arte de capturar{" "}
				<br />
				momentos especiais. Decidimos unir nossas forças e talentos para criar uma{" "}
				<br />
				experiência fotográfica única e acessível a todos.{"\n\n\n\n"}
			</Text>
			<Button font="--lead" margin="20px" background="#000000">
				Espia só
			</Button>
		</Section>
		<Section background="--color-dark" padding="120px 0 120px 0" sm-padding="40px 0" display="none">
			<Box margin="-16px -16px -16px -16px" padding="16px 16px 16px 16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box
						background="url(https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8631.jpg?v=2023-07-18T20:21:14.789Z) 70% 50%/cover"
						padding="0px 0px 672px 0px"
						margin="0px -112px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						sm-padding="0px 0px 400px 0px"
					/>
				</Box>
				<Box width="50%" display="block" padding="0 0 0 0px" lg-width="100%">
					<Box
						padding="30px 64px 30px 64px"
						background="rgba(22, 22, 22, 0.94)"
						margin="136px 0px 0 8px"
						display="flex"
						flex-direction="column"
						color="#e2a97e"
						lg-margin="0px 0px 0px 0px"
						lg-width="100%"
						sm-padding="64px 32px 64px 32px"
						text-shadow="-4px 3px 5px rgba(0, 0, 0, 0.2)"
						align-self="center"
					>
						<Text
							as="h1"
							margin="0 0 16px 0"
							font="100 60px/1.2 --fontFamily-sans"
							lg-font="--headline2"
							letter-spacing="initial"
							text-transform="uppercase"
							text-align="right"
							width="auto"
						>
							Fotografia
							<br />
							que capta sua Personalidade{"\n\n"}
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="0px 0px 0px 0"
						display="flex"
						position="relative"
						justify-content="flex-end"
					>
						<Text
							as="p"
							margin="16px 0"
							font="normal 300 18px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							color="#a4a4a4"
							display="block"
							text-align="right"
							align-self="flex-end"
							padding="0px 0px 0px 0"
							max-width="400px"
						>
							{" "}Queremos registrar os grandes momentos da sua vida de maneira autêntica, capturando cada detalhe e emoção com excelência.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-13" background="--color-lightD1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="16px 16px 16px 16px"
				lg-order="-2"
				lg-width="100%"
				width="100%"
				margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				flex-direction="column"
				display="flex"
			>
				<Box
					overflow-x="hidden"
					position="relative"
					hover-transform="translateY(-10px)"
					width="100%"
					height="auto"
					overflow-y="hidden"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					padding="0px 0px 70% 0px"
				>
					<Image
						position="absolute"
						display="block"
						width="100%"
						left={0}
						bottom="0px"
						min-height="100%"
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20:51:20.427Z"
						object-fit="cover"
						top="auto"
						right={0}
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_8575%20%281%29.jpg?v=2023-07-18T20%3A51%3A20.427Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				flex-direction="column"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				lg-width="100%"
				sm-margin="0px 0px 0px 0px"
				display="flex"
				width="40%"
				align-items="flex-start"
			>
				<Box
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					padding="0px 0px 60% 0px"
					width="100%"
					height="auto"
					overflow-x="hidden"
					overflow-y="hidden"
					position="relative"
					hover-transform="translateY(-10px)"
				>
					<Image
						width="100%"
						right={0}
						min-height="100%"
						top="auto"
						left={0}
						bottom="0px"
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17:11:54.147Z"
						object-fit="cover"
						position="absolute"
						display="block"
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237.jpg?v=2023-07-18T17%3A11%3A54.147Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-direction="row"
				flex-wrap="wrap"
				width="60%"
				lg-width="100%"
				lg-order="-1"
			>
				<Box
					display="flex"
					align-items="flex-start"
					lg-width="100%"
					sm-margin="0px 0px 0px 0px"
					width="100%"
					flex-direction="column"
					lg-align-items="center"
					lg-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					padding="8px 16px 8px 16px"
				>
					<Text
						lg-text-align="center"
						sm-font="--headline3"
						sm-margin="0px 0px 20px 0px"
						margin="0px 0px 0px 0px"
						color="--darkL2"
						font="--headline2"
						md-text-align="left"
					>
						<Span
							font-weight="normal"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							FOTOGRAFIA
QUE CAPTA SUA PERSONALIDADE
						</Span>
					</Text>
				</Box>
				<Box
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					lg-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					width="50%"
					flex-direction="column"
					padding="16px 16px 16px 16px"
					display="flex"
					sm-margin="0px 0px 0px 0px"
				>
					<Text
						margin="0px 0px 0px 0px"
						color="--darkL1"
						font="--base"
						lg-text-align="center"
						sm-margin="0px 0px 30px 0px"
						md-text-align="left"
					>
						Buscamos{" "}
						<Strong>
							registrar
						</Strong>
						{" "}os grandes momentos{" "}
						<Strong>
							da sua vida
						</Strong>
						{" "}de maneira autêntica, capturando cada detalhe e emoção com excelência.{" \n\n\n\n"}
					</Text>
				</Box>
				<Box
					lg-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					padding="16px 16px 16px 16px"
					display="flex"
					lg-align-items="center"
					align-items="flex-start"
					lg-width="100%"
					sm-margin="0px 0px 0px 0px"
					width="50%"
					flex-direction="column"
					lg-padding="0px 16px 16px 16px"
				>
					<Text
						lg-text-align="center"
						sm-margin="0px 0px 30px 0px"
						margin="0px 0px 0px 0px"
						color="--darkL1"
						font="--base"
						md-text-align="left"
					>
						Capturar momentos especiais compartilhados com cada pessoa de uma forma{" "}
						<Strong>
							única
						</Strong>
						{" "}é a melhor forma de se lembrar das datas mais{" "}
						<Strong>
							importantes.{"\n\n\n\n"}
						</Strong>
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" lg-padding="80px 0 80px 0" background="--color-lightD1" quarkly-title="Content-15">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				justify-content="space-around"
				lg-flex-direction="column"
				flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					lg-width="100%"
					display="flex"
					flex-direction="row"
					justify-content="center"
					lg-margin="0px 0px 50px 0px"
					margin="0px 0px 35px 0px"
					sm-flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15:35:17.383Z"
						display="block"
						object-fit="cover"
						margin="0px 5px 0px 0px"
						width="26%"
						sm-width="100%"
						sm-margin="0 0 10px 0"
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164751__MG_6437.jpg?v=2023-08-08T15%3A35%3A17.383Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Image
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15:35:49.824Z"
						display="block"
						object-fit="cover"
						margin="0px 0px 0px 5px"
						width="37%"
						sm-width="100%"
						sm-margin="0 0 10px 0"
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164533__MG_6432.jpg?v=2023-08-08T15%3A35%3A49.824Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Image
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15:36:50.319Z"
						display="block"
						object-fit="cover"
						margin="0px 0px 0px 5px"
						width="37%"
						sm-width="100%"
						sm-margin="0px 0px 0px 0"
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/20230121164213__MG_6428.jpg?v=2023-08-08T15%3A36%3A50.319Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="center"
					lg-padding="0px 0px 0px 0"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 25px 0px"
						font="normal 300 18px/1.5 --fontFamily-sans"
						color="#474e53"
						text-align="left"
						max-width="640px"
					>
						Nossa{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							missão
						</Strong>
						{" "}é levar a fotografia até você de forma{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							simples
						</Strong>
						{" "}e{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							descomplicada
						</Strong>
						. Seja um casamento, uma festa de aniversário, um ensaio pessoal ou qualquer outro momento especial, estaremos lá para eternizar esses instantes preciosos.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-7" background="--color-lightD1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				lg-width="100%"
				margin="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				flex-direction="column"
			>
				<Box
					overflow-x="hidden"
					transform="translateY(0px)"
					padding="0px 0px 100% 0px"
					width="100%"
					overflow-y="hidden"
					position="relative"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					height="auto"
				>
					<Image
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16:01:25.270Z"
						object-fit="cover"
						position="absolute"
						width="100%"
						bottom={0}
						display="block"
						top={0}
						left={0}
						right={0}
						min-height="100%"
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/7-20230225111705__MG_7624.jpg?v=2023-08-08T16%3A01%3A25.270Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				flex-wrap="wrap"
				flex-direction="row"
				lg-align-items="center"
				padding="4px 4px 4px 4px"
				lg-order="1"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				display="flex"
				width="50%"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
			>
				<Box width="50%" padding="12px 12px 12px 13px" display="flex">
					<Box
						width="100%"
						height="auto"
						position="relative"
						transition="transform 0.2s ease-in-out 0s"
						margin="0px 0px 0px 0px"
						overflow-x="hidden"
						overflow-y="hidden"
						transform="translateY(0px)"
						hover-transform="translateY(-10px)"
						padding="0px 0px 100% 0px"
					>
						<Image
							top="auto"
							left={0}
							right={0}
							bottom="0px"
							display="block"
							object-fit="cover"
							position="absolute"
							width="100%"
							min-height="100%"
							src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15:39:06.185Z"
							srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/11-20230429110955__MG_1046.jpg?v=2023-08-08T15%3A39%3A06.185Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
				<Box padding="12px 12px 12px 12px" display="flex" width="50%">
					<Box
						transition="transform 0.2s ease-in-out 0s"
						hover-transform="translateY(-10px)"
						position="relative"
						transform="translateY(0px)"
						overflow-x="hidden"
						overflow-y="hidden"
						margin="0px 0px 0px 0px"
						padding="0px 0px 100% 0px"
						width="100%"
						height="auto"
					>
						<Image
							bottom="0px"
							src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16:01:30.810Z"
							position="absolute"
							top="auto"
							left={0}
							min-height="100%"
							object-fit="cover"
							display="block"
							width="100%"
							right={0}
							srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/8-20230225111723__MG_7626.jpg?v=2023-08-08T16%3A01%3A30.810Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
				<Box width="50%" padding="12px 12px 12px 12px" display="flex">
					<Box
						margin="0px 0px 0px 0px"
						padding="0px 0px 100% 0px"
						transition="transform 0.2s ease-in-out 0s"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						transform="translateY(0px)"
						hover-transform="translateY(-10px)"
						width="100%"
					>
						<Image
							object-fit="cover"
							display="block"
							top="auto"
							right={0}
							bottom="0px"
							min-height="100%"
							src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16:01:37.178Z"
							position="absolute"
							width="100%"
							left={0}
							srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/36-_MG_9886.jpg?v=2023-08-08T16%3A01%3A37.178Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
				<Box width="50%" padding="12px 12px 12px 12px" display="flex">
					<Box
						position="relative"
						hover-transform="translateY(-10px)"
						padding="0px 0px 100% 0px"
						transform="translateY(0px)"
						transition="transform 0.2s ease-in-out 0s"
						margin="0px 0px 0px 0px"
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
					>
						<Image
							src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16:01:52.674Z"
							position="absolute"
							display="block"
							top="auto"
							left={0}
							min-height="100%"
							object-fit="cover"
							width="100%"
							right={0}
							bottom="0px"
							srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/40-_MG_9936.jpg?v=2023-08-08T16%3A01%3A52.674Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</Box>
			</Box>
			<Box
				width="100%"
				align-items="flex-start"
				lg-align-items="center"
				sm-margin="0px 0px 20px 0px"
				display="flex"
				flex-direction="column"
				lg-width="100%"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 16px"
				lg-padding="0px 16px 16px 16px"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--darkL2"
					font="--base"
					lg-text-align="center"
					width="60%"
					lg-width="100%"
					md-text-align="left"
				>
					Transformamos a visão de sua empresa em{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						imagens cativantes
					</Strong>
					. Planejamos cuidadosamente cada detalhe para garantir que{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						sua história seja
					</Strong>
					{" "}contada de forma{" "}
					<Strong>
						autêntica
					</Strong>
					{" "}e{" "}
					<Strong>
						envolvente
					</Strong>
					.{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section background="--color-dark" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box font="12px sans-serif">
						<Text
							font="--base"
							color="#ffffff"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Solicite um orçamento
						</Text>
						<Text
							font="normal 150 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
							max-width="500px"
							margin="10px 0 0 0"
							text-align="left"
							color="#ffffff"
						>
							Ficaremos felizes em fazer parte da sua história, transmitindo{" "}
							<br />
							toda a essência e emoção de cada momento. Entre em contato{" "}
							<br />
							e permita-nos ser seus contadores de histórias visuais.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button>
										Enviar
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 30px 0" background="--color-dark" quarkly-title="Footer-18" height="min-content">
			<Override slot="SectionContent" align-items="center" />
			<Box
				display="block"
				margin="0px 0px 30px 0px"
				md-margin="0px 0px 45px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-margin="0px 0px 0 0px"
				align-items="flex-start"
				justify-content="center"
			>
				<LinkBox
					width="18%"
					lg-margin="0px 0px 35px 0px"
					lg-width="40%"
					sm-width="100%"
					href="#"
					align-items="stretch"
					justify-content="center"
					align-content="space-around"
				>
					<Image
						src="https://uploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16:11:42.573Z"
						display="block"
						align-self="flex-start"
						width="70px"
						srcSet="https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/64b69612477c3a0019b54376/images/Group%204.png?v=2023-08-08T16%3A11%3A42.573Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</LinkBox>
			</Box>
			<Box
				display="flex"
				justify-content="flex-end"
				border-color="#232a44"
				md-flex-direction="column"
				lg-padding="30px 0px 0px 0px"
				md-padding="0 0px 0px 0px"
				text-align="right"
				align-content="flex-start"
			>
				<Text margin="0px 0px 0px 0px" font="--base" color="#c3c8d0">
					© 2023 Company, Inc. All rights reserved.
				</Text>
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