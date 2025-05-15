import '../../styles/header.css';
import { useState } from 'react';
import ModalPost from '../ModalPost';

const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function toggleModal() {
        setModalIsOpen(!modalIsOpen);
    }

    return (
        <div className="header">
            <div className="flex gap-4">
                <div className="flex bg-green-600" id="container-search">
                    <i className="fa-solid fa-magnifying-glass my-auto"></i>
                    <input type="text" placeholder="Search" id="search" />
                </div>
                <button className="button" id="btn-filter">
                    <i className="fa-solid fa-filter mr-1"></i>filter
                </button>
            </div>

            {/* modal */}
            {modalIsOpen && (
                <div id="modal-post" className={modalIsOpen ? "active" : ""}>
                    <ModalPost />
                </div>
            )}

            <div className="write">
                <button className="button" id="btn-write" onClick={toggleModal}>
                    <i className="fa-solid fa-pen-to-square mr-1"></i>write
                </button>
            </div>
        </div>
    );
};

export default Header;
