const withBackground = (WrappedComponent) => {
  return (props) => (
    <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withBackground;
