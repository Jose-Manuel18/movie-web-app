interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="mx-6">
      <div
        onClick={onClick}
        className="flex bg-notBlue lg:w-[200px] lg:h-14 w-full h-16 items-center justify-center rounded-md"
      >
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};
