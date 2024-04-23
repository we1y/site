import { useEffect } from "react";

const useScript = url => {

    useEffect(() => {const script = document.createElement("script");
    script.src = url;
    script.crossOrigin = "anonymous";
    script.className = "hh-script"
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };

    
  }, [url]);
}

export default useScript;

