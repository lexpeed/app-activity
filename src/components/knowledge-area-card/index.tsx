import { ReactNode } from "react";

interface Props {
  description: string;
  icon?: ReactNode;
}

const KnowledgeAreaCard = ({ description, icon }: Props) => {
  return (
    <div className="w-full flex border-2 rounded-md items-center px-3 py-2.5 gap-3">
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
        {icon}
      </div>
      <p className="line-clamp-2">{description}</p>
    </div>
  );
};

export default KnowledgeAreaCard;
