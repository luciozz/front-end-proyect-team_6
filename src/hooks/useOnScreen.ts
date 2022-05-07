import { useState, useEffect } from "react";

const useOnScreen = (ref: any, rootMargin = "0px", isObserveFunction: Function) => {
	const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  if (isObserveFunction && isVisible) {
      isObserveFunction();
  }
  return isVisible;
};


export default useOnScreen