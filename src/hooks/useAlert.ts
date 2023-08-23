import { closeAlert, setAlert } from '@gossip/globals/reducers/Alerts'
import { AlertColor } from '@mui/material'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

function useAlert() {
    const dispatch = useDispatch()

    const openAlert = useCallback(
        (message: string, severity: AlertColor) => {
            dispatch(setAlert({ message, severity }))
        },
        [dispatch],
    )

    const handleClose = useCallback(
        (event?: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return
            }

            dispatch(closeAlert())
        },
        [dispatch],
    )

    return { openAlert, handleClose }
}

export default useAlert
