interface BookCardProps {
  image: string;
  title: string;
  author: string;
}

const BookCard = ({ image, title, author }: BookCardProps) => {
  return (
    <div className="w-[114px]">
      <div className="shadow-[0_2px_5px_0_rgba(211,209,238,0.5)] rounded-[8px] h-[162px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-[8px] shadow-[0_2px_5px_0_rgba(211,209,238,0.5)]"
        />
      </div>
      <p className="mt-2 text-[12px] font-semibold text-grey-tertiary uppercase">
        {title}
      </p>
      <p className="text-[12px] font-semibold text-grey-secondary">{author}</p>
    </div>
  );
};

export default BookCard;
