import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (e: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div
      className={cn(
        "rounded-sm h-[40px] px-[10px] flex items-center bg-grey-primary focus-within:ring-1 focus-within:ring-primary transition-all",
        value && "ring-1 ring-primary"
      )}
    >
      <Search size={18} className="text-grey-secondary" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-montserrat text-grey-tertiary font-semibold text-[16px] border-none shadow-none focus-visible:ring-0 focus:ring-0 focus:outline-none w-full pl-2 placeholder:text-grey-secondary placeholder:font-medium"
        placeholder="Search"
      />
      {value && (
        <X
          size={22}
          className="cursor-pointer text-grey-secondary"
          onClick={() => onChange("")}
        />
      )}
    </div>
  );
};

export default SearchInput;
