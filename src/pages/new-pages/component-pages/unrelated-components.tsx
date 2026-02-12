import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { CardB } from 'src/components/new-components/card-b';
import { CardA } from 'src/components/new-components/card-a';


// ----------------------------------------------------------------------

export default function Page() {
  const [output, setOutput] = useState(1);

  const handleIncrementOutput = () => {
    setOutput((value) => value + 1);
  };

  return (
    <>
      <title>{`Unrelated Components - ${CONFIG.appName}`}</title>
      <meta
        name="description"
        content="Lesson 5"
      />
      <meta name="keywords" content="Lesson 5" />

      <DashboardContent>
        <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
          Hi, Unrelated Components
        </Typography>

        <Box
          sx={{
            mb: { xs: 2 /* increase for mobile */, md: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="ul"
            sx={{
              mb: { xs: 0, md: 0 },
              paddingLeft: '20px',
              margin: '0 0',
              listStyleType: 'disc',
              width: '500px',
            }}
          >
            <li>TODO: send events between two unrelated components;</li>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <CardA />
          <CardB />
        </Box>

      </DashboardContent>

    </>
  );
}
