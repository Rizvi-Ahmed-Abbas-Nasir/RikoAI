import React from 'react';

interface EmptyProps {
  label: string;
}

const Empty: React.FC<EmptyProps> = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <img src="/empty.png"  alt="Empty" />
      </div>
      <p className="text-muted-foreground text-[1rem] text-center">{label}</p>
    </div>
  );
};

export default Empty;
