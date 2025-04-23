import { Link } from "react-router-dom"


function HomeBody() {
  return (
    
      <main className="   w-[90vw] justify-self-center mt-6.5" >
        <h1 className="text-black font-bold text-5xl">Desafio Github API</h1>
        <h2 className="text-2xl text-quaternary">DevSuperior - Escola de programação</h2>
        <Link to="/before">
        
        <button className="bg-primary mt-7 w-[101px] rounded-sm h-10 text-white text-base">Começar</button>
        </Link>
      </main>
    
  )
}

export default HomeBody