import '../../styles/modalPost.css'
import { useState } from 'react';
import { toast } from 'react-toastify';

const ModalPost = () => {
    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState(null);
    const [nameImg, setNameImg] = useState('');
    const [typeImg, setTypeImg] = useState('');

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
        
    
    
    
    function closeModal(e){
            e.preventDefault();
            const modal = document.querySelector(".modal-overlay")
            modal.style.display = 'none'
        }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="flex justify-between">
                    <h2 id="title-modal">Create a post</h2>
                    <button onClick={closeModal} id="btn-close-modal"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <textarea name="" id="textarea-modal-post" placeholder='Type something...' value={postContent} onChange={(e) => setPostContent(e.target.value)}></textarea>


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
                        <button className='icon-modal'><i class="fa-solid fa-user-plus"></i></button>
                    </div>
                    <button id="btn-post" onClick={sendPost}>post</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPost;