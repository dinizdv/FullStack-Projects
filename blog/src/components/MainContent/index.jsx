import { useEffect, useState } from 'react';
import '../../styles/mainContent.css'

const MainContent = () => {
    const [startIndex, setStartIndex] = useState(0)
    const numberOfCards = 5
    const visibleCount = 3
    const intervalTime = 1500

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prevIndex => (prevIndex + 1) % numberOfCards);
        }, intervalTime);
    
        return () => clearInterval(interval);
    }, []);
    


    const middleCardIndex = (startIndex + Math.floor(visibleCount / 2)) % numberOfCards;
    const ButtonsList = () => {
        return(
<div className="flex gap-4 p-5">
    {Array.from({ length: numberOfCards }, (_, i) => (
        <button 
            key={i} 
            className={`px-4 py-2 rounded font-bold transition-all ${
                i === middleCardIndex ? "bg-yellow-500 text-black scale-110 shadow-lg" : "bg-blue-500 text-white"
            } hover:bg-blue-700`}
        >
            Botão {i + 1}
        </button>
    ))}
</div>

        )
    }

    return(
        <div className id="container-main-content">
            <div className="flex" id="container-preferences">
                <div className="flex gap-3 border-red-500 border-2 w-full justify-between" id="preferences">
                    <button className="button rounded-full"><i class="fa-solid fa-plus"></i></button>
                    <button className="button-preferences">btn test</button>
                    <button className="button-preferences">btn test</button>
                    <button className="button-preferences">btn test</button>
                    <button className="button-preferences">btn test</button>
                    <button className="button-preferences">btn test</button>
                    <button className="button-preferences">btn test</button>
                </div>
            </div>


            {/* carousel */}
            <div className="container-carousel">
    {Array.from({ length: visibleCount }).map((_, i) => {
        const index = (startIndex + i) % numberOfCards; // Rotação circular
        return (
            <div key={index} className="carousel">
                <h1>card {index + 1} of the carousel</h1>
            </div>
        );
    })}
</div>


            <div className="buttons-carousel">
                <ButtonsList />
                    
            </div>
            {/* carousel end */}

        </div>
    )
}

export default MainContent