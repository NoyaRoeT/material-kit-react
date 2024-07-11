import { useState } from 'react';

import Box from '@mui/material/Box';

import NavBar from './NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

// ----------------------------------------------------------------------

export default function MainLayout({ children, sideBarItems }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <NavBar onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <SideBar navItems={sideBarItems} openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <MainContent>{children}</MainContent>
      </Box>
    </>
  );
}
