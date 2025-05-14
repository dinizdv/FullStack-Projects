import '../../styles/modalPost.css'

const ModalPost = () => {
    function closeModal(){
        document.getElementById("btn-close-modal").addEventListener("click", function (e){
            e.preventDefault();
            const btnClose = document.getElementById("modal-overlay")
            btnClose.style.display = 'none'
        })
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="flex justify-between">
                    <h2 id="title-modal">Create a post</h2>
                    <button onClick={closeModal} id="btn-close-modal"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <textarea name="" id="textarea-modal-post" placeholder='Type something...'></textarea>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <button className='icon-modal'><i class="fa-solid fa-image"></i></button>
                        <button className='icon-modal'><i class="fa-solid fa-user-plus"></i></button>
                    </div>
                    <button id="btn-post">post</button>
                </div>
            </div>
        </div>
    )
}

export default ModalPost;