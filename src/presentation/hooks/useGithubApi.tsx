import { useState } from "react";
import { getPerfilGithub } from "../../core/actions/github/get-perfil-github";
import { useNavigate } from "react-router-dom";



function useGithubApi() {


    const [isUser, setIsUser] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        getPerfilGithub(isUser).then(response => {
            navigate("/before/perfil", {
                state: {
                    url: response.url,
                    location: response.location,
                    followers: response.followers,
                    name: response.name,
                    avatar: response.avatar_url,
                },
            });

        }).catch(() => {
            navigate("/before/notfoundPerfil")
        })
    }  

        return {
            setIsUser,
            handleSubmit,
        }
    }

    export default useGithubApi