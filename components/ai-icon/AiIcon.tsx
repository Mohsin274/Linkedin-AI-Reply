import wand from "@/public/icon/wand.svg";

export default function AiIcon({ onClick }: Readonly<{ onClick: () => void }>) {
    return (
        <button
            className="
                w-[32px] h-[32px] pt-[9.07px] pr-[8.53px] pb-[9.07px] pl-[8px]
                rounded-[200px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]
            "
            onClick={onClick}
        >
            <img src={wand} alt="ai icon" />
        </button>
    );
}
