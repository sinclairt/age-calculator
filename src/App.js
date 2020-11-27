import './App.css';
import React, {useState} from "react";
import 'fontsource-roboto';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AgeResult from "./AgeResult";
import Records from "./Records";
import DataForm from "./DataForm";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3)
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0),
    },
}));


function App() {
    const [records, setRecords] = useState([]);
    const classes = useStyles();

    const onRecordSubmit = (record) => {
        let recordsCopy = [...records];
        recordsCopy.unshift(record)
        setRecords(recordsCopy);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography component="h6" variant={'h6'}>How old are you?</Typography>
                <DataForm onSubmit={onRecordSubmit}/>
            </Paper>
            {records.length > 0 &&
            <AgeResult age={records[0].dob}/>
            }

            <Records records={records}/>
        </Container>
    );
}

export default App;
