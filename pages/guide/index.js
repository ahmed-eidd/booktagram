import React from 'react'
import WideCard from '../../components/Card/WideCards/WideCard';
import Layout from '../../components/Layout/Layout';

const index = () => {
  return (
    <Layout> 
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 72.5rem)', justifyContent: 'center'}}>
        <WideCard />
      </div>
    </Layout>
  )
}

export default index;
