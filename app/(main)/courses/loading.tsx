import { Loader } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex w-full items-center justify-center h-full">
            <Loader className="animate-spin h-8 w-8 text-muted-foreground" />
        </div>
    );
}

export default Loading;