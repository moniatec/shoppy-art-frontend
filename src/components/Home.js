import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { getHomeItems } from "../store/items";
import { NavLink } from 'react-router-dom';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 900,
        height: 900,

    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

const Home = (props) => {
    const classes = useStyles();

    React.useEffect(() => {
        props.getHomeItems();

    }, [])

    const items = props.items

    return (
        <div className={classes.root}>
            <GridList
                cellHeight={280}

                className={classes.gridList}>
                <GridListTile key="Subheader" cols={2}
                    style={{ height: 'auto' }}
                >
                    <ListSubheader component="div">Check our awesome items here!</ListSubheader>
                </GridListTile>
                {items.map((item) => (
                    <GridListTile key={item.id}>

                        <NavLink style={{ color: 'white' }} to={`/items/${item.id}`} >
                            <img maxWidth="100%" style={{ objectFit: 'contain', width: '100%', height: '100%' }} src={item.photoUrl} alt={item.photoUrl} />
                        </NavLink>
                        <GridListTileBar
                            title={item.itemname}
                            subtitle={<span>by: {item.owner.username}</span>}
                        // actionIcon={
                        //     <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        //         <InfoIcon />
                        //     </IconButton>
                        // }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        // token: state.authentication.token,
        // currentUserId: state.authentication.currentUserId,
        items: state.items.list,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getHomeItems: () => dispatch(getHomeItems()),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Home
);