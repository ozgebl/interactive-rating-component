import {useNavigate } from "react-router-dom";

export default function Oops () {
    let navigate = useNavigate();
    function tryAgain() {
        navigate("/");
    }
    return (
        <div className="the-box text-center">
            <h2 className='title-text'>Oops!</h2>
            <p className='body-text'> We could not load your answer!</p>
            <p className="body-text"> Would like to try again?</p>
            <button onClick={tryAgain} className="rate-again thanku-text bg-gray-700 rounded-full"> Rate Again </button>
        </div>
    );
}
