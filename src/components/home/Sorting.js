import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="flex items-center justify-end bg-gray-100 my-10 p-5">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-white py-3 px-5"
      >
        <option className="!font-bold" disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="desc">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
