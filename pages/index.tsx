import { useState, useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';

import { GET_TODOS } from '../utils/APIConstants';
import BasicTable from './components/table';

const Home = ({ data }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

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
      <div className="flex items-center justify-between min-h-screen p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className='w-full'>
          <div className="flex justify-between">
            <h1 className="text-base font-semibold my-4">Table Data</h1>
            <button
              onClick={() => setIsDarkMode((prev) => !prev)}
              className="toggle-button"
            >
              {isDarkMode ? (
                <Tooltip title="Enable Light Mode">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                  </svg>
                </Tooltip>
              ) : (
                <Tooltip title="Enable Dark Mode">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4.5a7.5 7.5 0 0 0 0 15a7.5 7.5 0 0 0 0-15zm0 13.5a6 6 0 1 1 0-12a6 6 0 0 1 0 12z" />
                  </svg>
                </Tooltip>
              )}
            </button>
          </div>
          <div className='w-full overflow-x-auto'>
          <BasicTable data={data} columns={columns} isDarkMode={isDarkMode}/>
          </div>
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
