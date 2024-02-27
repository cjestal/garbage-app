
export default defineNuxtRouteMiddleware((to, from) => {

    // allows refresh
    if (from.fullPath === to.fullPath) {
        return
    }

    if (!localStorage.getItem('userType')?.length && to.fullPath !== '/login/') {
        // console.log('here')
        return navigateTo('/login/')
    } else {
        console.log('here')
    }

})