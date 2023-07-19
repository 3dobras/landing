import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
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
		<Section
			padding="200px 0 200px 0"
			sm-padding="40px 0 40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_3461%20%281%29.jpg?v=2023-07-18T13:41:32.366Z) 50% 70%/cover"
			color="--light"
			font="--base"
		>
			<Override slot="SectionContent" sm-align-items="center" flex="0 1 auto" order="-1" />
			<Box width="100%">
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					letter-spacing="22px"
					text-transform="uppercase"
					font="100 45px/1.5 --fontFamily-sans"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					<br />
					Transformando momentos em memórias{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" margin="-16px -16px -16px -16px" flex-wrap="wrap" width="100%">
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
					align-self="auto"
					justify-content="flex-end"
				>
					<Box
						font="--lead"
						order="1"
						text-align="right"
						align-self="flex-start"
						display="inline-block"
					>
						<Text margin="0px">
							About me
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							Fotos para a sua empresa, vídeos institucionais ou de lançamento para algum momento especial da sua marca, planejando roteiro e detalhes que contarão a sua historia.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							Nós amamos festas e ter fotos especiais que registre cada momento, cada convidado de uma forma única é a melhor forma de lembrar de uma data tão importante.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					padding="16px 16px 16px 16px"
					width="25%"
					lg-width="50%"
					sm-width="100%"
				>
					<Box display="flex">
						<Text margin="0px">
							Capturamos os momentos mais incríveis em família, chá de bebê,  fotos de bodas, fotos em família, ensaio de gestante e muito mais.{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
			>
				<Image max-width="340px" src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23:20:31.207Z" md-margin="0px 0px 20px 0px" />
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Max e Maia | Fundadores
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				align-self="flex-start"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline2" md-margin="0px 0px 30px 0px">
					<br />
					<br />
					Criadores da 
3 dobras{"\n\n"}
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Uma parceria por dois apaixonados pela arte de capturar momentos especiais. Decidimos unir nossas forças e talentos para criar uma experiência fotográfica única e acessível a todos.{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section background="--color-dark" padding="120px 0 120px 0" sm-padding="40px 0">
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
		<Section
			background="linear-gradient(-90deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_0237%20%282%29.jpg?v=2023-07-19T01:27:46.550Z) 50% 50% /cover repeat scroll padding-box"
			position="static"
			top="0px"
			display="flex"
			height="auto"
			padding="54px 0 114px 0"
		>
			<Override
				slot="SectionContent"
				position="static"
				top="0px"
				bottom="0px"
				display="block"
				align-self="auto"
				flex="0 1 auto"
			/>
			<Box
				max-width="50%"
				display="block"
				position="static"
				top="0px"
				height="auto"
				overflow-x="visible"
			>
				<Text margin="90px 0px 0px 0px" color="#ffffff" font="100 26px/150% --fontFamily-sans" padding="30px 30px 30px 30px">
					Nossa missão é levar a fotografia até você de forma simples e descomplicada. Seja um casamento, uma festa de aniversário, um ensaio pessoal ou qualquer outro momento especial, estaremos lá para eternizar esses instantes preciosos.
				</Text>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/64b69612477c3a0019b54376/images/_MG_3428.jpg?v=2023-07-18T17:20:10.206Z) 0% 100% /cover repeat scroll padding-box"
			quarkly-title="Form-1"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							padding="0 0 0 64px"
							text-align="left"
						>
							<Text as="h4" margin="6px 0" font="--base" text-transform="uppercase">
								Faça um orçamento{"\n\n"}
							</Text>
							<Text as="p" margin="6px 0" font="--base">
								Ficaremos felizes em fazer parte da sua história e criar imagens que transmitam toda a essência e emoção de cada momento. Entre em contato e permita-nos ser seus contadores de histórias visuais.{"\n\n"}
							</Text>
						</Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
						>
							<Text font="--base" as="h4" margin="6px 0">
								Email us
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									hello@company.com
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							text-transform="uppercase"
						>
							<Text font="--base" as="h4" margin="6px 0">
								Siga @_3dobras_ no Instagram
							</Text>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box padding="56px 48px" margin="0 0 0 auto" md-max-width="100%" max-width="360px">
							<Text as="h3" font="--base" margin="0 0 20px 0" text-transform="uppercase">
								Deixe a sua mensagem
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Name
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Message
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="--color-dark">
												Send
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
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