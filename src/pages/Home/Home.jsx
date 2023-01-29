import React from 'react';
import './Home.css';
import Scard from '../../Components/Scard/Scard';
import Glancecard from '../../Components/Glancecard/Glancecard';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Photos from '../../Components/Photos/Photos';
import Photocard from '../../Components/Photocard/Photocard';
const Home = () => {

    const title = 'Glance';
    const list = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      
    ];

    const photos = [
        {
          url: 'https://unsplash.com/photos/4Iy3f1hMDRQ',
          title: 'Village 1',
        },
        {
          url: 'https://unsplash.com/photos/1v5tj5_fQ_g',
          title: 'Village 2',
        },
        {
          url: 'https://unsplash.com/photos/9xEPRH7Vjvk',
          title: 'Village 3',
        },
        {
          url: 'https://unsplash.com/photos/RwzRFeCej48',
          title: 'Village 4',
        },
      ];

      
      
       
      
    return (
        <>
            <Navbar />
            <div className="flex px-8 py-8 drop-shadow-xl justify-around gap-1	">
                <Scard
                    name="John Doe"
                    age="45"
                    village="XYZ Village"
                    contact="1234567890"
                    image="https://via.placeholder.com/200x200"
                />
                <Scard
                    name="John Doe"
                    age="45"
                    village="XYZ Village"
                    contact="1234567890"
                    image="https://via.placeholder.com/200x200"
                />

                <Glancecard title={title} list={list} />
            </div>
            <div className='h-8'></div>
            <Photos photos={photos} />
        </>
    );
};

export default Home;