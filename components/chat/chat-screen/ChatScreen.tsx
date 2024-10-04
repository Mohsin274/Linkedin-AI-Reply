import { SetStateAction, useState } from "react";
import Button from "@/components/button/Button";
import Input from "../input/Input";
import ChatBubble from "../chat-bubble/ChatBubble";
import send from "@/public/icon/send.svg";
import arrowDown from "@/public/icon/arrow-down.svg";
import redo from "@/public/icon/redo.svg";
import { ChatBubbleProps } from "@/types";

export default function ChatScreen() {
    const [inputValue, setInputValue] = useState("");
    const [chatBubbles, setChatBubbles] = useState<ChatBubbleProps[]>([]);
    const [hasValue, setHasValue] = useState(false);

    const handleInputChange = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setInputValue(e.target.value);
    };

    const handleGenerate = () => {
        if (inputValue.trim()) {
            setChatBubbles((prev) => [
                ...prev,
                { id: 1, type: "prompt", content: inputValue },
                {
                    id: 2,
                    type: "response",
                    content:
                        "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
                },
            ]);
            setInputValue("");
            setHasValue(true);
        }
    };

    const handleInsert = () => {
        const messageInput = document.querySelector(
            ".msg-form__contenteditable"
        ) as HTMLElement; // Cast to HTMLElement
        if (messageInput && chatBubbles.length > 0) {
            const lastResponse = chatBubbles[chatBubbles.length - 1].content;

            const paragraphs = messageInput.querySelectorAll("p");

            if (paragraphs.length > 0) {
                const lastParagraph = paragraphs[paragraphs.length - 1];
                lastParagraph.innerText = lastResponse;
            } else {
                const newParagraph = document.createElement("p");
                newParagraph.innerText = lastResponse;
                messageInput.appendChild(newParagraph);
            }

            // dispatch input event to notify changes
            messageInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
    };

    return (
        <div className="flex flex-col gap-[26px]">
            <div className="flex flex-col gap-[26px]">
                {chatBubbles.map((bubble) => (
                    <ChatBubble
                        key={bubble.id}
                        type={bubble.type}
                        content={bubble.content}
                    />
                ))}
            </div>
            <Input value={inputValue} onChange={handleInputChange} />
            <div className="flex gap-[26px] ml-auto">
                {!hasValue ? (
                    <Button label="Generate" icon={send} onClick={handleGenerate} />
                ) : (
                    <>
                        <Button
                            label="Insert"
                            icon={arrowDown}
                            variant="secondary"
                            onClick={handleInsert}
                        />
                        <Button label="Regenerate" icon={redo} />
                    </>
                )}
            </div>
        </div>
    );
}
