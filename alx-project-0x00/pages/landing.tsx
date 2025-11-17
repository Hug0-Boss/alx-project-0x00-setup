import Card from "@/components/Card"
import Button from "../components/Button";

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>

            <Card />
            <Card />
            <Card />
            <Card />

            <div className="p-10 space-y-6">
                <h1 className="text-2xl font-bold">Button Variants</h1>

                {/* SIZE VARIANTS */}
                <div className="space-x-4">
                    <Button title="Small" styles="text-sm px-2 py-1" />
                    <Button title="Medium" styles="text-base px-4 py-2" />
                    <Button title="Large" styles="text-lg px-6 py-3" />
                </div>

                {/* SHAPE VARIANTS */}
                <div className="space-x-4">
                    <Button title="Rounded SM" styles="rounded-sm" />
                    <Button title="Rounded MD" styles="rounded-md" />
                    <Button title="Rounded FULL" styles="rounded-full" />
                </div>

                {/* COMBINED EXAMPLES */}
                <div className="space-x-4">
                    <Button title="Large Pill" styles="text-lg px-6 py-3 rounded-full" />
                    <Button title="Small Sharp" styles="text-sm px-2 py-1 rounded-sm" />
                </div>
            </div>
        </div>
    )
}
export default Landing