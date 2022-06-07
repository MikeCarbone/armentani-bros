import { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Fade from 'react-reveal/Fade'

import LoadingCover from '../components/LoadingCover'
import VertSpace from '../components/VertSpace'
import Heading from '../components/Heading'
import ImageGallery from 'react-image-gallery'
import handleLowPower from '../lib/handleLowPower'

const border = '1px solid #111'
const thickness = '50px'

export default function Home() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		handleLowPower()

		setTimeout(() => {
			setLoading(false)
		}, 500)

		setTimeout(() => {
			document.getElementById('bg-video').play()
		}, 1000)

	}, [])

  	return (
		<>
			<div className="hidden-ux">
				<LoadingCover loading={loading} />
				<video id="bg-video" poster="/vegas2.jpg" className="media" autoPlay={true} loop={true} muted={true} src="/watts-trimmed-min.mp4" playsInline={true} default-muted="true" />
				<img id="bg-img" className="media" src="/vegas2.jpg" width="100vw" height="100vh" alt="" />

				<div className="cover"></div>
				<Borders />
			</div>
			<header className="cont">
				<div className="content">
					<img className="logo" src="/logo.png" draggable={false} alt="Armentani Brothers" />
					<nav className="links">
						<a className="links__link" href="#connect">CONNECT</a>
						<a className="links__link" href="#tour-dates">TOUR DATES</a>
						<a className="links__link" href="#bio">BIO</a>
						<a className="links__link" target="_blank" rel="noopener noreferrer" href="https://teflonphl.com/collections/armentani-bros-x-teflondesign?ltclid=68f3ea4e-5cf9-43b8-97c2-e454323dcd78">MERCH</a>
						<a className="links__link" href="#media">MEDIA</a>
					</nav>
				</div>
			</header>

			<Content>
				<Videos />
				<Songkick />
				<Stream />
				<Bio />
				<Bros />
				<Media />
			</Content>
			<Footer />
			<style jsx>{`
				.media {
					height: 100vh;
					object-fit: cover;
					object-position: center;
					margin: 0 auto;
					overflow: hidden;
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}

				.cover {
					height: 100vh;
					width: 100vw;
					position: absolute;
					top: 0;
					left: 0;
					background-color: black;
					opacity: .7;
				}

				.content {
					margin: 0 auto;
					position: absolute;
					z-index: 75;
					top: 25vh;
					width: 100%;
				}

				.cont {
					height: 100vh;
				}

				.logo {
					width: 80%;
					max-width: 700px;
					margin: 0 auto;
					display: block;
				}

				.links {
					display: flex;
					justify-content: center;
					margin: 50px 0;
					width: 100%;
				}

				.links__link {
					color: #b3b3b3;
					margin: 10px 25px;
					letter-spacing: 1.2px;
					transition: all .2s ease-in;
					text-align: center;
					font-weight: 200;
				}

				.links__link:hover {
					color: #fff;
					transition: all .2s ease-in;
				}

				.video-full {
					width: 100vw;
				}

				#bg-img {
					display: none;
				}

				@media (max-width: 700px) {
					.links {
						flex-direction: column;
					}
				}

			`}</style>
		</>
  	)
}


const Borders = () => {

	return (
		<>
			<div className="border-hor b1">
				<div className="logos">
					<Logos />
				</div>
			</div>
			<div className="border-hor b2"></div>
			<div className="border-ver b3"></div>
			<div className="border-ver b4"></div>
			<style jsx>{`
				.logos {
					align-items: center;
					display: flex;
					justify-content: center;
					margin: 0 auto;
					width: 80%;
				}

				p {
					color: white;
					text-align: center;
				}

				.border-hor {
					background-color: black;
					height: ${thickness};
					position: fixed;
					width: 100vw;
					z-index: 100;
				}

				.border-ver {
					background-color: black;
					height: 100vh;
					width: ${thickness};
					position: fixed;
					z-index: 100;
				}

				{/* top */}
				.b1 {
					top: 0;
					left: 0;
					border-bottom: ${border};
				}

				{/* bottom */}
				.b2 {
					bottom: 0;
					border-top: ${border};
				}

				{/* right */}
				.b3 {
					right: 0;
					border-left: ${border};
				}

				{/* left */}
				.b4 {
					left: 0;
					border-right: ${border};
				}

				@media (max-width: 700px) {
					.border-hor {
						height: 50px;
					}

					.border-ver {
						width: 15px;
					}
				}
			`}</style>
		</>
	)
}

const Logos = ({
	size = '22px',
	scSize = '20px',
	color = '#737373',
	delay = 1500,
	spread = '15px 11px'
}) => {

	return (
		<>
			<Fade delay={delay}>
				<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thearmentanibros/">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/1ifSYnQGu4FBmo7ZU5UBej">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ArmentaniBros/">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ArmentaniBros">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/armentani-brothers">
					<svg className="sc" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<title>SoundCloud</title>
						<path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952"/>
					</svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCf-hxXPcf_VSn0nyvMD6njg">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/armentanibrothers">
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>
				</a>
			</Fade>
			<style jsx>{`
				svg {
					fill: ${color};
					height: ${size};
					margin: ${spread};
					transition: all .15s ease-in;
				}

				.sc {
					height: ${scSize};
				}

				svg:hover {
					fill: #fff;
					transition: all .15s ease-in;
				}
			`}</style>
		</>
	)
}

const Content = ({ children }) => {

	return (
		<>
			<main className="wrapper">
				{children}
			</main>
			<style jsx>{`
				.wrapper {
					max-width: 1400px;
					margin: 0 auto;
					min-height: 200px;
				}
			`}</style>
		</>
	)
}

const Bros = () => {

	return (
		<Section id="the-boys" title="MEET THE BOYS">
			<div className="bro-cont">
				<Fade>
					<div className="bro">
						<img className="bro__img" src="/jimmie.jpg" alt="Jimmie"></img>
						<div className="label">
							<Heading level={2}>JIMMIE</Heading>
						</div>
					</div>
				</Fade>
				<Fade>
					<div className="bro">
						<img className="bro__img" src="/george.jpg" alt="George"></img>
						<div className="label">
							<Heading level={2}>GEORGE</Heading>
						</div>
					</div>
				</Fade>
				<Fade>
					<div className="bro">
						<img className="bro__img" src="/john.jpg" alt="John"></img>
						<div className="label">
							<Heading level={2}>JOHN</Heading>
						</div>
					</div>
				</Fade>
			</div>
			<style jsx>{`

				.bro-cont {
					display: flex;
					justify-content: space-between;
					width: 100%;
				}

				.bro {
					width: 32%;
					height: 500px;
					transition: all .1s ease-in-out;
				}

				.bro:hover {
					width: 35%;
					transition: all .1s ease-in-out;
				}

				.bro__img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
				}

				.label {
					background-color: black;
					border: ${border};
				}

				@media (max-width: 700px) {
					.bro-cont {
						flex-direction: column;
					}

					.bro {
						width: 100%;
						height: 30%;
						margin: 25px 0 0 0;
					}

					.bro:hover {
						width: 100%;
					}
				}
			`}</style>
		</Section>
	)
}

const Stream = () => {

	return (
		<>
			<Section id="connect" title="CONNECT">
				<div className="logo-cont">
					<Logos size="50px" scSize="85px" delay={0} spread="35px 35px" />
				</div>
			</Section>
			<style jsx>{`
				.logo-cont {
					align-items: center;
					display: flex;
					justify-content: center;
					margin: 0 auto;
					width: 80%;
					flex-wrap: wrap;
				}
			`}</style>
		</>
	)
}


const Bio = () => {
	return (
		<>
			<Section id="bio" title="BIO">
				<Fade>
					<div className="cont">
						<div>
							<Copy>
								The Armentani Brothers are a DJ trio from the City of Brotherly Love. Their musical passion started from a young age, playing multiple instruments such as the piano, guitar, drums and many others. All of the brothers started as individual artists and performers before combining into a trio. John and Jimmie were inspired by their older brother George when he took over the Philadelphia EDM scene by storm in his early college years. 
							</Copy>
							<Copy>
								Together, they have headlined numerous shows, packing clubs and venues all over the United States. Previously, they have played alongside artists such as Steve Aoki, Kaskade, Two Friends, Galantis, W&W and many other familiar names in the EDM scene. 
							</Copy>
							<Copy>
								Their hit debut single, &quot;Next to You&quot;, has amassed over 500,000 streams across various platforms and has been supported by artists such as Disco Fries, Tony Arzadon, and Maria Zouroudis.
							</Copy>
							<Copy>
								&quot;Next to You&quot; was followed by their second successful single, &quot;Better Than This&quot; featuring Zoobstool. Amassing over 400,000 streams across various platforms and being played at live shows across the country time and time again. 
							</Copy>
							<Copy>
								They look forward to releasing a ton of music and creative content for everyone soon!
							</Copy>
						</div>
						<img className="bio__img" src="/behind.jpg" alt="Armentani Brothers" />
					</div>
				</Fade>
			</Section>
			<style jsx>{`

				.cont {
					align-items: top;
					display: flex;
					justify-content: space-evenly;
				}

				.bio__img {
					display: block;
					object-fit: cover;
					object-position: center;
					width: 45%;
					max-height: 400px;
					margin: 15px 0 0 0;
				}

				@media (max-width: 700px) {
					.cont {
						flex-direction: column;
					}

					.bio__img {
						margin: 25px 0;
						width: 100%;
					}
				}
			`}</style>
		</>
	)
}


const Media = () => {
	const height = '650px'
	const images = ['/vegas1.jpg', '/vegas2.jpg', '/vegas3.jpg', '/vegas4.jpg', '/trio1.jpg', '/trio2.jpg', '/trio3.jpg', '/trio4.jpg', '/trio5.jpg', '/trio6.jpg'].map(i => {
		return {
			original: i,
			thumbnail: i,
			originalHeight: height,
			thumbnailAlt: ""
		}
	})

	return (
		<>
			<Section id="media" title="MEDIA">
				<ImageGallery
					thumbnailPosition="bottom"
					items={images}
					showPlayButton={false}
					autoPlay={false}
					slideDuration={750}
					showFullscreenButton={false}
				/>
				<style jsx>{`
				`}</style>
			</Section>
		</>
	)
}

const Footer = () => {

	return (
		<>
			<VertSpace />
			<VertSpace />
			<footer>
				<Copy fontSize="0.9rem" textAlign="center" color="#b3b3b3">&copy; {new Date().getFullYear()} The Armentani Brothers</Copy>
				<div className="logo-cont">
					<Logos delay={0} />
				</div>
				<style jsx>{`
					footer {
						border-top: ${border};
					}

					.logo-cont {
						align-items: center;
						display: flex;
						justify-content: center;
						margin: 0 auto;
						width: 100%;
						flex-wrap: wrap;
					}
				`}</style>
			</footer>
		</>
	)
}

const Copy = ({
	children,
	fontSize = '1rem',
	textAlign = 'left',
	color = '#f2f2f2',
	margin = '15px auto'
}) => {
	return (
		<>
			<p>{children}</p>
			<style jsx>{`
				p {
					color: ${color};
					margin: ${margin};
					letter-spacing: 1px;
					transition: all .2s ease-in;
					font-size: ${fontSize};
					font-weight: 200;
					max-width: 500px;
					line-height: 1.5;
					text-align: ${textAlign};
				}
			`}</style>
		</>
	)
}

const Section = ({ children, id = '', title = '' }) => {
	return (
		<>
			<div id={id} className="cont">
				{
					title &&
					<Fade>
						<Heading>{title}</Heading>
					</Fade>
				}
				<VertSpace big />
				{children}
				<VertSpace />
				<VertSpace />
				<VertSpace />
				<VertSpace />
			</div>
			<style jsx>{`
				.cont {
					padding: 0 ${thickness};
				}

				@media (max-width: 700px) {
					.cont {
						padding: 0 15px;
					}
				}
			`}</style>
		</>
	)
}


const Videos = () => {
	const [active, setActive] = useState({})

	useEffect(() => {
		setActive(sources[0])
	}, [])

	const sources = [
		{
			src: './concourse.mp4',
			title: 'Concourse',
			thumbnail: '/concourse-poster.png',
			defaultSelected: true,
			key: 1
		},
		{
			src: './warehouse.mp4',
			title: 'Warehouse on Watts',
			thumbnail: '/warehouse-poster.png',
			defaultSelected: false,
			key: 2
		},
		{
			src: './noto.mov',
			title: 'Headline at NOTO',
			thumbnail: '/noto-poster.png',
			defaultSelected: false,
			key: 3
		},
		{
			src: './roar-1.mov',
			title: 'ROAR Headline Sellout',
			thumbnail: '/roar-poster.png',
			defaultSelected: false,
			key: 4
		}
	]
	return (
		<>
			<Section title="Videos">
				<div className="cont">
				{ sources.map(s => (
					<img key={s.key} alt={`Play video ${s.key}`} className={`poster ${active.key === s.key ? 'selected' : ''}`} onClick={() => setActive(s)} src={s.thumbnail} />
				)) }
				</div>
				<Fade>
					<h2>{active.title}</h2>
					<video className="video" src={active?.src} autoPlay loop controls muted playsInline />
				</Fade>
			</Section>
			<style jsx>{`
				.cont {
					display: flex;
					justify-content: space-between;
					width: 100%;
					max-width: 750px;
					margin: 0 auto;
				}

				.poster {
					cursor: pointer;
					width: 24%;
					padding: 5px;
					border-radius: 5px;
				}

				.video {
					margin: 25px 0;
					width: 100%;
				}

				.selected {
					border: 1px solid blue;
				}

				h2 {
					color: #5e5e5e;
					font-family: sans-serif;
					text-align: center;
					margin: 75px 0px 0 0;
					letter-spacing: 3px;
					font-weight: 300;
				}
			`}</style>
		</>
	)
}


const Songkick = () => {	
	return (
		<Section title="Tour Dates" id="tour-dates">
			<div className="tour-dates-container">
				<a href="https://www.songkick.com/artists/10179981" className="songkick-widget" data-theme="light" data-detect-style="true" data-font-color="#FFFFFF" data-background-color="transparent" data-locale="en">Armentani Brothers Shows</a>
				<Script src="//widget.songkick.com/10179981/widget.js" />
			</div>
			<style jsx global>{`
				.tour-dates-container {
					border: ${border};
					max-width: 850px;
					margin: 0 auto;
					padding: 50px;
				}
			`}</style>
		</Section>
	)
}