"use client"
import store from '@/redux/store/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function ClientLayout({children}) {
    return (
        <React.Fragment>
            <Provider store={store}>
                {children}
            </Provider>
        </React.Fragment>
    )
}
