
import { Box, Typography } from '@mui/material';

import { _tasks } from 'src/_mock/_data';
import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsTasks } from 'src/sections/overview/analytics-tasks';

// ----------------------------------------------------------------------

export default function Page() {

  return (
    <>
      <title>{`Component Input - ${CONFIG.appName}`}</title>
      <meta
        name="description"
        content="Lesson 3"
      />
      <meta name="keywords" content="Lesson 3" />

      <DashboardContent>
        <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
          Hi, Component Input
        </Typography>

        <Box
          sx={{
            mb: { xs: 2 /* increase for mobile */, md: 1 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="ul"
            sx={{
              paddingLeft: '20px',
              margin: '16px 0',
              listStyleType: 'disc',
              width: '500px',
            }}
          >
            <li>TODO: autosort imports on save with (perfectionist/sort-imports): settings.json VS Code;</li>
          </Box>
        </Box>


        <Box sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <AnalyticsTasks sx={{
            maxHeight: '250px',
            overflowY: 'auto',
            width: '500px'
          }}
            title="Tasks"
            list={_tasks.slice(0, 4)} /* TODO: replace 3 with 4 and 5 and vise versa  */
            turnOnButton={false} /* TODO: replace turnOnButton={false} with turnOnButton to see how input param works */
          />
        </Box>

      </DashboardContent>

    </>
  );
}
