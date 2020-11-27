import TextField from "@material-ui/core/TextField";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import moment from "moment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MomentUtils from "@date-io/moment";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0),
    },
}));

export default function DataForm(props) {
    const [name, setName] = useState('');
    const [dob, setDob] = useState(moment);
    const classes = useStyles();

    const calculateAge = e => {
        e.stopPropagation();
        e.preventDefault();
        props.onSubmit({dob, name});
    };

    const reset = e => {
        e.stopPropagation();
        e.preventDefault();
        setName('');
        setDob(moment);
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <form onSubmit={calculateAge} className={classes.form} onReset={reset}>
                <TextField id="name" label="Name"
                           placeholder={'Please enter your name'}
                           value={name}
                           onChange={e => setName(e.target.value)}
                           required
                           autoComplete={'name'}
                           fullWidth
                           autoFocus
                           variant="outlined"/>
                <DatePicker
                    openTo={'year'}
                    variant="inline"
                    format="DD/MM/yyyy"
                    margin="normal"
                    disableFuture
                    id="dob"
                    label="DOB"
                    inputVariant={'outlined'}
                    fullWidth
                    value={dob}
                    onChange={date => setDob(date)}
                    helperText={'Date format is day month year (dd/mm/yyyy)'}
                    required
                />
                <Button variant="contained" color={'primary'} type="submit" fullWidth className={classes.submit} id={'submitDataForm'}>
                    Calculate Age
                </Button>
                <Button variant={'outlined'} color={'primary'} type={'reset'} fullWidth id={'resetDataForm'}>Reset</Button>
            </form>
        </MuiPickersUtilsProvider>
    )
}
