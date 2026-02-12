import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// ----------------------------------------------------------------------

export function CardA() {
    return (
        <Box
            sx={{
                mb: { xs: 0, md: 0 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Card sx={{ maxWidth: 345 }}>
                <Box
                    sx={{
                        height: 140,
                        bgcolor: '#ADD8E6', // Light blue
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card A
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Event &apos;Card B&apos;
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

