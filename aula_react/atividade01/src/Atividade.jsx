import './Atividade.css';
import Logo from './Img/React-icon.svg.png' 
export function Atividade(){
  return(
    <>
      <div id='topo'>
        
        <h1>Sobre React </h1>
        <img id='logo' src={Logo} alt="Logo React" />
      
      </div>
      
      <p>O React (ou ReactJS) é uma biblioteca JavaScript de código aberto, desenvolvida pelo Facebook, utilizada para a construção de interfaces de usuário (UIs) em páginas web (o chamado front-end).</p>

      <ol>
        <li><p>Biblioteca, não Framework: É importante notar que o React se define como uma biblioteca, ou seja, um conjunto de funcionalidades com um foco específico (a UI), e não um framework completo, que dita toda a estrutura do projeto.</p></li>

        <li><p>Foco em Componentes: A ideia central do React é criar componentes — partes de código independentes e reutilizáveis que descrevem uma parte da interface (como um botão, um menu de navegação ou um card de produto). Esses componentes são combinados para formar a interface completa</p>.</li>

        <li><p>Reatividade: O "React" vem da sua capacidade de reagir a mudanças de dados. Quando os dados (chamados de estado) de um componente mudam, o React se encarrega de atualizar de forma eficiente apenas as partes necessárias da UI, sem precisar recarregar a página inteira.</p></li>

        <li><p>Virtual DOM (DOM Virtual): Para otimizar o desempenho, o React usa um Virtual DOM. Ele mantém uma cópia do DOM (Document Object Model) real da página na memória e, quando há uma mudança, ele a compara com a versão anterior para determinar a maneira mais eficiente de atualizar o DOM real.</p></li>
        <li>
          <p>JSX: Frequentemente usado em conjunto com o React, o JSX é uma extensão de sintaxe que permite escrever código parecido com HTML dentro do JavaScript, facilitando a criação dos componentes da UI.</p></li>
      </ol>

        <p>Em resumo, o React é uma ferramenta muito popular no desenvolvimento web para criar interfaces de usuário dinâmicas, rápidas e escaláveis, baseadas em componentes reutilizáveis. Ele também é a base para o React Native, que permite criar aplicativos móveis nativos usando o mesmo conceito.</p>
    
    </>
  )
  
}