import { Helmet } from 'react-helmet-async';

import OutputList from './OutputList';

export default function OutputPage() {
  return (
    <>
      <Helmet>
        <title> Output Page </title>
      </Helmet>

      <OutputList />
    </>
  );
}
