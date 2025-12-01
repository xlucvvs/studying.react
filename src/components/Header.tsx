interface HeaderProps {
    title: string
    subtitle: string
    className?: string
}

export default function Header(props: HeaderProps) {
    return (
        <div className={`
            flex flex-col justify-center px-5
            border-b border-zinc-700 
            ${props.className ?? ''}
        `}>
            <h1 className="text-2xl font-black">{props.title}</h1>
            <h2 className="text-small ">{props.subtitle}</h2>
        </div>
    )
}