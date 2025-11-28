import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div className={`
            flex flex-col justify-start items-center w-52
            bg-emerald-500 rounded-lg text-3xl p-2 gap-2
        `}>
            <MenuItem label="Home" url="home" />
            <MenuItem label="Pagina #1" url="pagina" />
        </div>
    )
}