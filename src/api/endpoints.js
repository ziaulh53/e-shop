export const auth = {
    login: '/auth/login',
    reg: '/auth/register',
    forgetPassword: '/auth/forget-password',
    resetPassword: '/auth/reset-password'
}

export const categoryEndpoint = {
    fetchCategory: '/category',
    fetchSingleCategory: '/category/',
}
export const productEndpoint = {
    fetchSingleProduct: '/product/',
}

export const landingEndpoint = {
    fetchHomepage: '/landing',
}

export const orderEndpoint = {
    createOrder: '/order/create',
}

export const addressEndpoint = {
    getAddress: '/address',
    createAddress: '/address/create',
    editAddress: '/address/edit/',
    deleteAddress: '/address/delete/',
}