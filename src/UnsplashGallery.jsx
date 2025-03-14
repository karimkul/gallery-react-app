import React, { useState } from "react";
import styled from "styled-components";
import ImageDetailsPopup from "./ImageDetailsPopup";

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
`;

function UnsplashGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: "/assets/image1.jpg",
            description: "A serene morning mist over the lake.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image2.jpg",
            description: "A bustling city skyline at sunset.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image3.jpg",
            description: "A quiet beach with golden sand and turquoise water.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image4.jpg",
            description: "A colorful forest path during autumn.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image5.jpg",
            description: "A close-up shot of dew on a fresh green leaf.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image6.jpg",
            description:
                "A mountain peak covered in snow with a clear blue sky.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image7.jpg",
            description: "A serene morning mist over the lake.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image8.jpg",
            description: "A lively street market filled with vibrant colors.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        },
        {
            src: "/assets/image9.jpg",
            description: "A vast desert landscape under a starry night sky.",
            link: "https://en.wikipedia.org/wiki/Uzbekistan"
        }
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <GalleryContainer>
                {images.map((image, index) => (
                    <div key={index}>
                        <StyledImg
                            src={image.src}
                            alt={`Image ${index}`}
                            onClick={() => handleImageClick(image)}
                        />
                        <p>{image.description}</p>
                    </div>
                ))}
            </GalleryContainer>

            <ImageDetailsPopup
                image={selectedImage}
                onClose={closeModal}
                StyledImg={StyledImg}
            />
        </div>
    );
}

export default UnsplashGallery;
