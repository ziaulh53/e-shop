export const auth = {
    login: '/auth/login',
    reg: '/auth/register',
    forgetPassword: '/auth/forget-password',
    resetPassword: '/auth/reset-password',
    editProfile: '/auth/edit-profile',
    changePassword: '/auth/change-password',
    changeEmailRequest: '/auth/change-email-request',
    changeEmail: '/auth/change-email'
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
    getOrders: '/order',
    createOrder: '/order/create',
    getSingleOrder: '/order/',
    updateStatus: '/order/update-status/'
}

export const addressEndpoint = {
    getAddress: '/address',
    createAddress: '/address/create',
    editAddress: '/address/edit/',
    deleteAddress: '/address/delete/',
}