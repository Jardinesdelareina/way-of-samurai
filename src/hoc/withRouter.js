import { useParams } from 'react-router-dom'

// hook, который заменяет withRouter из старых версий react-router-dom
export const withRouter = WrappedComponent => (props) => {
    const params = useParams()
    return (
        <WrappedComponent {...props} params={params} />
    )
}