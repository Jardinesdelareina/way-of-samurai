import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getIsAuth } from '../utils/selectors/authSelectors';
import { AppStateType } from './../redux/reduxStore';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: getIsAuth(state),
} as MapPropsType)

type MapPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {
}

export function withAuthRedirect(WrappedComponent: React.ComponentType) {
    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
        let { isAuth, ...restProps } = props
        
        if (!isAuth) return <Navigate to="/login" />
        
        return (
            <WrappedComponent {...restProps} />
        )
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent)

    return ConnectedAuthRedirectComponent
}