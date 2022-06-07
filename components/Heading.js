export default function Heading(props) {
    const level = parseInt(props.level)
    switch(level) {
        case 1:
            return <Heading1 {...props} />
        case 2:
            return <Heading2 {...props} />
        case 3:
            return <Heading3 {...props} />
        case 4:
            return <Heading4 {...props} />
        case 5:
            return <Heading5 {...props} />
        case 6:
            return <Heading6 {...props} />
        default:
            return <Heading1 {...props} />
    }
}

function getStyles(props) {
    const styles = props.style || {
        color: 'white',
		textAlign: 'center',
    }
    if (props.center) styles.textAlign = 'center'
    if (props.right) styles.textAlign = 'right'
    return styles
}

const Heading1 = props => {
    const styles = getStyles(props)
    return (
        <>
            <h1 style={styles}>{props.children}</h1>
            <style jsx>{`
                h1 {
                    font-size: 5rem;
                    letter-spacing: -1.5px;
                }

                @media (max-width: 700px) {
                    h1 {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </>
    )
}
const Heading2 = props => {
    const styles = getStyles(props)
    return (
        <>
            <h2 style={styles}>{props.children}</h2>
            <style jsx>{`
                h2 {
                    font-size: 3.5rem;
                    letter-spacing: -0.5px;
                }

                @media (max-width: 700px) {
                    h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </>
    )
}
const Heading3 = props => {
    const styles = getStyles(props)
    return (
        <>
            <h3 style={styles}>{props.children}</h3>
            <style jsx>{`
                h3 {
                    letter-spacing: 0px;
                }
            `}</style>
        </>
    )
}
const Heading4 = props => {
    const styles = getStyles(props)
    return (
        <>
            <h4 style={styles}>{props.children}</h4>
            <style jsx>{`
                h4 {
                    letter-spacing: 0.25px;
                }
            `}</style>
        </>
    )
}
const Heading5 = props => {
    const styles = getStyles(props)
    return (
        <>
            <h5 style={styles}>{props.children}</h5>
            <style jsx>{`
                h5 {
                    letter-spacing: 0px;                    
                }
            `}</style>
        </>
    )
}
const Heading6 = props => {
    const styles = getStyles(props)
    return (
        <>
            <h6 style={styles}>{props.children}</h6>
            <style jsx>{`
                h6 {
                    letter-spacing: 0.15px;
                }
            `}</style>
        </>
    )
}
