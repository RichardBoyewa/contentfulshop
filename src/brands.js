var BrandComponent = {
    oninit: function(vnode) {
        Brands.getBrand(vnode.attrs.id).then(data => {
            m.redraw();
        })
    },
    onupdate: function(vnode) {
        Brands.currentBrand = null;
    },
    view: function(vnode) {
        if(Brands.currentBrand) {
            return m(Layout.brandItem, {brand: Brands.currentBrand});
        }
        return m('div', 'Loading...');
    }
}