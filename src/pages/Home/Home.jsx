import React from 'react';
import './Home.css';
import Scard from '../../Components/Scard/Scard';
import Glancecard from '../../Components/Glancecard/Glancecard';
import Navbar from '../../Components/Navbar/Navbar.jsx';

const Home = () => {

    const title = 'Glance';
    const list = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      
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
        </>
    );
};

export default Home;