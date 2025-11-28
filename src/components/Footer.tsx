export default function Footer(props: any) {
    return (
        <div className={`
            flex flex-row justify-between items-center
            rounded-lg
            bg-cyan-600
        `}>
            <span>{props.left}</span>
            <span>{props.right}</span>
        </div>
    )
}