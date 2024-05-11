const Button = ({ text, onClick, variant }) => {
  return (
    <button
      className={`bg-black text-white p-2 rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
