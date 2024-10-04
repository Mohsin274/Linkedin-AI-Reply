import { ChatBubbleProps } from "@/types";

export default function ChatBubble({
    content,
    type = "prompt",
}: Readonly<ChatBubbleProps>) {
    return (
        <div
            className={`
                w-[631px] px-4 py-4 text-gray-500
                ${type === "prompt"
                    ? "bg-[#DFE1E7] ml-auto"
                    : "bg-[#DBEAFE] mr-auto"
                }
                rounded-[12px]
            `}
        >
            <p className="w-[599px] h-auto font-inter text-[24px] font-normal leading-[36px] text-left">
                {content}
            </p>
        </div>
    );
}
