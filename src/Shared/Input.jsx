const Input = (props) => {
  const className = "" + props.className;
  return (
    <div>
      <div className={className}>
        <label className="label">
          <span className="label-text">{props.label}</span>
        </label>
        <input {...props} className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  );
};

export default Input;
