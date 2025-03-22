interface BookCardProps {
  image: string;
  title: string;
  author: string;
}

const BookCard = ({ image, title, author }: BookCardProps) => {
  return (
    <div className="w-[114px] h-[162px]">
      <div className="h-full shadow-[0_2px_5px_0_rgba(211,209,238,0.5)] rounded-[8px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[8px]"
        />
      </div>
      <p className="mt-2 text-[12px] text-grey-tertiary uppercase">{title}</p>
      <p className="text-[12px] text-grey-secondary">{author}</p>
    </div>
  );
};

export default BookCard;
