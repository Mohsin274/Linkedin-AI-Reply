interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export default function Modal({
    isOpen,
    onClose,
    children,
}: Readonly<ModalProps>) {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="
                fixed h-full w-full inset-0 bg-black bg-opacity-50
                flex items-center justify-center z-50
            "
            onClick={handleOverlayClick}
        >
            <div
                className="
                w-[870px] h-fit p-[26px] gap-[26px] bg-[#F9FAFB] rounded-[15px]
                shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]
            "
            >
                {children}
            </div>
        </div>
    );
}
