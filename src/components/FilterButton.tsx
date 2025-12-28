import type { FilterButtonProps } from "../functions/types";
import { useTheme } from "../functions/useTheme";

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