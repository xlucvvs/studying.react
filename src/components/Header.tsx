export default function Header(props: any) {
    return (
        <div className={`
            flex flex-col justify-center items-center
            bg-purple-600 rounded-lg ${props.className ?? ''}
        `}>
            <h1 className="text-3xl font-black">{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}