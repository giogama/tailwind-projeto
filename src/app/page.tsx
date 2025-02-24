import { Pagina } from "@/components/template/Pagina";

//My TailWind CSS Intellisense plugin just isn't working on my VSCode
//https://stackoverflow.com/questions/61343447/my-tailwind-css-intellisense-plugin-just-isnt-working-on-my-vscode


export default function Home() {
  return (
    <Pagina>
      <div className="text-3xl font-bold text-red-700">Início</div>
      <button className="botao">Salvar</button>
    </Pagina>
  );
}
