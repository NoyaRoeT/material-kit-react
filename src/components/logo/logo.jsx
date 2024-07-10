import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import { Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
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

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
