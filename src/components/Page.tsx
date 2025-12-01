import '../app/globals.css'
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from './Sidebar';

interface PageProps {
    title: string
    subtitle: string
    children: any
}

export default function Page(props: PageProps) {
    return (
        <div className={`flex h-screen`}>
            <Sidebar />
            <div className={`flex flex-col flex-1`}>
                <Header 
                    title={props.title} 
                    subtitle={props.subtitle}
                    className="h-16 bg-linear-to-r bg-zinc-900"
                />
                <Content> {props.children} </Content>
                <Footer 
                    left="Feito com ❤️ por xlucvvs" 
                    right={`The dark node of the force, ${new Date().getFullYear()}`}
                />
            </div>
        </div>
    );
}
