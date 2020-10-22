import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import Link from "@material-ui/core/Link";


export default function MenuModal() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> */}
            <MenuIcon style={{ color: 'white' }} onClick={handleClick} />
            {/* </Button> */}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                <MenuItem>
                    <Link

                        color="inherit"
                        href="https://github.com/moniatec"
                        target="_blank"
                    >
                        <Button color="inherit">
                            CONTACT
                    </Button>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="https://github.com/moniatec/shoppy-art-frontend" target="_blank">
                        <Button color="inherit">
                            ABOUT
                    </Button>
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
}