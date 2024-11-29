
import "./Cadastro.css"
import dragao from "../imgs/img_header/dragao.png"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"


function InputPassword(){
    const {isShow, setIsShow} = useState(false)

    const handlePassword = () => setIsShow(!isShow)

    return(
    <div className="div_senha">
        <input 
           type={isShow ? "text" : "password"} 
           placeholder="Senha" className="senha" required
        />
        <button className="hidden" onClick={handlePassword} type="button" >
            {isShow && <EyeOff size={18}  />}
            {!isShow && <Eye size={18}  />}
        </button>
    </div>    
    )
}

const Cadastro = () => {
  return (
    <div className="container_cadastro">
      <header>
        <img className="dragao_logo" src={dragao} alt="" />
      </header>

      <div className="div_cadastro">
        <div className="cadastro">
            <h1>Cadastro</h1>
            <input type="name" placeholder="Nome" className="nome" required/>
            <input type="email" placeholder="E-mail" className="email" required/>

            <InputPassword />
            <button className="button_cadastro">Cadastrar</button>
            <hr />
            <p>Já tem uma conta?<a href="">Entrar</a></p>
        </div>
      </div>

    </div>
  )
}

export default Cadastro