"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between mt-12">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-brightGray"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        <select
          name="cat"
          id="cat"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-brightGray"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name="all"
          id="all"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-brightGray"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div>
        <select
          name="sort"
          id="sort"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-brightGray"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc-price">Price (low to high)</option>
          <option value="desc-price">Price (high to low)</option>
          <option value="asc-lastUpdated">Newest</option>
          <option value="desc-lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
