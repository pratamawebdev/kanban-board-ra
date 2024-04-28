const Container = ({ children }) => {
  return (
    <div className="max-w-[1400px] bg-layout px-6 py-6 min-h-screen flex gap-4 overflow-x-auto wrapper-scroller">
      {children}
    </div>
  );
};

export default Container;
