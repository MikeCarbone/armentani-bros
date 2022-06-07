import { useEffect, useState } from 'react'

const LoadingCover = props => {
    const loading = props.loading

    // Turns things into display: none; after theyre finished
    const [doneExecuting, setDoneExecuting] = useState(false);

    // Hides elements after their operations are done
    useEffect(() => {
        return loading === false
        ?
            setTimeout(() => {
                setDoneExecuting(true);
            }, 1500)
        : null
    }, [loading]);

    const doneClass         = doneExecuting         ? 'inactive'        : '';
    const coverLoadingClass = loading               ? 'cover__loading'  : 'cover__done-loading';

    return (
        <>
            <div>
                <div className={`cover ${doneClass} ${coverLoadingClass}`}>
                    <div className="center-cont">
                        {/* <div className="spinner">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', display: 'block', shapeRendering: 'auto', width: "100px", height: '100px', viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid' }}>
                                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#efefef" stroke="none">
                                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                                </path>
                            </svg>
                        </div> */}
                        {/* <p>loading the armentani experience...</p> */}
                    </div>
                </div>
            </div>
            <style jsx>{`

                .cover {
                    background-color: black;
                    height: 100vh;
                    opacity: 1;
                    overflow: hidden;
                    position: fixed;
                    pointer-events: none;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    z-index: 1000;
                }


                .center-cont {
                    left: 50%;
                    transform: translateX(-50%);
                    position: fixed;
                    margin-top: 40vh;
                    z-index: 10005;
                    text-align: center;
                }

                .spinner {
                    display: block;
                    margin: 0 auto;
                }


                .cover__done-loading {
                    animation: fadeIn 0.5s ease-in 0s forwards;
                    overflow: hidden;
                }
                
                p {
                    color: gray;
                    margin: 50px 0;
                }

                @keyframes fadeIn {
                    from { opacity: 1; }

                    to { opacity: 0; }
                }

                .inactive {
                    display: none;
                }
            `}</style>
        </>
    )
}

export default LoadingCover
