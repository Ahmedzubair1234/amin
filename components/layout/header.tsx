"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  LightMode,
  DarkMode,
  LocalHospital,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { VALID_BRANCHES, getBranchName } from "@/lib/utils/branch";

const pages = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Find Doctor", href: "/find-doctor" },
  { title: "Contact", href: "/contact" },
];

const branches = VALID_BRANCHES.map((branch) => ({
  name: getBranchName(branch),
  href: `/branches/${branch}`,
}));

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElBranches, setAnchorElBranches] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenBranchesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBranches(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseBranchesMenu = () => {
    setAnchorElBranches(null);
  };

  const toggleDrawer = (open: boolean) => {
    setMobileOpen(open);
  };

  return (
    <AppBar position="fixed" color="inherit" sx={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="./images/logos/dark-logo.svg" alt="logo" width={100} height={100} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                href={page.href}
                sx={{ color: "inherit" }}
              >
                {page.title}
              </Button>
            ))}
            <Button
              onClick={handleOpenBranchesMenu}
              sx={{ color: "inherit" }}
              endIcon={<KeyboardArrowDown />}
            >
              Branches
            </Button>
            <Menu
              anchorEl={anchorElBranches}
              open={Boolean(anchorElBranches)}
              onClose={handleCloseBranchesMenu}
            >
              {branches.map((branch) => (
                <MenuItem
                  key={branch.name}
                  component={Link}
                  href={branch.href}
                  onClick={handleCloseBranchesMenu}
                >
                  {branch.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton onClick={() => setTheme(theme === "dark" ? "light" : "dark")} color="inherit">
              {theme === "dark" ? <LightMode /> : <DarkMode />}
            </IconButton>
            <Button component={Link} href="/auth/login" variant="outlined" sx={{ mr: 1 }}>
              Login
            </Button>
            <Button component={Link} href="/auth/register" variant="contained">
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {pages.map((page) => (
              <ListItem key={page.title} disablePadding>
                <ListItemButton component={Link} href={page.href} onClick={() => toggleDrawer(false)}>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <ListItem sx={{ px: 2, py: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Branches
              </Typography>
            </ListItem>
            {branches.map((branch) => (
              <ListItem key={branch.name} disablePadding>
                <ListItemButton component={Link} href={branch.href} onClick={() => toggleDrawer(false)}>
                  <ListItemText primary={branch.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}