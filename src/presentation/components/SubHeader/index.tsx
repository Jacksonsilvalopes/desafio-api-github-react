
import ThemedInput from '../ThemedInput'
import ThemedButton from '../ThemedButton'
import useGithubApi from '../../hooks/useGithubApi';

function SubHeader() {

    const {
        handleSubmit,
        setIsUser,

    } = useGithubApi();


    return (
        <header className=" flex  w-[90vw] justify-start items-center h-67.5 mt-8 bg-secondary">
            <div className="">

                <form onSubmit={handleSubmit} className="flex-1 flex-col ml-8 mt-10 ">
                    <h1 className="text-4xl font-medium text-senary">Encontre um perfil Github</h1>
                    <ThemedInput
                        username="."
                        id="."
                        name="isUser"
                        classNameLabel="text-white"
                        className='h-10 pl-3 text-quinary '
                        classNameDiv='w-74.5 '
                      
                        onChange={(e) => setIsUser(e.target.value)}
                    />
                    <ThemedButton
                        title='Encontrar'
                    />
                </form>
            </div>
        </header>
    )
}

export default SubHeader

