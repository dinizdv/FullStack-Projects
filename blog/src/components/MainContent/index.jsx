import { useEffect, useState } from 'react';
import Img from '../../assets/person.png'
import '../../styles/mainContent.css'

const MainContent = () => {
    const [startIndex, setStartIndex] = useState(0)
    const numberOfCards = 5
    const visibleCount = 3
    const intervalTime = 1500

    // async function getUsers() {
    //     try {
    //         const response = await fetch("../../php/test.php");  // Ajuste o caminho para garantir a correta localização do arquivo
    //         if (!response.ok) {
    //             throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    //         }
    
    //         const contentType = response.headers.get("content-type") || "";
    //         console.log("Tipo de conteúdo da resposta:", contentType);  // Debug do tipo de resposta
    
    //         if (contentType.includes("application/json")) {
    //             const data = await response.json();  // Convertendo para JSON
    //             console.log("Dados recebidos:", data);
    //             return data;
    //         } else {
    //             console.error("A resposta não é JSON. Conteúdo recebido:", await response.text());
    //         }
    //     } catch (error) {
    //         console.error("Erro ao obter os usuários:", error);
    //     }
    // }
    
    // useEffect(() => {
    //     (async () => {
    //         await getUsers();
    //     })();
    // }, []);
    
    
    
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
                <div className="flex gap-3 w-full justify-between" id="preferences">
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

            {/* test */}

            {/* carousel end */}

        {/* publish */}
        <div className="container-publish">
            <div className="publish">
                <img src={ Img } />
                <div className="container-caption-publish">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil unde commodi inventore amet tempora molestias modi assumenda velit voluptatum quo, sint, ipsam dolorem aut dolores a vel temporibus perspiciatis repudiandae praesentium dignissimos vero quaerat laboriosam, ratione in. Cupiditate, nobis exercitationem.</p>
                </div>
            </div>
        </div>



        </div>
    )
}

export default MainContent