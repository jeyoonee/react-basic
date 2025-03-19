import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true); // 요청 시작 전 로딩 상태 true
    setError(null); // 새로운 요청이 시작될 때 기존 에러 초기화

    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`); // 에러 발생 시;
        }
        return res.json();
      })
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((err) => {
        console.error("❌ 데이터 로딩 실패:", err);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesOnly]);

  return [products, isLoading, error];
}
