import Image from "next/image";
import Link from "next/link";

type CardProps = {
  imageUrl: string;
  name: string;
  description: string;
  languageLevel: string;
};

const Card = ({ imageUrl, name, description, languageLevel }: CardProps) => {
  return (
    <Link className="relative bg-zinc-800 rounded-md overflow-hidden" href='/chat'>
      <Image src={imageUrl} className="w-full h-full object-cover" alt={name} width={384} height={494} />
      <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-md bg-gradient-to-t from-black to-transparent">
        <h5 className="text-white font-bold">{name}</h5>
        <p className="text-zinc-300 text-opacity-70 text-sm font-bold">{description}</p>
        <p className="text-rose-500 text-sm font-bold">{languageLevel}</p>
      </div>
    </Link>
  );
};

export default Card;
