export default function Title() {
    return (
        // graciously swiped from
        // https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/
        <div className='order-4 [text-wrap:balance] bg-clip-text flex flex-row justify-center'>
            <p className='px-2 text-2xl'>Software</p>
            <span className='h-[calc(theme(fontSize.2xl)*theme(lineHeight.normal))] md:h-[calc(theme(fontSize.2xl)*theme(lineHeight.normal))] overflow-hidden'>
                <ul className="animate-text-slide text-2xl md:text-2xl dark:text-white">
                    <li>Engineer</li>
                    <li>Developer</li>
                    <li>Designer</li>
                    <li>Guy</li>
                    <li aria-hidden="true">Engineer</li>
                </ul>
            </span>
        </div>
    );
}