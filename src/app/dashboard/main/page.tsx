import { SimpleWidget } from "@/components";

export default function MainPage() {
    return (
        <div className=" text-black p-2">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Información General</span>

            <div className="flex flex-wrap items-center justify-center">
                <SimpleWidget />
                
            </div>

        </div>
    );
}