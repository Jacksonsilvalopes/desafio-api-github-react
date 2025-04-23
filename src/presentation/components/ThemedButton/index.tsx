

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
title:string;

}
function ThemedButton({title, ...rest }: Props) {
    return (
        <button type="submit"
            className="bg-primary mt-6 mb-13.5 w-[101px] rounded-sm h-10 text-white text-base"
            {...rest}
        >{title}</button>
    )
}

export default ThemedButton