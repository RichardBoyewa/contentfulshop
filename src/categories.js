var CategoryComponent = {
    oninit: function(vnode) {
        Category.getAll().then(data => {
            m.redraw();
        })
    },
    onupdate: function(e){
        
    },
    view: function(vnode) {
        //Category
        
        if(Category.list.length == 0) {
            return m('div', '');
        }
        let all_list = m("li",
          [
            m("a", {'data-nav' : '', href:'#!/categories'},
             "All"
            )
          ]
        );
        return m('ul', {class:'categories-list'}, [all_list, Category.list.map(function(v){
                return m(Layout.categories, {fields:v}); 
            })]);
    }
}