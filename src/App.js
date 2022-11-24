import React, { Suspense } from 'react'
import Loader from './common/Loader';
import Routing from './Router/routing';

const App = () => {
  return (
    <Suspense fallback={<Loader />} >
      <Routing />
    </Suspense>
  );
}

export default App;
