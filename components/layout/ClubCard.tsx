import Image from "next/image";
import ButtonArrow from "../ui/ButtonArrow";

interface ClubCardProps {
  name: string;
  description: string;
  imageUrl: string;
  nameUrl: string;
}

export default function ({ name, description, imageUrl, nameUrl }: ClubCardProps) {
  return (
    <div className="bg-white flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10 p-6 sm:p-10 my-5 rounded-[30px] sm:rounded-[40px] shadow-md">
      <div className="pt-0 sm:pt-0">
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={name}
          className="rounded-xl  sm:rounded-full w-full sm:w-auto"
        />
      </div>
      <div className="flex-3">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-2">{name}</h3>
        <p className="text-lg sm:text-xl text-[#444]">{description}</p>
      </div>
      <div className="">
        <ButtonArrow href={"clubs/"+nameUrl} variant="white" />
      </div>
    </div>
  );
}
