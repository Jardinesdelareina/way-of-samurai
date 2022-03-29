import React from 'react'
import { useParams } from 'react-router-dom'

// hook, который заменяет withRouter из старых версий react-router-dom
export const withRouter = (WrappedComponent: any) => (props: any) => {
    const params = useParams()
    return (
        <WrappedComponent {...props} params={params} />
    )
}