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
    <div className="bg-white flex justify-between items-center gap-10 my-5 p-10 rounded-[40px] shadow-md">
      <div className="">
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={name}
          className="rounded-full"
        />
      </div>
      <div className="flex-3">
        <h3 className="text-4xl font-semibold tracking-tight mb-2">{name}</h3>
        <p className="text-xl text-[#444]">{description}</p>
      </div>
      <div className="">
        <ButtonArrow href={"clubs/"+nameUrl} variant="white" />
      </div>
    </div>
  );
}
