const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto	px-5 max-w-screen-lg ${className}`}>{children}</div>
  );
};

export default Wrapper;
