import { Helmet } from 'react-helmet-async';
import DataEntryForm from './DataEntryForm';
// ----------------------------------------------------------------------

export default function InputPage() {
  return (
    <>
      <Helmet>
        <title> Data Entry </title>
      </Helmet>

      <DataEntryForm />
    </>
  );
}
