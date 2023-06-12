const MenuButton = ({ setCategory, data, active, category }) => {
  return (
    <button
      onClick={() => setCategory(data)}
      className={`${
        active ? "bg-slate-100" : ""
      } ${""} hover:bg-slate-100 w-full flex h-12 border-2 border-slate-800`}
    >
      <div className="w-1/5 text-2xl">+</div>
      <div className={`${""} h-auto  w-4/5 top-4 `}>
        <h1 className="text-xl text-black text-right mr-6">{category}</h1>
      </div>
    </button>
  );
};

export default MenuButton;
