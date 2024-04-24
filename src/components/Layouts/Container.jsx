const Container = ({ children }) => {
  return (
    <div className="max-w-[1400px] bg-layout px-6 py-6 min-h-screen">
      {children}
    </div>
  );
};

export default Container;
