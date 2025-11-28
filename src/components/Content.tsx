export default function Content(props: any) {
    return (
        <div className={`
            flex justify-start flex-1 p-4
            bg-red-600 rounded-lg
        `}>
            {props.children}
        </div>
    )
}