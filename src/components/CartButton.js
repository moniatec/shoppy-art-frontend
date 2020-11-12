import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
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
    const history = useHistory();
    const classes = useStyles();
    const [disableBtn, setDisableBtn] = useState(false);
    const userId = useSelector((state) => state.authentication.user.id);
    const itemId = props.itemId
    const total = props.total
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