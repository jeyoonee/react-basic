import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [products, isLoading, error] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked((prev) => !prev);

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show only 🔥 Sale</label>

      {isLoading && <p>⏳ 데이터 로딩 중...</p>}
      {error && <p style={{ color: "red" }}>❌ 에러 발생: {error}</p>}
      {!isLoading && !error && products.length > 0 && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
