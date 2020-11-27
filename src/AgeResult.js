import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {getAgeDiff} from "./age.service";

const useStyles = makeStyles((theme) => ({
    result: {
        width: '100%',
        padding: theme.spacing(2, 1),
        margin: theme.spacing(2, 0),
    }
}));

function AgeResult(props) {
    const classes = useStyles();
    return (
        <Card className={classes.result}>
            <Typography variant={'subtitle1'} align={'center'}>You are</Typography>
            <Typography variant={'h5'} align={'center'} color={'primary'}> {getAgeDiff(props.age)} </Typography>
            <Typography variant={'subtitle1'} align={'center'}>old!</Typography>
        </Card>
    )
}

export default AgeResult;
