import Page from "../components/Page";

export default function Home() {
    return (
        <div>
            <Page
                title="Home"
                subtitle="Descrição do Home"
                content={<p>Sou o home</p>}
            />
        </div>
    );
}
