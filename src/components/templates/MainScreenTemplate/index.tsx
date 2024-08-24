import React from "react";

interface MainScreenTemplateProps {
  children: React.ReactNode;
}

const MainScreenTemplate: React.FC<MainScreenTemplateProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default MainScreenTemplate;
