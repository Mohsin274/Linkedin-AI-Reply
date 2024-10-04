import { useState } from "react";
import { createPortal } from "react-dom";
import AiIcon from "@/components/ai-icon/AiIcon";
import ChatScreen from "@/components/chat/chat-screen/ChatScreen";
import Modal from "@/components/modal/Modal";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <AiIcon onClick={handleOpenModal} />
            {isModalOpen &&
                createPortal(
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <ChatScreen />
                    </Modal>,
                    document.body // appends modal to the body
                )}
        </>
    );
}
