import Image from "next/image";
function Logo(props: any) {
const {renderDefault, title} = props;
  return (
    <div className="flex items-center space-x-2">
        <Image className="rounded-full object-cover" height={50} width={50} src={"https://res.cloudinary.com/dvtw2zpbt/image/upload/v1678214753/profile_ym3lgs.png"} alt="logo"/>
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo