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
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
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
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Check our awesome items here!</ListSubheader>
                </GridListTile>
                {items.map((item) => (
                    <GridListTile key={item.id}>
                        <img src={item.photoUrl} alt={item.photoUrl} />
                        <GridListTileBar
                            itemname={item.itemname}
                            subtitle={<span>by: {item.owner}</span>}
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