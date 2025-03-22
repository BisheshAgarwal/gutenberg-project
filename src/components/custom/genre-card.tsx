interface GenreCardProps {
  genre: string;
}

import Fiction from "@/assets/Fiction.svg";
import Next from "@/assets/Next.svg";

const GenreCard = ({ genre = "" }: GenreCardProps) => {
  return (
    <div className="bg-white rounded-sm px-[10px] h-[50px] shadow-[0_2px_5px_0_rgba(211,209,238,0.5)] flex items-center">
      <img src={Fiction} alt="Fiction Icon" className="w-6 h-6 mr-2" />
      <p className="font-semibold text-xl uppercase">{genre}</p>
      <img src={Next} alt="Next Icon" className="w-4 h-4 block ml-auto" />
    </div>
  );
};

export default GenreCard;
