import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_REQUEST,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "./constants";

//login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    // const config = { headers: { "Content-Type": "application/json" } };
    // const { data } = await axios.post(
    //   `/api/v1/login`,
    //   { email, password },
    //   config
    // );
    const url=`https://localhost:7018/api/Login/Login?email=${inputData.email}&password=${inputData.password}`;
            const data={
                "email": inputData.email,
                "password": inputData.password
            }
            axios.post(url,data)
            .then((result)=>{
                console.log(result);
                document.cookie="token="+result.data.token;
                localStorage.setItem("id",JSON.stringify(result.data.id));
                dispatch({ type: LOGIN_SUCCESS, payload: result.data.id });
            })
            .catch((error)=>{
                console.log(error)
                dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
            })

    
  } catch (error) {
    
  }
};
