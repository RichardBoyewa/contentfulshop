var Layout = {
    productItem: {
        view: function(vnode) {
            let product = vnode.attrs.fields;
            return m(".product-in-list",
              [
                m(".product-image", 
                  m("a",{'data-nav' : '',href:'#!/products/' + product.slug },
                    m("img", {height:150, width:150, src:'http://'+ product.image[0].fields.file.url})
                  )
                ),
                m(".product-details",
                  [
                    m(".product-header",
                      [
                        m("h2", 
                          m("a", {'data-nav' : '',href:'#!/products/' + product.slug },
                            product.productName
                          )
                        ),
                        " by ",
                        m("a",{href:'#!/brand/' + product.brand.sys.id,'data-nav' : '' }, 
                          product.brand.fields.companyName
                        )
                      ]
                    ),
                    m("p.product-categories", product.categories.map(category => {
                        return m('span', category.fields.title)
                    })
                    ),
                    m("p", 
                      product.productDescription
                    ),
                    m("p", [m('span', '$'), m('span', product.price)]),
                    m("p.product-tags",
                      [
                        m("span", {style: "padding-right:5px"}, 
                          "Tags: " + product.tags.join(', ')
                        )
                      ]
                    )
                  ]
                )
              ]
            )
        }
    },
    productDetail: {
        view: function(vnode) {
            let product = vnode.attrs.fields;
            return m(".product",
              [
                m(".product-image", 
                  m("img",{height:'300', width:'300', src: 'http:'+product.image[0].fields.file.url})
                ),
                m(".product-header",
                  [
                    m("h2", 
                      product.productName
                    ),
                    " by ",
                    m("a", {'data-nav': '', href:'#!/brand/' + product.brand.sys.id},
                      product.brand.fields.companyName
                    )
                  ]
                ),
                m("p.product-categories", product.categories.map(category => {
                        return m('span', category.fields.title)
                    })
                ),
                m("p", 
                  product.productDescription
                ),
                m("p", 
                  product.sizetypecolor
                ),
                m("p", 
                  product.quantity + " in stock"
                ),
                m("p", 
                  [m('span', '$'), m('span', product.price)]
                ),
                m("p", 
                  product.sku
                ),
                m("p",
                  [
                    "More details: ",
                    m("a", {href:product.website}, 
                      product.website
                    )
                  ]
                ),
                m("p.product-tags",
                  [
                    m("span", {style: "padding-right:5px"}, 
                      "Tags: " + product.tags.join(', ')
                    )
                  ]
                )
              ]
            )
        }
    },
    brandItem:{
        view:function(vnode) {
            let brand = vnode.attrs.brand.fields;
            let views = [
                m("h2", 
                  brand.companyName
                ),
                m("div", 
                  m("img", {src: "http:" + brand.logo.fields.file.url})
                ),
                m("p", 
                  brand.companyDescription
                ),
                m("p", 
                  m("a", {href: brand.website}, 
                    brand.website
                  )
                ),
                m("p", 
                  m("a", {href: brand.twitter} ,
                    brand.twitter
                  )
                )
              ]
            if(brand.email) {
                views.push(m("p", 
                  m("a", {href : "mailto:" + brand.email}, 
                   brand.email
                  )
                ));
            }
            if(brand.phone) {
                views.push(m("p", 
                     brand.phone.map((tel) => {
                        return m('a', {href:'tel:' + tel}, tel);
                    })
                ));
            }
            return m(".brand",
              views
            )
        }
    },
    categories: {
        view:function(vnode) {
            let category = vnode.attrs.fields;
            return m("li",
                  [
                    m("img", {alt:category.categoryDescription, src:'http:' +category.fields.icon.fields.file.url, height:'20', width:20}),
                    m("a", {'data-nav' : '', href:'#!/categories/' + category.sys.id},
                      category.fields.title
                    )
                  ]
                )
        }
    },
    aboutApp: {
        view: function() {
            return m(".settings-form",
              [
                m("p",
                  [
                    m("a", {href:'https://contentful.com'},
                      "Contentful"
                    ),
                    " is a content management platform for web applications, mobile apps and connected devices."
                  ]
                ),
                m("p",
                  [
                    "It allows you to create, edit ",
                    m.trust("&amp;"),
                    " manage content in the cloud and publish it anywhere via a powerful API."
                  ]
                ),
                m("p", 
                  "This Product Catalogue demo app uses the Content Model of our Product Space Template."
                ),
                m("p",
                  [
                    "If you want to try it with your own space, please access the ",
                    m("a", {href:'https://app.contentful.com'},
                      "Contentful Web App"
                    ),
                    ', create a new space, load it with the Product Template and keep the same "Content Model", then go to ',
                    m('a', {href:'http://contentful.github.io/product-catalogue-js/about'}, "ContentFul Product Demo page"),
                    ' to test.'
                  ]
                ),
                m("div",
                  [
                    m('h4', "About this app."),
                    m('hr'),
                    m("p",
                      "This is a replica of the product demo page at http://contentful.github.io/product-catalogue-js/. This demo shows how contentful APIs" +
                      " work, and how you can create a smooth app with it using https://mithril.js.org." + 
                      " watch out for this space as more demos are coming soon."
                    ),
                    m('a', {href:'https://about.me/richardboyewa',target:'_blank'}, "- Boyewa Richard ")
                  ]
                )
              ]
            )
        }
    }
}