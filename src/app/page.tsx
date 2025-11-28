
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={`
      flex flex-col gap-4
      p-4 h-screen
      bg-yellow-600
    `}>
      <Header 
        title="XLUCVVS"
        subtitle="The dark node of the force."
      />

      <Content/>
      
      <Footer/>
    </div>
  );
}
