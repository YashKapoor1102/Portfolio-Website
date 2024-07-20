import React from 'react';
import Image from 'next/image';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoSrc: string;
    type: string;
}

const Modal: React.FC<VideoModalProps> = ({isOpen, onClose, videoSrc, type}) => {
    if (!isOpen) {
        return null;
    }

    const handleClickOutside = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center' onClick={handleClickOutside}>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
                {type === 'image' ? (
                    <Image src={videoSrc} alt="Image" width={800} height={450} />
                ) : (
                    <video width="800" height="450" controls>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser doesn&apos;t support the video tag.
                    </video>
                )}
            </div>
        </div>
    );
};

export default Modal;