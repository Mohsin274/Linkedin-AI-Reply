interface ButtonProps {
    label: string;
    icon?: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

export default function Button({
    label,
    icon,
    variant = "primary",
    onClick,
}: Readonly<ButtonProps>) {
    return (
        <button
            onClick={onClick}
            className={`
                w-fit flex gap-3 items-center px-6 py-3 rounded-[8px]
                ${variant === "primary"
                    ? "bg-[#3B82F6] text-white border-2 border-[#3B82F6]"
                    : "bg-transparent text-gray-500 border-2 border-gray-500"
                }
                font-inter text-[24px] font-semibold leading-[29.05px]
            `}
        >
            {icon && <img src={icon} alt="Send" />}
            <span>{label}</span>
        </button>
    );
}
