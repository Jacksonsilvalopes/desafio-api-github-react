import axios from "axios"
import { BASE_URL } from "../../../../api/githubApi"
import { GithubInterface } from "../../../infrastructure/interfaces/github-interface"
import { GthubResponse } from "../../../infrastructure/interfaces/github-response"
import { GithubMapper } from "../../../mappers/GithubMapper"


export const getPerfilGithub = async (user: string) => {

    try {
        const {data} = await axios.get<GthubResponse>(BASE_URL+user)
        const perfil : GithubInterface = GithubMapper.resumeTheGithub(data)     

        return  perfil;

    } catch (error) {
        console.log(error)
        throw'Notfound'
    }

}