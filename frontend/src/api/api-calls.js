import axiosInstance from "./axios-instance"

export const signUp = async (userData) => {
    try {
        const response = await axiosInstance.post('/user/signup', userData);
        console.log(response.data + "SignUp response!");
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Signup failed! Please try again.")
    }
}

export const signIn = async (userData) => {
    try {
        const response = await axiosInstance.post('/user/signup', userData);
        console.log(response.data + " SignIn response!");
        return response.data;
    } catch (error) {
        throw new Error("SignIn failed! Please try again.")

    }
}


export const updateUser = async (updatedBody) => {
    try {
        const response = await axiosInstance.put('/user/', updatedBody);
        return response.data;
    } catch (error) {
        throw new Error("Update failed!")

    }
}

export const getUser = async () => {

    try {

        const response = await axiosInstance.get('/user');
        console.log("response from get-user" + response.data);
        return response.data;
    } catch (error) {
        throw new Error("Error in fetching user data!")
    }
}


//todo: how to send the query params
export const getUsersBulk = async () => {
    try {
        const response = await axiosInstance.get("/")
    } catch (error) {

    }
}

export const getBalance = async () => {
    try {
        const response = await axiosInstance.get('/account/balance');
        console.log(`balance : ${response.data}`);
        return response.data;

    } catch (error) {
        throw new Error("Error retrieving balance.")

    }
}

export const transferAmount = async (transactionData) => {
    try {
        const response = await axiosInstance.post('/account/transfer', transactionData);
        console.log(`transfer data ${response.data}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to complete transaction, Please try again!")

    }
}