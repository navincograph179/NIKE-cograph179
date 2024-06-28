
const Button = ({label, iconURL}) => {
  {/* We are passing props label and iconURL to hero.jsx */}
  return (
    <button className="flex justify-center items-center gap-2
    px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red
    rounded-full text-white border-coral-red">
        {label}
        {/* if iconURL and then only show the image  */}
        {iconURL && <img 
        src= {iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full
        h-5 w-5" 
        />}
    </button>
  )
}

export default Button