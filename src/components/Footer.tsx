interface FooterProps {
    left: string
    right: string
}


export default function Footer(props: FooterProps) {
    return (
        <div className={`
            flex justify-between items-center
            h-16 text-base px-10 bg-zinc-900
            border-t border-zinc-800 text-zinc-500
        `}>
            <span>{props.left}</span>
            <span>{props.right}</span>
        </div>
    )
}