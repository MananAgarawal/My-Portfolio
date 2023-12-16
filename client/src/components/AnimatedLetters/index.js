import './index.scss'


const AnimatedLetters = ({letterClass, strArray, idx, compoclass}) => {

    return (
        <span>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx} ${compoclass}`}>
                    {char}
                </span>
            ))}
        </span>
    );

}

export default AnimatedLetters