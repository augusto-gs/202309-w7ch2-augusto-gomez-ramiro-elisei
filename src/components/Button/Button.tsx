interface ButtonProps {
  buttonText: "+" | "-" | "reset";
  actionOnClick: () => void;
}

const Button = ({
  buttonText: buttonText,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button className="button" onClick={actionOnClick}>
      {buttonText}
    </button>
  );
};

export default Button;
