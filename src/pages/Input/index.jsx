import { Helmet } from 'react-helmet-async';

import InputForm from './InputForm';

// ----------------------------------------------------------------------

export default function InputPage() {
  return (
    <>
      <Helmet>
        <title> Input Page </title>
      </Helmet>

      <InputForm />
    </>
  );
}
