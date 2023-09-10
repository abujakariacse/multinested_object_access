"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, Setcategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      let data = await fetch("products.json");
      data = await data.json();
      Setcategories(data);
      console.log(categories);
    }
    loadData();
  }, [categories]);
  return (
    <div>
      <div>
        <ul className="list-disc">
          {categories.map((category) => (
            <li key={category.id}>
              <div>{category.name}</div>
              <ul className="ms-7 list-disc">
                {category?.subCategories?.map((subCategory) => (
                  <li key={subCategory.id}>
                    <div>{subCategory?.subName}</div>
                    <ul className="ms-7">
                      {subCategory?.lastCategories?.map((lastCategory) => (
                        <li key={lastCategory.id}>
                          <div>{lastCategory.lastName}</div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
