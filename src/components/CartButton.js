import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createOrder, getOneOrder } from "../store/orders";
import '../index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const CartButton = (props) => {
    const classes = useStyles();
    const [disableBtn, setDisableBtn] = useState(false);
    // let userId = window.localStorage.getItem("currentUserId");
    // let eventsJoin = props.eventsJoin
    // let eventId = props.eventId
    // React.useEffect(() => {
    //     for (let i = 0; i < eventsJoin.length; i++) {
    //         if (eventsJoin[i].eventId === eventId) {
    //             setDisableBtn(true);
    //         }
    //     }
    // }, []);

    const handleBtn = async () => {
        props.createOrder(userId, itemId, total);
        setDisableBtn(true);
    }

    if (props) {
        return (
            <div className={classes.root}>
                <Button
                    size="small"
                    color="primary"
                    onClick={handleBtn}
                    disabled={disableBtn}>
                    Add
                </Button>
            </div>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}


const mapStateToProps = state => {
    return {
        token: state.authentication.token,
        // members: state.homeEvents.resEvent,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createOrder: (...args) => dispatch(createOrder(...args)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    CartButton
);