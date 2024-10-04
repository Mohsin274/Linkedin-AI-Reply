interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ value, onChange }: Readonly<InputProps>) {
    return (
        <input
            type="text"
            placeholder="Your prompt"
            value={value}
            onChange={onChange}
            className="
                w-[818px] h-[61px] text-[24px] font-medium font-inter leading-[29.05px]
                text-left text-gray-500 px-4 py-1 rounded-[8px] border border-gray-200
                bg-white focus:outline-none
            "
        />
    );
}
