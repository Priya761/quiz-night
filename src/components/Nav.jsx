import React from 'react';
import quizNightLogo from "../assets/quizNightLogo.png"

function Nav() {
  return (
    <>
        <div className="bg-slate-400 flex items-center px-5 py-1 sticky">
            <div className='flex items-center gap-2 grow'>
                <img width={35}  src={quizNightLogo} />
                <h4 className='text-xl font-semi-bold text-slate-900'>Quiz Night</h4>
            </div>
            <div>About Us</div>
        </div>
    </>
  )
}

export default Nav;