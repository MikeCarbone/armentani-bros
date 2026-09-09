import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight fade-in replacement for unmaintained react-reveal/Fade.
 * Pass className so flex/layout parents (e.g. Meet the Boys) can size this wrapper.
 * Opacity transition lives in CSS (.fade) so it won't clobber other transitions like hover.
 */
export default function Fade({ children, delay = 0, className }) {
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

	const classes = ['fade', className, visible ? 'fade--visible' : null].filter(Boolean).join(' ')

	return (
		<div ref={ref} className={classes}>
			{children}
		</div>
	)
}
