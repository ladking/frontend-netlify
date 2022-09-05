import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import listReducer from './features/listingSlice'
import detailReducer from './features/detailSlice'
import loginReducer from './features/loginSlice'
import registerReducer from './features/registerSlice'
import userReducer from './features/Loggedin/userSlice'
import bookReducer from './features/bookingSlice'
import getBookReducer from './features/getBookingSlice'
import adminReducer from './features/AdminSlice'

const store = configureStore({
    reducer:{
        list : listReducer,
        detail : detailReducer,
        register: registerReducer,
        login : loginReducer,
        user: userReducer,
        book: bookReducer,
        getbook: getBookReducer,
        admin: adminReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store