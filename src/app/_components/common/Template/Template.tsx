import React, { ReactNode } from "react";

interface TemplateTypes {
  children: ReactNode;
}

const Template: React.FC<TemplateTypes> = ({ children }) => {
  return <div className="w-[1200px] mx-auto">{children}</div>;
};

export default Template;
