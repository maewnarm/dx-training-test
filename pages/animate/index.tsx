import anime from 'animejs';
import { useEffect,useRef } from 'react';



const Animate = () => {
    const simple = useRef<anime.AnimeInstance>()
    useEffect(() => {
        console.log("use effect run")
        simple.current = anime({
            targets: '.box-el',
            translateX: '100px'
        })
    }, [simple])

    return (
        <div className="animate">
            <h1>Test Animate</h1>
            <div className="box shadow"></div>
            <div className="box box-el" onClick={() => simple.current.restart}></div>
        </div>
    )
}

export default Animate