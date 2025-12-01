"use client";

import { IconBrandReact } from "@tabler/icons-react";
import Page from "../components/Page";

export default function Home() {


  return (
    <div>
      <Page
        title="React Foundamentals"
        subtitle="Bem vindo ao mundo do React"
      >
        
      <div className={`
        flex flex-col justify-center items-center
        w-full h-full text-zinc-500
      `}>
        <IconBrandReact size={200} stroke={1} />
        <span className="font-black ">Curso Fundamentos de React</span>
        <span className="text-sm">Aqui você vai aprender fundamentos sólidos da biblioteca React</span>
      </div>
      </Page>
    </div>
  );
}
