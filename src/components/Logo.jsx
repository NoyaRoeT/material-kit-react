import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Stack, Typography } from '@mui/material';
import RouterLink from '../routes/components/RouterLink';

const Logo = forwardRef(({ disabledLink = false, sx }) => {
  const logo = (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <Box
        component="img"
        src="/favicon/favicon.ico"
        sx={{ width: 40, height: 40, cursor: 'pointer', ...sx, mr: 1 }}
      />
      <Typography variant="h4">Some Portal</Typography>
    </Stack>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

export default Logo;
