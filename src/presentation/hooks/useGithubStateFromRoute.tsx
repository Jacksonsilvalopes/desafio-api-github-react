import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useGithubStateFromRoute() {
    const { state } = useLocation();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [followers, setFollowers] = useState("");
    const [url, setUrl] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (state) {
            setName(state.name || "");
            setLocation(state.location || "");
            setFollowers(state.followers || "");
            setUrl(state.url || "");
            setAvatar(state.avatar || "");
        }
    }, [state]);

    return { name, location, followers, url, avatar };
}


export default useGithubStateFromRoute