import '../../styles/modalPost.css'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Person from '../../../public/assets/posts_images/person.png'

const ModalPost = () => {
    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState(null);
    const [nameImg, setNameImg] = useState('');
    const [typeImg, setTypeImg] = useState('');
    const [inputValue, setInputValue] = useState('@');
    const [usersSelected, setUsersSelected] = useState([]);



    function handleFileUpload(e) {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setNameImg(file.name);
            setTypeImg(file.type);
        }
    }

    function sendPost(e) {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("content", postContent);
        const fileInput = document.getElementById("file-input");
        if (fileInput.files[0]) {
            formData.append("image", fileInput.files[0]);
        }
    
        fetch("http://localhost:5000/api/posts", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            setPostContent("");
            setImage(null);
            setNameImg("");
            setTypeImg("");
            document.getElementById("file-input").value = "";
            toast.success("Post criado com sucesso!");
        })
        .catch(error => {
            console.error(error);
            toast.error("Erro ao criar post");
        });
    }
        
    // handle input
    const handleChange = (e) => {
        let value = e.target.value;
    
        // ensure the inputs starts always with @
        if (!value.startsWith("@")) {
          value = "@" + value.replaceAll("@", "");
        }
    
        setInputValue(value);
      };
    

    // close modal
    function closeModal(e){
            e.preventDefault();
            const modal = document.querySelector(".modal-overlay")
            modal.style.display = 'none'
    }

    useEffect(() => {
        const btnTag = document.querySelector('#btn-tag');
        if (btnTag) {
            if (usersSelected.length === 0) {
                btnTag.classList.add('disabled-btn-tag');
                btnTag.setAttribute("readonly", true);
            } else {
                btnTag.classList.remove('disabled-btn-tag');
                btnTag.removeAttribute("readonly");
            }
        }
    }, [usersSelected]);
    
    
    function checkUser(userName) {
        setUsersSelected((prevUsersSelected) => {
            const updatedUsers = prevUsersSelected.includes(userName)
                ? prevUsersSelected.filter((user) => user !== userName) // Remove usuário se já estiver selecionado
                : [...prevUsersSelected, userName]; // Adiciona usuário se ainda não estiver selecionado
    
            return updatedUsers;
        });
    
        // Atualiza a classe no botão correspondente
        const userButton = document.querySelector(`[data-user="${userName}"]`);
        if (userButton) {
            if (usersSelected.includes(userName)) {
            } else {            }
        }
    }
    

    function tagUsers(){
        console.log('BOTAOZINHO DOS USERS', usersSelected)
        document.querySelector('.tag-people').style.display = 'none'
        document.querySelector('#btn-tag').style.display = 'none'
        document.querySelector('#textarea-modal-post').style.display = 'block'
        document.querySelector('#btn-post').style.display = 'block'
    }

    function viewUsers(){
        document.querySelector('#textarea-modal-post').style.display = 'none'
        document.querySelector('#btn-post').style.display = 'none'
        document.querySelector('.tag-people').style.display = 'block'
        document.querySelector('#btn-tag').style.display = 'block'
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="flex justify-between">
                    <h2 id="title-modal">Create a post</h2>
                    <button onClick={closeModal} id="btn-close-modal"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <textarea name="" id="textarea-modal-post" placeholder='Type something...' value={postContent} onChange={(e) => setPostContent(e.target.value)}></textarea>

                {/* tag people */}
                <div className="tag-people">


                <div className="input-search-tag">
                    <input type="text" value={inputValue} onChange={handleChange} />
                </div>


                    <div className="overflow-y-auto">
                    <div className="person">
                        <div className="flex gap-2 items-center">
                            <img src={Person} alt="" />
                            <label htmlFor="">Lamine Yamal</label>
                        </div>
                        <button onClick={() => checkUser("Lamine Yamal")} className={usersSelected.includes("Lamine Yamal") ? "btn-check-able" : ""}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>

                    <div className="person">
                        <div className="flex gap-2 items-center">
                            <img src={Person} alt="" />
                            <label htmlFor="">Lamine Yamal</label>
                        </div>
                        <button onClick={() => checkUser("Lamine Yamal")} className={usersSelected.includes("Lamine Yamal") ? "btn-check-able" : ""}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>

                    <div className="person">
                        <div className="flex gap-2 items-center">
                            <img src={Person} alt="" />
                            <label htmlFor="">Lamine Yamal</label>
                        </div>
                        <button onClick={() => checkUser("Lamine Yamal")} className={usersSelected.includes("Lamine Yamal") ? "btn-check-able" : ""}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>

                    <div className="person">
                        <div className="flex gap-2 items-center">
                            <img src={Person} alt="" />
                            <label htmlFor="">Lamine YABEM</label>
                        </div>
                        <button onClick={() => checkUser("Lamine YABEM")} className={usersSelected.includes("Lamine YABEM") ? "btn-check-able" : ""}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>

                    <div className="person">
                        <div className="flex gap-2 items-center">
                            <img src={Person} alt="" />
                            <label htmlFor="">Lamine Yamal</label>
                        </div>
                        <button onClick={() => checkUser("Lamine Yamal")} className={usersSelected.includes("Lamine Yamal") ? "btn-check-able" : ""}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>

                    </div>
                </div>


                {image && 
                
                <div className='flex gap-4'>
                    <img src={image} alt="Preview" className="image-preview" />
                    <div className="flex flex-col gap-4">
                        <p className='description-img-preview'><b>Name:</b> {nameImg}</p>
                        <p className='description-img-preview'><b>Type:</b> {typeImg}</p>
                    </div>
                </div>
                
                }
                

                <div className="flex justify-between items-center">

                    <div className="flex gap-4">
                    
                    <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleFileUpload} accept="image/*" />
                        <button className='icon-modal' id="upload-img-post" onClick={() => document.getElementById('file-input').click()}><i class="fa-solid fa-image"></i></button>
                        <button className='icon-modal' id="view-users" onClick={viewUsers}><i class="fa-solid fa-user-plus"></i></button>
                    </div>
                    <button id="btn-post" onClick={sendPost}>post</button>
                    <button id="btn-tag" className='btn-tag disabled-btn-tag' readonly onClick={tagUsers}>tag users</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPost;