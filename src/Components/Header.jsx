import React from 'react'

const Header = () => {
  return (
    <div className='container'>
        <div className='home-desktop flex justify-between mobile mb-8'>
            <div className='flex mobile-div mr-1'>
            <img className='mobile-lupa mr-2' src="./public/Lupa.png" width="18px" height="18px" alt="Lupa" />
            <span className='mobile-span'>Find your plants</span>
            </div>
            <div className='mobile-icon_div'>
            <img className='mobile-icon' src="./public/Icon.png" width="22px" height="22px" alt="Icon" />
            </div>
        </div>
        <div className='flex home-mobile'>
            <div className='flex'>
            <img src="./public/Group.png" alt="Logo" />     
            </div>
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li className='ml-4'>Shop</li>
                    <li className='ml-4'>Plant Care</li>
                    <li className='ml-4'>Blogs</li>
                </ul>
            </div>
            <div className='flex'>
                <img className='ml-8' src="./public/Lupa.png" alt="Lupa" />
                <img className='ml-8' src="./public/Savdo.png" alt="Xarid" />
                <button className='flex btn items-center'>
                <img className='ml-4' src="./public/Exit.png" alt="Exit" />
                <span className='header-span'>Login</span>
                </button>
            </div>
        </div>
        <div className='planet-mobile planet-desktop'>
        <div className='planet-mobile_left'>
            <div>
                <h1 className='mobile-h1'>Welcome to GreenShop</h1>
                <h2 className='mobile-h2'>LET’S MAKE A BETTER <span className='mobile-left_span'>PLANET</span></h2>
                <p className='mobile-p'>We are an online plant shop offering a wide range </p>
                <button className='flex items-center planet-mobile_btn'>SHOP NOW <img className='ml-2' src="./public/yonalish.png" width="18" height="18" alt="yonalish" /></button>
            </div>
        </div>
        <div className='planet-mobile_right'>
            <img src="./public/planet1.png" width="213px" height="213px" alt="planet1" />
            <img className='planet-mobile-img' src="./public/planet1.png" width="82px" height="82px" alt="planet1" />
        </div>
        </div>
        <div className='planet flex mobile-planet'>
            <div className='planet-left'>
                <h1 className='h1'>Welcome to GreenShop</h1>
                <h2 className='h2'>LET’S MAKE A BETTER <span className='span'>PLANET</span></h2>
                <p className='p'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                </p>
                <button className='planet-btn'>SHOP NOW</button>
            </div>
            <div className='planet-right'>
                <img src="./public/planet1.png" width="1000px" height="1000px" alt="Planet" />
                <img className='planet-img' src="./public/planet1.png" alt="Planet" />
            </div>
        </div>
    </div>
  )
}

export default Header