/*
    This is a LIB file meaning both the client and server could access it!
 */
export const Routes = new Router([
    {
        path: '/',
        name: 'home',
        component: 'Home'
    },
    {
        path: '/store',
        name: 'store',
        component: 'Store'
    }
]);