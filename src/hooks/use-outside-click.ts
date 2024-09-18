import { RefObject, useEffect } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLInputElement>,
  onClickOutside: () => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLInputElement)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClickOutside, ref]);
};

export default useOutsideClick;
