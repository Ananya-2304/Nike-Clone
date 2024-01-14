const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className = {`flex justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat text-lg leading-none
     ${backgroundColor?`${backgroundColor}${textColor}${borderColor}`:'bg-coral-red  text-white border-coral-red'} ${fullWidth && 'w-full'}`}>
    {label}
    {iconURL && <img src = {iconURL}
    alt = "buttonImage"
    className = "ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button