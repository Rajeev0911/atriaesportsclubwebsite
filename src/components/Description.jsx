import React from 'react'
import Description_Section_Img from '../assets/images/Description_Section_Img.png'
import './Description.css'

const Description = () => {
    return (
        <div className="container">
            <div className="image">
                <img src={Description_Section_Img} alt="Image" />

                <button className='btn'>Join now! <svg className='btn-logo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.7856 7.54698L7.042 11.4071C6.55122 11.6321 6.71622 12.376 7.25622 12.376H11.4375C11.4872 12.376 11.5349 12.3958 11.57 12.431C11.6052 12.4661 11.625 12.5138 11.625 12.5635V16.7439C11.625 17.2839 12.375 17.447 12.599 16.9576L16.4531 8.21448C16.4962 8.12106 16.5097 8.01665 16.4916 7.91535C16.4736 7.81405 16.4249 7.72072 16.3521 7.64796C16.2794 7.5752 16.186 7.5265 16.0847 7.50845C15.9834 7.49039 15.879 7.50384 15.7856 7.54698Z" fill="#EAE8FF" />
                    <path d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z" stroke="#EAE8FF" stroke-width="1.625" stroke-miterlimit="10" />
                </svg></button>
                
            </div>

            <div className="text">
                <div className="LevelUpYourGameJoinTheElite">
                    <span style={{ color: '#5B0F97' }}>Level Up </span>
                    <br />
                    <span style={{ color: '#B3B3B3' }}>Your Game,
                        <br />Join the</span>
                    <br />
                    <span style={{ color: 'white' }}> </span>
                    <span style={{ color: '#5B706F' }}>Elite</span>
                </div>
            </div>
        </div>
    )
}

export default Description