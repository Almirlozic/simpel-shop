"use client";
import { useState } from "react";

const SortPrice = () => {
  const [sort, setSort] = useState(() => {
    if (typeof window === "undefined") return "asc";
    const params = new URLSearchParams(window.location.search);
    return params.get("sort") || "asc";
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSort(value);

    const params = new URLSearchParams(window.location.search);
    params.set("sort", value);
    window.location.search = params.toString();
  };

  return (
    <select name="sort" value={sort} onChange={handleChange}>
      <option value="asc">Low - High</option>
      <option value="desc">High - Low</option>
    </select>
  );
};

export default SortPrice;
