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
<div className="flex gap-4 justify-center">
    {Array.from({ length: numberOfCards }, (_, i) => (
        <button 
            key={i} 
            className={`button-cards ${
                i === middleCardIndex ? "middle-button" : ""
            } `}
        >
            {i + 1}
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
            <div className="container-carousel my-6">
    {Array.from({ length: visibleCount }).map((_, i) => {
        const index = (startIndex + i) % numberOfCards; // Rotação circular
        const isMiddle = index === (startIndex + Math.floor(visibleCount / 2)) % numberOfCards
        return (
            <div key={index} className={`carousel ${isMiddle ? "carousel-middle" : ""}`}>
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