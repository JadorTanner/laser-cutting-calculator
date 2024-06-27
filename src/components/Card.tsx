import React from "react";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div className="max-w-xl flex flex-col items-start border rounded-xl p-4">
      {children}
    </div>
  );
};

export default Card;
