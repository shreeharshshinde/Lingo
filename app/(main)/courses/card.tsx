import { cn } from "@/lib/utils";

type Props = {
    title: string;
    imageSrc: string;
    id: number;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
};

export const Card = ({ title, imageSrc, id, onClick, disabled = false, active = false }: Props) => {
    return (
        <div className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]", disabled && "pointer-events-none opacity-50")} onClick={() => onClick(id)}>
            Card
        </div>
    );
};