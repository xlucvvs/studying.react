import Page from "../components/Page";

export default function Pagina() {
    return (
        <div>
            <Page
                title="Pagina"
                subtitle="Descrição da págona"
                content={<p>Sou um conteudo</p>}
            />
        </div>
    );
}
