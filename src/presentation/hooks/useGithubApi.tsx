import { useState } from "react";
import { getPerfilGithub } from "../../core/actions/github/get-perfil-github";
import { useNavigate } from "react-router-dom";



function useGithubApi() {


    const [isUser, setIsUser] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        console.log('aqui')
        e.preventDefault();
        const user = await getPerfilGithub(isUser)  


        if (user.location != undefined || user.location != null) {
            navigate("/before/perfil", {
                state: {
                  url: user.url,
                  location: user.location,
                  followers: user.followers,
                  name: user.name,
                  avatar: user.avatar_url,
                },
              });
            
        } else {
            notFound()
        }

    };


  
    const notFound = () => {
        navigate("/before/notfoundPerfil")
    }


    return {   

        setIsUser,
        handleSubmit,


    }
}

export default useGithubApi