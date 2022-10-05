import { useId } from "react";

const useUniqueID = () => {
  const id = useId();
  return id;
};

// console.log(useId);

export default useUniqueID;
