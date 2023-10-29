import Layout from '@/layouts';
import React from 'react';

function Asset() {
  return <div>Asset</div>;
}

Asset.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Asset;
