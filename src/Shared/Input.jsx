const Input = (props) => {
  const className = "border h-9 w-96" + props.className;
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{props.label}</span>
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Input;
