'use client';

type Colors = 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
// Maybe we can use the tailwind config to get the colors
// and use an algorithm to determine the text color

interface Props {
  children: string;
  color?: Colors;
  textColor?: Colors;
  onClick?: () => void;
}

const commonClasses = 'rounded-sm px-4 py-1.5';
const hoverClasses = 'hover:opacity-90';
const clickClasses = 'active:opacity-100';

const Button = ({ children, color, textColor, onClick }: Props) => {
  const colorClass = `bg-${color ?? 'primary'}`;
  const textColorClass = `text-${textColor ?? 'white'}`;
  return (
    <button
      onClick={onClick}
      className={`
        ${colorClass}
        ${textColorClass}
        ${commonClasses}
        ${hoverClasses}
        ${clickClasses}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
