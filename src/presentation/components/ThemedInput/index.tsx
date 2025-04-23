
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  username?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  classNameLabel?: string;
  classNameDiv?:string

}

function ThemedInput({ classNameDiv, classNameLabel, value, username, name, id, placeholder, className, ...rest }: Props) {
  return (
    <div className={`relative my-2 ${classNameDiv} }`}>
      <label
        htmlFor={username}
        className={`absolute  font-medium transition-all duration-300 left-5 top-2 ${classNameLabel} `}
      >
        {username}
      </label>
      <div className="flex items-center rounded-md pl-3 bg-white outline-1 -outline-offset-1 outline-gray-300 ">
        <input
          type="text"
          {...rest} value={value} name={name} id={id}
          className={`py-2 w-full  focus:outline-none focus:ring-0 ${className} `}
          placeholder=" " // Definindo um espaço para o comportamento visual de um input
        />
      </div>
    </div>

  )
}

export default ThemedInput