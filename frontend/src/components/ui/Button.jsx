const Button = ({ text, onClick, variant }) => {
  return (
    <button
      className={`bg-black text-white w-24 text-center p-2 rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
