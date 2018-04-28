var Products = {
    list:[],
    currentProduct:null,
    getAll: function(params) {
        var query = {
            content_type: ContentFulShop.config.productContentTypeId
        }

        if (params && params.category_id) {
            query['fields.categories.sys.id[in]'] = params.category_id
        }
        return ContentFulShop.client.getEntries(query).then(entries => {
            Products.list = entries.items;
        });
    },
    getProduct: function(params) {
        var query = {
            content_type: ContentFulShop.config.productContentTypeId,
            'fields.slug': params.productSlug
        }
        
        return ContentFulShop.client.getEntries(query).then(entries => {
            Products.currentProduct = entries.items[0];
        });
        
    }
}