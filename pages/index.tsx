import { GridColDef } from '@mui/x-data-grid';

import { GET_TODOS } from '../utils/APIConstants';
import BasicTable from './components/table';

const Home = ({ data }) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'title', headerName: 'Title', width: 630 },
    { field: 'userId', headerName: 'User Id', width: 130 },
    {
      field: 'completed',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      width: 160,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-items-center min-h-screen p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div>
          <div>
            <h1 className="text-base font-semibold my-4">Table Data</h1>
          </div>
          <BasicTable data={data} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const response = await fetch(GET_TODOS);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
