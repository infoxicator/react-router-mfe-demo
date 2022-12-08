import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';



function HeaderContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to="/" component={RouterLink} color="text.primary">
            React Router Micro-Frontends
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              component={RouterLink}
              to="/"
            >
                Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              component={RouterLink}
              to="cart"
            >
              Cart
            </Link>
            <Link
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              component={RouterLink}
              to="shop"
            >
                Shop
            </Link>
          </nav>
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          <RouterLink to="/auth/signin">Login</RouterLink>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default function Header() {
  return <HeaderContent />;
}