import React, {useEffect} from "react";
import Header from "components/Header";

const MainLayout = ({header, children}) => {
  return (
    <div>
      {header && (
        <Header
          title={header.title}
          noBackBtn={header.noBackBtn}
        />
      )}
      {children}
    </div>
  );
}

export default MainLayout; 