import Branding from "./Branding";
import Menu from "./Menu";

export default function Sidebar(props: any) {

    return (
        <div className={`flex flex-col gap-5`}>
            <Branding></Branding>
            <Menu></Menu>
        </div>
    )
}