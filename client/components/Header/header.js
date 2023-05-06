/*
    AppHeader is a component and helpers is a property that will be interpreted in the layout Header.html
    element is the element reference that called this helper
    instance is the instance of the component that called this helper
 */
export const AppHeader = {
    helpers: {
        testActive: function(element, instance)
        {
            // get current route name
            const currentRoute = Router.getRouteName();

            // get route from element that called this helper
            const route = element.dataset.route;

            if(currentRoute === route)
            {
                return 'active';
            }
        }
    }
}