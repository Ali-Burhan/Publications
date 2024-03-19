import Image from "next/image"
const Selectpubllication = ({path,label}) => {
  return (
    <div className='flex flex-col gap-2 justify-center group cursor-pointer items-center'>
    <Image
   src={path}
    width={70}
    height={70}
    className="w-14 h-14 group-hover:scale-110 transition-all duration-250"
    />
    <p className="font-semibold group-hover:text-[var(--primary-color)]">{label}</p>
</div>
  )
}

export default Selectpubllication