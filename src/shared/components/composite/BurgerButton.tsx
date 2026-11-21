interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className="flex h-10 w-10 items-center justify-center text-[#224F34] lg:hidden"
    >
      {isOpen ? (
        <span className="text-[30px]">×</span>
      ) : (
        <span className="text-[30px]">☰</span>
      )}
    </button>
  );
};

export default BurgerButton;
