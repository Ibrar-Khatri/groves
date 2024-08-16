const Button = ({ text, className = "" }) => {
  return (
    <div className="button-style">
      <button className={className}>{text}</button>
    </div>
  );
};

export default Button;
