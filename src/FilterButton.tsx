import type { FilterButtonProps } from "./types";
import { useTheme } from "./ThemeContext";

function FilterButton({
  text,
  value,
  setFil,
  activeFilter,
}: FilterButtonProps){
  const {theme} = useTheme();
  return(
    <button
      className={`${theme} ${activeFilter === value ? "active-button" : ""}`}
      onClick={() => setFil(value)}
    >
      {text}
    </button>
  );
}

export default FilterButton;