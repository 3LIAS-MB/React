export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleUpdate = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleUpdate} className={className}>
      {children}
    </div>
  );
};
