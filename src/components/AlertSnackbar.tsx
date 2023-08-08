import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../globals/store'
import { closeAlert, setAlert } from '@gossip/globals/reducers/Alerts'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    },
)

export default function AlertSnackbar() {
    const alertState = useSelector((state: RootState) => state.alert)
    const dispatch = useDispatch()

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(closeAlert())
    }

    return (
        <Snackbar
            open={alertState.open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={alertState.severity}
                sx={{ width: '100%', color: 'white' }}
            >
                {alertState.message}
            </Alert>
        </Snackbar>
    )
}
