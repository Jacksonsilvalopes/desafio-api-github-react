
import ThemedInput from "../../../presentation/components/ThemedInput";
import GithubStateFromRoute from "../../../presentation/hooks/useGithubStateFromRoute";


function Perfil() {

  const { name, location, followers, url, avatar } = GithubStateFromRoute();

  return (
    <main className="flex justify-center">
      <div className="flex-1 p-4 w-[90vw] mt-10 bg-tertiary">

        <div className="flex flex-row justify-around h-73 items-center">
          <div className="">
            {avatar && <img src={avatar} className=" w-62 h-62  object-cover" />}
          </div>

          <div className=" flex-col bg-white w-[66vw] h-62 rounded-b-sm">
            <p className="px-5 text-primary mt-1 font-medium">Informações</p>
            <ThemedInput
              username="Perfil:"
              id="Perfil:"
              type="text"
              classNameLabel="text-quinary"
              className=" px-3.5 pl-13 text-blue-600 cursor-pointer"
              classNameDiv='px-3.5 mt-5'
              name="isUrl"
              value={url ?? ""}
              onClick={() => window.open(url, "_blank")}
              readOnly
            />
            <ThemedInput
              username="Seguidores:"
              id="Seguidores:"
              classNameLabel="text-quinary"
              className=" px-3.5 pl-24 text-quinary left-10"
              classNameDiv='px-3.5 '
              name="isFollowers"
              value={followers ?? ""}
              readOnly
            />
            <ThemedInput
              username="Localidade:"
              id="Localidade:"
              classNameLabel="text-quinary"
              className=" px-3.5 pl-24 text-quinary"
              classNameDiv='px-3.5 '
              name="isLocation"
              value={location ?? ""}
              readOnly

            />
            <ThemedInput
              username="Nome:"
              id="Nome:"
              classNameLabel="text-quinary"
              className=" px-3.5 pl-15 text-quinary"
              classNameDiv='px-3.5 '
              name="isName"
              value={name ?? ""}
              readOnly
            />

          </div>
        </div>
      </div>
    </main>
  )
}

export default Perfil