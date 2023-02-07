import { loginFailure, loginStart, loginSuccess, logoutStart } from "./AuthAction"
import axios from 'axios'


export const login = async(userData,dispatch) =>{
    dispatch(loginStart())

    try {
        const res = await axios.post('https://stackbackend-tj5w.onrender.com/api/auth/login',userData)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const logout = async(dispatch) =>{
    dispatch(logoutStart())

}