var ProductDetailComponent = {
    oninit: function(vnode) {
        Products.getProduct({productSlug: vnode.attrs.slug}).then(data => {
            m.redraw();
        })
    },
    onupdate: function(vnode) {
        Products.currentProduct = null;
    },
    view: function(vnode) {
        if(!Products.currentProduct) {
            return m('div', 'Loading...');
        }
        return m('div',[
            m('h1', 'Products'),
            m('.products', m(Layout.productDetail, {fields: Products.currentProduct.fields}))
        ]);
    }
}