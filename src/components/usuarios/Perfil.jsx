import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Perfil = () => {

    const usuario = useContext(UserContext);

    return (
        <div>
            <h1>Perfil de {usuario.name}</h1>
            <div>
                Usuario desde {usuario.registered}
            </div>
        </div>
    )
}
export default Perfil