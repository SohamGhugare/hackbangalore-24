const Label = ({ htmlFor, label }) => {
  return (
    <div>
      <label className="capitalize" htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};

export default Label;
