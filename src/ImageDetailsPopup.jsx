import React from "react";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 600px;
    width: 100%;
`;

const CloseButton = styled.button`
    padding: 8px 16px;
    margin-top: 20px;
    margin-left: 10px;
    background-color: #ff4c4c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const PopupImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
`;

function ImageDetailsPopup({ image, onClose }) {
    if (!image) return null;

    return (
        <Modal onClick={onClose}>
            <ModalContent>
                <PopupImg src={image.src} alt="Selected" />

                <p>{image.description}</p>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                    View more
                </a>
                <CloseButton onClick={onClose}>Close</CloseButton>
            </ModalContent>
        </Modal>
    );
}

export default ImageDetailsPopup;
