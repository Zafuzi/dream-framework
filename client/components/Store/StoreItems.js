export const StoreItems = {
    data: {
        items: [
            {name: 'Item 1', price: 10},
            {name: 'Item 2', price: 20},
            {name: 'Item 3', price: 30}
        ]
    },
    beforeRender(element, instance)
    {
        const result = fetch('/api/storeItems');
        
        if(result.error)
        {
            return alert(result.error);
        }
        
        instance.data = result;
    }
}