
interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "danger" | "outline";
  onClick: () => void;
}

function Button({ text, variant, onClick }: ButtonProps) {
  const buttonClass =
    variant === "primary"
      ? "primary-button"
      : variant === "secondary"
      ? "secondary-button"
      : variant === "danger"
      ? "danger-button"
      : "outline-button";

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
