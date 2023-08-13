import "./Filterheader.css";

export const Filterheader = () =>{
    return(
        <header className="filterheader">
      <select
        value={filters.category}
        name="category"
        onChange={filterChangeHandler}
      >
        <option value="all">all</option>
        {departments?.map((department) => (
          <option value={department}>{department}</option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={filters.lowStockItem}
          name="lowStockItem"
          onChange={filterChangeHandler}
        />
        Low Stock Items
      </label>

      <select value={filters.sort} name="sort" onChange={filterChangeHandler}>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
    </header>
  );
};