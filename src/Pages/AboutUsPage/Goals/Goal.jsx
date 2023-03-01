import React from 'react';
import a from './Goal.module.css'

const Goal = () => {
    return (
        <div className={a.wrapper}>
            <img src="/images/image 19 (2).png" alt="" />
            <div className={a.textSide}>
                <h2>Наши цели</h2>
                <ul>
                    <li><p className={a.numbers}>01</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ullamcorper aliquet non volutpat sed eget nisi. </li>
                    <li><p className={a.numbers}>02</p>Semper ultricies mi posuere ut ornare in netus diam feugiat. Viverra risus, sit in lectus quis facilisi tincidunt sagittis orci. Faucibus faucibus urna at suspendisse nulla.</li>
                    <li><p className={a.numbers}>03</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</li>
                    <li><p className={a.numbers}>04</p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</li>
                </ul>
            </div>
        </div>
    );
};

export default Goal;