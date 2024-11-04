'use client'; // Next.js requirement for client-side code
import { useState, useEffect } from 'react';


export default function Home() {
  const [bgGradient, setBgGradient] = useState('linear-gradient(135deg, #FF6F61, #6FA3EF)'); // Default gradient
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSecondPage, setIsSecondPage] = useState(false); // Control to check if it's the second page
  const textItems = [
    "E-Mobility Electric Vehicles (EVs)",
    "Electric vehicles, charging infrastructure, and smart mobility solutions reduce emissions."
  ];
  

  const changeBackgroundGradient = (gradient) => setBgGradient(gradient);

  const changeBackgroundColor = (color) => {
    const secondPage = document.getElementById('secondPage');
    secondPage.style.backgroundColor = color;
  };

  const scrollToNextText = () => {
    const textItems = document.querySelectorAll('.text-item');
    if (currentTextIndex < textItems.length - 1) {
      textItems[currentTextIndex].classList.remove('visible');
      setCurrentTextIndex((prevIndex) => prevIndex + 1);
      textItems[currentTextIndex + 1].classList.add('visible');
    }
  };

  const scrollToPreviousText = () => {
    const textItems = document.querySelectorAll('.text-item');
    if (currentTextIndex > 0) {
      textItems[currentTextIndex].classList.remove('visible');
      setCurrentTextIndex((prevIndex) => prevIndex - 1);
      textItems[currentTextIndex - 1].classList.add('visible');
    }
  };

  useEffect(() => {
    // Reset text visibility on component mount
    const textItemsElements = document.querySelectorAll('.text-item');
    textItemsElements.forEach((item, index) => {
      item.classList.toggle('visible', index === currentTextIndex);
    });
  }, [currentTextIndex]);

  const [currentSlide, setCurrentSlide] = useState(0); // 0 for E-MOBILITY EVs, 1 for CHARGING INFRASTRUCTURE

  const slides = [
    {
      title: 'E-MOBILITY EVs',
      description: 'Electric vehicles, charging infrastructure, and smart mobility solutions reduce emissions.',
      image: 'https://i.ibb.co/Cs36SQX/EVS-png.png',
      link: 'https://ibb.co/mFV0P4Y',
      buttons: [
        { label: '5k"', key: '5k' },
        { label: '15k"', key: '15k' },
        { label: '25k"', key: '25k' },
      ],
      icons: [
        'https://i.ibb.co/gt0GkQj/BMS-png.png',
        'https://i.ibb.co/Gs5DMdS/EDS-png.png',
        'https://i.ibb.co/ynjqY6m/CL.png',
      ],
    },
    {
      title: 'CHARGING INFRASTRUCTURE',
      description: 'Network of charging stations supporting widespread electric vehicle use.',
      image: 'https://i.ibb.co/zRRnkcs/download.png',
      link: 'https://ibb.co/QNNb5B9',
      buttons: [
        { label: '10k"', key: '10k' },
        { label: '20k"', key: '20k' },
        { label: '30k"', key: '30k' },
      ],
      icons: [
        'https://i.ibb.co/dk801CW/depositphotos-543591326-stock-illustration-home-charging-point-black-glyph.png',
        'https://i.ibb.co/Gd1cBDR/file.png',
        'https://i.ibb.co/PCLssP9/bike-charger-fast.png',
      ],
    },
    {
      title: 'SMART MOBILITY SOLUTIONS',
      description: 'Integrating technology to enhance urban transportation efficiency and convenience.',
      image: 'https://i.ibb.co/bg6sjSy/ESB-PLUS-ANTITHEFT-1024x1024.webp',
      link: 'https://ibb.co/5W1rXNz',
      buttons: [
        { label: '6k"', key: '6k' },
        { label: '16k"', key: '16k' },
        { label: '26k"', key: '26k' },
      ],
      icons: [
        'https://i.ibb.co/nRpJTs8/file-2.png',
        'https://i.ibb.co/FXJZfnc/file-4.png',
        'https://i.ibb.co/D56L54Z/file-5.png',
      ],
    },
    {
      title: 'SUSTAINABLE URBAN TRANSPORTATION',
      description: 'Eco-friendly initiatives promoting public transport and reducing environmental impact.',
      image: 'https://i.ibb.co/hKkbN9w/1690444862119-1.png',
      link: 'https://ibb.co/Zh35rX7',
      buttons: [
        { label: '25k"', key: '25k' },
        { label: '35k"', key: '35k' },
        { label: '45k"', key: '45k' },
      ],
      icons: [
        'https://i.ibb.co/CK0fy17/file-6.png',
        'https://i.ibb.co/yV465KV/1988151-200.png',
        'https://i.ibb.co/94hWXwQ/file-7.png',
      ],
    },
  ];

  return (
    <div>
      <header className="shadow-md p-4 fixed w-full top-0 left-0 z-10 bg-white">
        <ul>
          <div className="flex justify-between">
            <div className="flex space-x-2 items-center">
              <li><h1 className="font-bold text-xl">E-Mobility</h1></li>
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/08/17/E-Bike-New-Logo-and-Icon-Design-2-Graphics-15966001-3-580x412.png"
                alt="Ebike-logo"
                className="w-[5vh] h-[5vh]"
              />
            </div>
            <div className="flex space-x-2 items-center">
              <li>
                <img
                  src="https://png.pngtree.com/png-vector/20220506/ourmid/pngtree-round-country-flag-united-states-png-image_4563512.png"
                  alt="United-logo"
                  className="w-[5vh] h-[5vh] rounded-full"
                />
              </li>
              <li>
                <img
                  src="https://w7.pngwing.com/pngs/306/1003/png-transparent-flag-of-the-united-kingdom-flag-of-great-britain-united-kingdom-flag-logo-quality-thumbnail.png"
                  alt="UK-logo"
                  className="w-[5vh] h-[5vh] rounded-full"
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQ7dQYVMVnfQUgv-5E3FAEO1Gjq1vfayXAQ&s"
                  alt="Germany-logo"
                  className="w-[5vh] h-[5vh] rounded-full"
                />
              </li>
            </div>
          </div>
        </ul>
      </header>

      <main>
        <div className="snap-y snap-mandatory scroll-smooth h-screen">
          <div className="space-y-10">
            {/* Content of the first section */}
          </div>
          <section className="snap-start h-screen flex justify-center items-center">
            <div className="space-y-10">
              <div className="flex flex-col content-center space-y-2">
                <div className="flex justify-center items-center">
                  <h1 className="font-[900] text-2xl">E-Mobility</h1>
                  <img
                    src="https://www.creativefabrica.com/wp-content/uploads/2021/08/17/E-Bike-New-Logo-and-Icon-Design-2-Graphics-15966001-3-580x412.png"
                    alt="Ebike-logo"
                    className="w-[5vh] h-[5vh]"
                  />
                </div>
                <div>
                  <p className="text-2xl text-gray-500">Smart Charging Networks</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col content-center space-y-2">
                  <h4 className="text-center">Connect With</h4>
                  <div className="flex space-x-4 items-center">
                    <img
                      src="https://logodownload.org/wp-content/uploads/2020/12/amazon-alexa-logo-0.png"
                      alt="amazon alexa-logo"
                      className="w-20 h-20"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flickr_logo.png"
                      alt="flicker-logo"
                      className="w-20 h-15"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvrYCp0_IlQbqQuF7kLQbvIMj63EQYEKe22qrLF71SC4aQivo3PpBG_BuiYaAwDzKcKQ&usqp=CAU"
                      alt="Google Photos-logo"
                      className="w-20 h-20"
                    />
                  </div>
                  <div className="flex space-x-4 items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW6Ork6idHNOFfvbmcXllJke67X87YdgtVQ&s"
                      alt="instagram-logo"
                      className="w-20 h-20"
                    />
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo-2019.png"
                      alt="facebook-logo"
                      className="w-20 h-20"
                    />
                    <img
                      src="https://www.menosfios.com/wp-content/uploads/2014/06/dropbox-logo-large.png"
                      alt="Dropbox-logo"
                      className="w-20 h-20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll to explore message */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              {/* Circle on top */}
              <div className="w-10 h-10 bg-white rounded-full mb-2 shadow-lg"></div>
              
              <p className="text-10 text-black-500">Scroll to explore</p>
              <svg
                className="w-8 h-8 text-black-500 animate-bounce mt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 8l6 6 6-6" // V shape
                />
              </svg>
            </div>
          </section>

          <section className="snap-start h-screen flex justify-center items-center relative" style={{ background: bgGradient }}>
<div>
<div className="flex">
      {/* Scrollbar container on the left */}
      <div className="scroll-bar-container" style={{ position: 'absolute', left: '0', top: '0', width: '20px', height: '100vh', backgroundColor: 'transparent', zIndex: 0 }}>
        <div className="scroll-bar" style={{ width: '3px', height: '100%', backgroundColor: 'black', position: 'absolute', top: '0', left: '20px', zIndex: 1 }}></div>
      </div>

      {/* Image container and main content */}
      <div className="mt-10 relative image-container ml-20">
        <a href={slides[currentSlide].link}>
          <img src={slides[currentSlide].image} alt={`${slides[currentSlide].title} Logo`} className="w-[40vh] h-[40vh] object-contain transition-transform duration-300 hover:scale-110" />
        </a>
      </div>

      <div className="text-left mt-10 ml-10">
        <h2 className="font-[600] text-2xl">{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].description}</p>
        
        <div className="mt-5">
          <button className="px-5 py-1 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            Learn More
          </button>

          <div className="mt-4 flex space-x-4">
            {slides[currentSlide].buttons.map((btn) => (
              <button key={btn.key} className="w-10 h-10 rounded-full bg-black text-white font-semibold italic flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out">
                <span className="text-xl">{btn.label}</span>
              </button>
            ))}
          </div>
          
          <div className="mt-4 flex space-x-4">
            {slides[currentSlide].icons.map((icon, index) => (
              <button key={index} className="w-10 h-10 rounded-full bg-white text-white font-semibold flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out">
                <img src={icon} alt={`Icon ${index + 1}`} className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <button className="px-5 py-1 bg-orange-500 border-2 border-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
            Buy
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="mt-5">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`px-2 ${currentSlide === index ? 'bg-gray-500' : 'bg-gray-300'} text-white rounded`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
</section>

          <div>
            <div className="flex" style={{ display: 'flex' }}>
             {/* Scrollbar container on the left */}
           <div className="scroll-bar-container" style={{ position: 'absolute', left: '0', top: '0', width: '20px', height: '100vh', backgroundColor: 'transparent', zIndex: 0 }}>
              <div className="scroll-bar" style={{ width: '3px', height: '100%', backgroundColor: 'black', position: 'absolute', top: '0', left: '20px', zIndex: 1 }}></div>
              </div>
            <div className="text-container">
              <div className="text-item" style={{ fontWeight: 100, fontSize: '0.90rem' }}> </div>
              <div className="text-item" style={{ fontWeight: 100, fontSize: '0.90rem' }}>E-Mobility Electric Vehicles (EVs)</div>
              <div className="text-item" style={{ fontWeight: 100, fontSize: '0.90rem' }}>Charging Infrastructure</div>
              <div className="text-item" style={{ fontWeight: 100, fontSize: '0.90rem' }}>Smart Mibility Solutions</div>
              <div className="text-item" style={{ fontWeight: 100, fontSize: '0.90rem' }}>Sustainable Urban Transportation</div>
              <div className="text-item" style={{ fontWeight: 100, fontSize: '0.90rem' }}> </div>
            </div>
          </div>
        </div>
      </div>
      
      isSecondPage && ( // Only render buttons if on the second page      
        {/* Gradient Change Buttons */}
        <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
          <button onClick={() => changeBackgroundGradient('linear-gradient(135deg, #FF6F61, #FF8C61, #FFDA61, #6FA3EF, #61D6EF)')}
            className="w-5 h-5 bg-gradient-to-r from-red-500 to-red-700 rounded-full border-2 border-red-900 hover:scale-110 active:scale-95"></button>
          <button onClick={() => changeBackgroundGradient('linear-gradient(135deg, #4CAF50, #81C784, #A5D6A7, #6FA3EF, #61D6EF)')}
            className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-700 rounded-full border-2 border-green-900 hover:scale-110 active:scale-95"></button>
          <button onClick={() => changeBackgroundGradient('linear-gradient(135deg, #2196F3, #64B5F6, #90CAF9, #BBDEFB, #E1F5FE)')}
            className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full border-2 border-blue-900 hover:scale-110 active:scale-95"></button>
        </div>
      )

{/* Scroll Up and Down Buttons */}
<div className="fixed bottom-5 left-10 flex flex-col items-center z-50">
<button
    onClick={scrollToPreviousText}
    className="w-8 h-8 bg-black text-white rounded-full mb-2 shadow-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-800"
    title="Scroll Up"
  >
    <svg
      className="w-6 h-6 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 15l6-6 6 6"
      />
    </svg>
  </button>
  <button
    onClick={scrollToNextText}
    className="w-8 h-8 bg-black text-white rounded-full shadow-lg flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-800"
    title="Scroll Down"
  >
    <svg
      className="w-6 h-6 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 9l6 6 6-6"
      />
    </svg>
  </button>
</div>
      </main>
    </div>
  );
}