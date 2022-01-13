import { useMediaQuery } from "react-responsive";

const useMedia = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1239px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1240px)" });
  return { isMobile, isDesktop };
};

export default useMedia;
