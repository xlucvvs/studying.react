import Page from "../components/Page";

export default function Pagina() {

    function executar() {
        console.log("cliquei no botão")
    }

    return (
        <div>
            <Page
                title="Page"
                subtitle="Descrição da Page"
            >
                <button
                    onClick={executar}
                    className={`  
                        bg-purple-500 px-4 py-2
                        text-white rounded-md
                        hover:bg-purple-600
                        text-lg
                    `}
                >
                    Teste
                </button>
            </Page>
        </div>
    );
}
