const VertSpace = props => {
    let className = 'vert-space';

    if (props.big)   { className += ' vert-space--big' }
    if (props.med)   { className += ' vert-space--med' }
    if (props.small) { className += ' vert-space--small' }
    if (props.tiny)  { className += ' vert-space--tiny' }
    if (props.mobile)  { className += ' vert-space--mobile' }

    return (
        <>
            <div className={className}></div>
            <style jsx>{`
                .vert-space {
                    background-color: transparent;
                    height: 65px;
                    width: 100%;
                }

                .vert-space--big {
                    height: 30px;
                }

                .vert-space--med {
                    height: 16px;
                }

                .vert-space--small {
                    height: 10px;
                }

                .vert-space--tiny {
                    height: 4px;
                }

                .vert-space--mobile {
                    display: none;
                }

                @media (max-width: 800px) {
                    .vert-space--mobile {
                        display: block;
                    }
                }
            `}</style>
        </>
    )
}

export default VertSpace
