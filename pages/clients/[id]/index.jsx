import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientPage = () => {
  const router = useRouter();
  console.log('SelectedClientPage', router.query);
  return <div>SelectedClientPage: {router.query.id}</div>;
};

export default SelectedClientPage;
