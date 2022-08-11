import React from 'react';
import { useRouter } from 'next/router';

const SelectedProjectOfClient = () => {
  const router = useRouter();
  console.log('SelectedProjectOfClient', router.query);
  return (
    <div>
      SelectedProjectOfClient: {router.query.id} - {router.query.projectId}
    </div>
  );
};

export default SelectedProjectOfClient;
