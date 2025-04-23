import { GithubInterface } from "../infrastructure/interfaces/github-interface"
import { GthubResponse } from "../infrastructure/interfaces/github-response"


export class GithubMapper {

    static resumeTheGithub =(githubTotal:GthubResponse ):GithubInterface =>{
        return {
            url: githubTotal.url,
            followers: githubTotal.followers,
            location:githubTotal.location,
            name:githubTotal.name,
            avatar_url: githubTotal.avatar_url,
        }
    }   
  
}

