import React from 'react';
import a from './who.module.css'
const Who = () => {
    return (
          <div className={a.whoWeAre}>
                <div className={a.textSide}>
                    <h2>КТО МЫ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ullamcorper aliquet non volutpat sed eget nisi. Semper ultricies mi posuere ut ornare in netus diam feugiat. Viverra risus, sit in lectus quis facilisi tincidunt sagittis orci. Faucibus faucibus urna at suspendisse nulla.</p>
                </div>
                <div className={a.whoImgBox}>
                    <img className={a.whoImg} src="/images/image 19 (1).png" alt="" />
                    <img className={a.logo} src="/images/image 18.png" alt="" />
                </div>
            </div>  
    );
};

export default Who;