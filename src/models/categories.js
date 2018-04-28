var Category = {
    list:[],
    getAll: function(params) {
        var query = {
            content_type: ContentFulShop.config.categoryContentTypeId
        }
        return ContentFulShop.client.getEntries(query).then(entries => {
            Category.list = entries.items;
        });
    }
}