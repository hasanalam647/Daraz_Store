'use client';
import { Carousel } from 'flowbite-react';
import { useContext } from 'react';
import { OptionContext } from './Context/ProductsProvider';


function Slider() {
    const { options } = useContext(OptionContext);
    return (
        <div className='flex space-x-4 m-auto mt-4 ml-16'>
            <div id="dropdownHover" className="bg-white divide-y divide-gray-100 rounded-xl shadow-lg w-64 dark:bg-gray-700 float-left">
                <ul className="py-2 text-sm text-cyan-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    {options.map((item) =>
                        <li key={item.id}>
                            <a href="#" className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item.label}</a>
                        </li>
                    )}
                </ul>
            </div>
            <div className="caro-slide h-56 sm:h-64 xl:h-80 2xl:h-96" style={{    height: '320px'}}>
                <Carousel>
                    <img src="https://icms-image.slatic.net/images/ims-web/9fe83308-d572-4fb3-8406-8ee54fa30f24.jpg_1200x1200.jpg" className='caro_img' alt="..." />
                    <img src="//icms-image.slatic.net/images/ims-web/7bfdcc7d-73b1-4cdd-99ee-b7a18bf539e4.jpg" className='caro_img' alt="..." />
                    <img src="//icms-image.slatic.net/images/ims-web/88f27f96-ff28-450d-bfb1-df67c352c2a2.jpg" className='caro_img' alt="..." />
                    <img src="https://icms-image.slatic.net/images/ims-web/21e68190-ae92-4690-99d4-56310a5f6b51.jpg" className='caro_img' alt="..." />
                    <img src="https://icms-image.slatic.net/images/ims-web/561995e8-c47e-4c6d-aee6-51dd0cae6c36.png_1200x1200.jpg" className='caro_img' alt="..." />
                </Carousel>
            </div>
        </div>
    );
}
export default Slider;