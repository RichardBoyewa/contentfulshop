var ProductComponent = {
    oninit: function(vnode) {
        let query = {};
        Products.list = [];
        if(vnode.attrs.category_id) {
            query.category_id = vnode.attrs.category_id;
        }
        
        Products.getAll(query).then(data => {
            m.redraw();
        })
    },
    view: function(vnode) {
        if(Products.list.length == 0) {
            return m('div', 'Loading...');
        }
        let views = []
        if(vnode.attrs.withCategory) {
            views.push(m(CategoryComponent));
        }
        
        views.push(m('div',[
            m('h1', 'Products'),
            m('.products', Products.list.map(function(v){
                return m(Layout.productItem, {fields: v.fields}); 
            }))
        ]));
        
        if(!vnode.attrs.withCategory) {
            return views;
        }else {
            return m('.categories', views);
        }
    }
}