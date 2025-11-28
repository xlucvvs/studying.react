import '../app/globals.css'
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function Page(props: any) {
    return (
        <div className={`
            flex gap-4 p-4 h-screen
        `}>
            <Menu />

            <div className={`flex flex-col flex-1 gap-4`}>
                <Header 
                    title={props.title} 
                    subtitle={props.subtitle}
                    className="h-44"
                />
                <Content> {props.content} </Content>
                <Footer 
                    left="XLUCVVS" 
                    right="The dark node of the force."
                />
            </div>
            
        </div>
    );
}
