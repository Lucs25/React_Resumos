import React from "react";
import ReactDOM from "react-dom/client";
import Exemplo01 from "./Hook-useState/Exemplo01";
import Exemplo02 from "./Hook-useState/Exemplo02";
import Exemplo03 from "./Hook-useState/Exemplo03";
import Exemplo04 from "./Hook-useState/Exemplo04";
import Effect01 from "./Hook-useEffect/Exemplo01_effect";
import Effect02 from "./Hook-useEffect/Exemplo02_effect";
import Context01 from "./Hook-useContext/Exemplo01_Context";
import Ref01 from "./Hook-useRef/Exemplo01_Ref";
import Reducer from "./Hook-useReducer/Exemplo01_Reducer";
import Memo from "./Hook-useMemo/Exemplo01_Memo";
import Callback01 from "./Hook-useCallback/Exemplo01_Callback";
import Callback02 from "./Hook-useCallback/Exemplo02_Callback";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Callback02 />
  </React.StrictMode>
);
