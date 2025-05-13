import { useEffect, useState } from 'react';
import '../../styles/mainContent.css'
import { fetchPosts } from '../../../../server/services/api.js';
import defaultImg from '../../../public/assets/posts_images/person.png'

const MainContent = () => {
    const [posts, setPosts] = useState([]);
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


    // posts
    useEffect(() => {
        async function loadPosts() {
            const data = await fetchPosts();
            setPosts(data);
        }
        loadPosts();
    }, []);


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

            {/* <div>
            <h1>Lista de posts</h1>
            <ul>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                ) : (
                    <p>Nenhum post encontrado.</p>
                )}
            </ul>
        </div> */}

            {/* test */}

            {/* carousel end */}

        {/* post */}
        <div className="container-publish">
    {posts.length > 0 ? (
        posts.map(post => (
            <div className="container-style-publish">
                <div className="publish" key={post.id}>
                <img src={post.image_path} alt="Imagem do Post" />


                    <div className="container-caption-publish">
                        {post.content}
                    </div>
                </div>
            </div>
        ))
    ) : (
        <p>Nenhum post encontrado.</p>
    )}
</div>

        </div>
    )
}

export default MainContent