import React from 'react';

const styles = {
    transition: 'all 0.3s ease-out'
}

const imgStyles = {
    transition: 'all 15s ease-out'
}
const Ball = (props) => {
    let ans = props.answer ? props.answer : 'ans1.png'
    return (
        <div className="ball">
            <div className="number-eight" style={{...styles, opacity: props.opacity}} >
                8
            </div>
            <div className={`answer`} style={{...styles, opacity: props.imgOpacity}} >
                <img style={{...imgStyles, opacity: props.imgOpacity}} src={require(`../images/${ans}`)} alt="ans"/>
            </div>
        </div>
    );
}

export default Ball;