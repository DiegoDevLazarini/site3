import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import dragao from "../imgs/img_header/dragao.png"
import './Login.css'
import Cadastro from "./Cadastro.jsx"

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

const login = () => {
  return (
    <div className="container_login">
      <header>
        <img className="dragao_logo" src={dragao} alt="" />
      </header>

      <div className="div_login">
        <div className="login">
            <h1>Login</h1>
            <input type="email" placeholder="E-mail" className="email" required/>

            <InputPassword />
            <a  className="lost_pass" href="#">Esqueceu a senha?</a>
            <button className="button_login">Login</button>
            <hr />
            <p>Não tem uma conta?<a href={Cadastro}>Registrar</a></p>
        </div>
      </div>

    </div>
  )
}

export default login
