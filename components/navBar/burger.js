import React, {useState} from 'react'
import navStyles from '../../styles/Nav.module.scss'

const burger = () => {
  return (
    <>
      <div
				className={navStyles.burgerIcon}
				onClick={() => handleClick()}
			>
				<div className={navStyles.burgerLine}></div>
				<div className={navStyles.burgerLine}></div>
				<div className={navStyles.burgerLine}></div>
				{/* <div className='burger-line' ref={(el) => (line1Ref = el)}></div>
				<div className='burger-line' ref={(el) => (line2Ref = el)}></div>
				<div className='burger-line' ref={(el) => (line3Ref = el)}></div> */}
			</div>
			<div className='yellow-wrapper'>
				<div className='menu-wrapper'>
			{/* <div className='yellow-wrapper' ref={(el) => (yellowBoxRef = el)}>
				<div className='menu-wrapper' ref={(el) => (menuRef = el)}> */}
					{/* <RightNav showLinks={showLinks} /> */}
				</div>
			</div>
    </>
  )
}

export default burger;
