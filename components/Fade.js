import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight fade-in replacement for unmaintained react-reveal/Fade.
 * Supports delay (ms) and fades in when the element enters the viewport.
 */
export default function Fade({ children, delay = 0 }) {
	const ref = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return undefined

		let timeoutId
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return
				timeoutId = setTimeout(() => setVisible(true), delay)
				observer.disconnect()
			},
			{ threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
		)

		observer.observe(el)
		return () => {
			observer.disconnect()
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [delay])

	return (
		<div
			ref={ref}
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? 'none' : 'translateY(16px)',
				transition: 'opacity 0.7s ease, transform 0.7s ease',
			}}
		>
			{children}
		</div>
	)
}
