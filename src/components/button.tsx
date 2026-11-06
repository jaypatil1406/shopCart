interface ButtonProps {
  text: string;
  variant: "primary" | "secondary" | "danger" | "outline";
  onClick: () => void;
}

function Button({ text, variant, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`custom-button ${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

