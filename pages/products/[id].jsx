import React from 'react';
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  console.log(router);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
