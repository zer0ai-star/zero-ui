import { Button } from "../ui/button";

const ButtonBackgroundShine = () => {
    return (
        <Button className='inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full  bg-[linear-gradient(110deg,#FF7F50,45%,#FFA500,55%,#FF7F50)] bg-[length:250%_100%] px-8 py-2 text-2xl font-medium text-white'>
            Get Started
        </Button>
    );
};

export default ButtonBackgroundShine;
