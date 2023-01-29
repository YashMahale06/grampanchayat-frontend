import React from 'react'
import mapImage from "./map.png"

function Footer() {
    return (
        <div className='bg-orange-400'>
            <div style={{marginLeft: '245px', marginRight: '90px'}} className="mt-12 text-white flex justify-between items-center">
                <div className="rt flex flex-col items-start justify-around mx-8 mt-10">
                    <div className="address flex items-center mb-8">
                        <i className="fa-sharp fa-solid fa-location-dot pr-4 text-4xl"></i>
                        <div className=' flex-col justify-start'>
                            <h2 className='text-lg font-medium'>Pimpalgaon Gram Panchayat</h2>
                            <div className='text-base text-start'>Nashik, Maharashtra</div>
                        </div>
                    </div>
                    <div className="mail flex items-center mb-8">
                        <i class="fa-sharp fa-solid fa-envelope pr-3 text-3xl"></i>
                        <h2 className='text-lg font-medium'>Pimpalgaongrampanchayat@gmail.com</h2>
                    </div>
                    <div className="phn flex items-center mb-8">
                        <i class="fa-sharp fa-solid fa-phone pr-3 text-3xl"></i>
                        <h2 className='text-lg font-medium'>+917666045526/+914466656565</h2>
                    </div>
                    <div className="map mb-8">
                        <img className='w-25' src={mapImage} alt="map" />
                    </div>
                </div>
                <div className="lt flex flex-col items-start mx-6" style={{marginLeft:'80px'}}>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-2xl font-medium mt-8'>Pimpalgaon Gram Panchayat</h1>
                        <div className='text-start mt-3' style={{fontSize:'15px'}}>According to Census 2011 information the location code or village code of Pimpalgaon Baswant village is 551291. Pimpalgaon Baswant village is located in Niphad tehsil of Nashik district in Maharashtra, India. It is situated 18km away from sub-district headquarter Niphad and 32km away from district headquarter Nashik. As per 2009 stats, Pimpalgaon B is the gram panchayat of Pimpalgaon Baswant village.The total geographical area of village is 2895.23 hectares. Pimpalgaon Baswant has a total population of 41,559 peoples, out of which male population is 21,438 while female population is 20,121. Literacy rate of pimpalgaon baswant village is 72.58% out of which 76.31% males and 68.61% females are literate. There are about 8,187 houses in pimpalgaon baswant village.</div>
                    </div>
                    <div className="socialMedia mt-5">
                        <h2 className='text-start text-2xl font-medium mb-3'>Follow Us</h2>
                        <div>
                            <i class="pr-3 fa-brands fa-square-twitter text-4xl"></i>
                            <i class="pr-3 fa-brands fa-square-instagram text-4xl"></i>
                            <i class="pr-3 fa-brands fa-facebook text-4xl"></i>
                            <i class="pr-3 fa-brands fa-youtube text-4xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer