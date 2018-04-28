if(m) {
    var root = document.getElementById('content');
    m.route(root, '/', {
       '/' : ProductComponent, 
       '/products' : ProductComponent, 
       '/categories' : {view: function(vnode) {
            return m(ProductComponent, {withCategory:true});   
       }}, 
       '/categories/:key' : {view: function(vnode) {
            return m(ProductComponent, {withCategory:true, category_id: vnode.attrs.key});   
       }}, 
       '/products/:slug' : ProductDetailComponent,
       '/brand/:id' : BrandComponent,
       '/about' : {view: function() { return m(Layout.aboutApp);}}
    });
}else {
    alert('Missing Lib component');
}