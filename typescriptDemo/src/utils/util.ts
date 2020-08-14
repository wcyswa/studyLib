interface Result {
    success: boolean,
    errMsg?: string,
    data: any
}

export const getResponseData = (data: any, errMsg?: string): Result => {
    console.log(data,errMsg,'后端')
    if (errMsg) {
        return {
            success: false,
            errMsg,
            data,
        }
    }
    return {
        success: true,
        data,
    }
};