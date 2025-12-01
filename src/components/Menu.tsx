import { Icon24Hours, Icon3dCubeSphere, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <div
            className={`
                flex flex-col justify-start w-72
                text-3xl p-2 gap-2
            `}
        >
            <MenuItem icon={<IconHome/>} label="Home" url="/"  />
            <MenuItem icon={<Icon24Hours/>} label="Pagina #1" url="pagina" />
            <MenuItem icon={<Icon3dCubeSphere/>} label="Pagina #2" url="page" />
        </div>
    )
}