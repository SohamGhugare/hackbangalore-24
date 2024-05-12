const Label = ({ htmlFor, label }) => {
  return (
    <div>
      <label className="capitalize font-semibold" htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

export default Label;
