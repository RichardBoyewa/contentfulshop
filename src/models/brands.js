var Brands = {
    currentBrand:null,
    getBrand: function(id) {
        var query = {
            'sys.id': id
        }
        return ContentFulShop.client.getEntries(query).then(entries => {
            Brands.currentBrand = entries.items[0];
        });
        
    }
}