import Typography from "@material-ui/core/Typography";
import {TimeIcon} from "@material-ui/pickers/_shared/icons/TimeIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";
import Card from "@material-ui/core/Card";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {getAgeDiff} from "./age.service";

const useStyles = makeStyles((theme) => ({
    recordContainer: {
        width: '100%',
        margin: theme.spacing(2, 0),
    },
    recordTitle: {
        padding: theme.spacing(1, 3, 0, 3),
        display: 'flex',
    },
    records: {
        backgroundColor: theme.palette.background.paper,
        padding: 0
    },
    record: {
        padding: theme.spacing(0, 3),
        backgroundColor: theme.palette.background.default
    },
    noRecordText: {
        marginBottom: theme.spacing(1)
    }
}));

export default function Records(props) {
    const classes = useStyles();
    return (<Card className={classes.recordContainer}>
        <Typography variant={'subtitle1'} className={classes.recordTitle} color={'textSecondary'}>
            <TimeIcon/>&nbsp;History
        </Typography>
        {props.records.length === 0 &&
        <Typography variant={'subtitle2'} color={'textSecondary'} align={'center'} className={classes.noRecordText}>No history yet.</Typography>}
        <List className={classes.records}>
            {props.records.map((record, i) => {

                return <ListItem key={i} className={classes.record}>
                    <ListItemText
                        primary={getAgeDiff(record.dob)}
                        secondary={record.name + ' ' + moment(record.dob).format('DD/MM/yyyy')}
                    />
                </ListItem>;
            })}
        </List>
    </Card>)
}
