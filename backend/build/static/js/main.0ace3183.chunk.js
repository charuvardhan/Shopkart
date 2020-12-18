(this.webpackJsonpfontend=this.webpackJsonpfontend||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t),a.d(t,"USER_SIGNIN_REQUEST",(function(){return n})),a.d(t,"USER_SIGNIN_SUCCESS",(function(){return r})),a.d(t,"USER_SIGNIN_FAIL",(function(){return c})),a.d(t,"USER_REGISTER_REQUEST",(function(){return l})),a.d(t,"USER_REGISTER_SUCCESS",(function(){return u})),a.d(t,"USER_REGISTER_FAIL",(function(){return i}));var n="USER_SIGNIN_REQUEST",r="USER_SIGNIN_SUCCESS",c="USER_SIGNIN_FAIL",l="USER_REGISTER_REQUEST",u="USER_REGISTER_SUCCESS",i="USER_REGISTER_FAIL"},42:function(e,t,a){e.exports=a(72)},47:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),u=(a(47),a(6)),i=a(1),o=a(5),s=a.n(o),m=a(12),E=a(13),d=a.n(E),p=function(){return function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"PRODUCT_LIST_REQUEST"}),e.next=4,d.a.get("/api/products");case 4:a=e.sent,n=a.data,t({type:"PRODUCT_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"PRODUCT_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()};var v=function(e){var t=Object(i.c)((function(e){return e.productList})),a=t.products,c=t.loading,l=t.error,o=Object(i.b)();return Object(n.useEffect)((function(){return o(p()),function(){}}),[]),c?r.a.createElement("div",null,"Loading..."):l?r.a.createElement("div",null,l):r.a.createElement("ul",{className:"products"},a.map((function(e){return r.a.createElement("li",{key:e._id},r.a.createElement("div",{className:"product"},r.a.createElement(u.b,{to:"/product/"+e._id},r.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),r.a.createElement("div",{className:"product-name"},r.a.createElement(u.b,{to:"/product/"+e._id},e.name)),r.a.createElement("div",{clss:"product-brand"},e.brand),r.a.createElement("div",{className:"product-price"},"$",e.price),r.a.createElement("div",{className:"product-rating"},e.rating," Stars (",e.numReviews," Reviews)")))})))},f=a(18),S=a(3);var b=function(e){var t=Object(n.useState)(1),a=Object(S.a)(t,2),c=a[0],l=a[1],o=Object(i.c)((function(e){return e.productDetails})),E=o.product,p=o.loading,v=o.error,b=Object(i.b)();return Object(n.useEffect)((function(){var t;return b((t=e.match.params.id,function(){var e=Object(m.a)(s.a.mark((function e(a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"PRODUCT_DETAILS_REQUEST",payload:t}),e.next=4,d.a.get("/api/products/"+t);case 4:n=e.sent,r=n.data,a({type:"PRODUCT_DETAILS_SUCCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:"PRODUCT_DETAILS_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),function(){}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"back-to-result"},r.a.createElement(u.b,{to:"/"},"Back to results")),p?r.a.createElement("div",null,"Loading ..."):v?r.a.createElement("div",null,v):r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"details-image"},r.a.createElement("img",{src:E.image,alt:"product"})),r.a.createElement("div",{className:"details-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,E.name)),r.a.createElement("li",null,E.rating," Stars (",E.numReviews," Reviews)"),r.a.createElement("li",null,"Price: ",r.a.createElement("b",null,"$",E.price)),r.a.createElement("li",null,"Description",r.a.createElement("div",null,E.description)))),r.a.createElement("div",{className:"details-actions"},r.a.createElement("ul",null,r.a.createElement("li",null,"Price: $",E.price),r.a.createElement("li",null,"Status: ",E.countInStock>0?"In Stock":"Unavailable"),r.a.createElement("li",null,"Qty: ",r.a.createElement("select",{value:c,onChange:function(e){l(e.target.value)}},Object(f.a)(Array(E.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1}," ",e+1," ")})))),r.a.createElement("li",null,E.countInStock>0&&r.a.createElement("button",{onClick:function(){e.history.push("/cart/"+e.match.params.id+"?qty="+c)},className:"button primary"},"Add to Cart"))))))},h=a(4),y=(a(71),a(14)),g=a.n(y),_=function(e,t){return function(){var a=Object(m.a)(s.a.mark((function a(n,r){var c,l,u,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.a.get("/api/products/"+e);case 3:c=a.sent,l=c.data,n({type:"CART_ADD_ITEM",payload:{product:l._id,name:l.name,image:l.image,price:l.price,countInStock:l.countInStock,qty:t}}),u=r(),i=u.cart.cartItems,g.a.set("cartItems",JSON.stringify(i)),a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}()},O=a(26);var C=function(e){var t=Object(i.c)((function(e){return e.cart})).cartItems,a=e.match.params.id,c=e.location.search?Number(e.location.search.split("=")[1]):1,l=Object(i.b)(),u=function(e){l(function(e){return function(){var t=Object(m.a)(s.a.mark((function t(a,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"CART_REMOVE_ITEM",payload:e}),r=n(),c=r.cart.cartItems,g.a.set("cartItems",JSON.stringify(c));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(e))};return Object(n.useEffect)((function(){a&&l(_(a,c))}),[]),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart-list"},r.a.createElement("ul",{className:"cart-list-container"},r.a.createElement("li",null,r.a.createElement("h3",null,"Shopping Cart"),r.a.createElement("div",null,"Price")),0===t.length?r.a.createElement("div",null,"Cart is empty"):t.map((function(e){return r.a.createElement("li",null,r.a.createElement("div",{className:"cart-image"},r.a.createElement("img",{src:e.image,alt:"product"})),r.a.createElement("div",{className:"cart-name"},r.a.createElement("div",null,r.a.createElement(O.Link,{to:"/product/"+e.product},e.name)),r.a.createElement("div",null,"Qty:",r.a.createElement("select",{value:e.qty,onChange:function(t){return l(_(e.product,t.target.value))}},Object(f.a)(Array(e.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1}," ",e+1," ")})))," ",r.a.createElement("button",{type:"button",className:"button",onClick:function(){return u(e.product)}},"Delete"))),r.a.createElement("div",{className:"cart-price"},"$",e.price))})))),r.a.createElement("div",{className:"cart-action"},r.a.createElement("h3",null,"Subtotal ( ",t.reduce((function(e,t){return e+t.qty}),0)," items) : $ ",t.reduce((function(e,t){return e+t.price*t.qty}),0)),r.a.createElement("button",{onClick:function(){e.history.push("/signin?redirect=shipping")},className:"button primary full-width",disables:0===t.length},"Proceed to Checkout")))},R=a(15);var I=function(e){var t=Object(n.useState)(""),a=Object(S.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),E=Object(S.a)(o,2),p=E[0],v=E[1],f=Object(i.c)((function(e){return e.userSignin})),b=f.loading,h=f.userInfo,y=f.error,_=Object(i.b)(),O=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){return h&&e.history.push(O),function(){}}),[h]),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),_(function(e,t){return function(){var a=Object(m.a)(s.a.mark((function a(n){var r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:R.USER_SIGNIN_REQUEST,payload:{email:e,password:t}}),a.prev=1,a.next=4,d.a.post("/api/users/signin",{email:e,password:t});case 4:r=a.sent,c=r.data,n({type:R.USER_SIGNIN_SUCCESS,payload:c}),g.a.set("userInfo",JSON.stringify(c)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:R.USER_SIGNIN_FAIL,payload:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(c,p))}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Sign-In")),r.a.createElement("li",null,b&&r.a.createElement("div",null,"Loading ..."),y&&r.a.createElement("div",null,y)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(e){return l(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:function(e){return v(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Sign In")),r.a.createElement("li",null,"New to amazon"),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"===O?"register":"register?redirect="+O,className:"button secondary text-center"},"Create your amazon account")))))};var N=function(e){var t=Object(n.useState)(""),a=Object(S.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),E=Object(S.a)(o,2),p=E[0],v=E[1],f=Object(n.useState)(""),b=Object(S.a)(f,2),h=b[0],y=b[1],_=Object(n.useState)(""),O=Object(S.a)(_,2),C=(O[0],O[1]),I=Object(i.c)((function(e){return e.userRegister})),N=I.loading,T=I.userInfo,j=I.error,U=Object(i.b)(),k=e.location.search?e.location.search.split("=")[1]:"/";return Object(n.useEffect)((function(){return T&&e.history.push(k),function(){}}),[T]),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),U(function(e,t,a){return function(){var n=Object(m.a)(s.a.mark((function n(r){var c,l;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:R.USER_REGISTER_REQUEST,payload:{name:e,email:t,password:a}}),n.prev=1,n.next=4,d.a.post("/api/users/register",{name:e,email:t,password:a});case 4:c=n.sent,l=c.data,r({type:R.USER_REGISTER_SUCCESS,payload:l}),g.a.set("userInfo",JSON.stringify(l)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),r({type:R.USER_REGISTER_FAIL,payload:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(c,p,h))}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Create Account")),r.a.createElement("li",null,N&&r.a.createElement("div",null,"Loading ..."),j&&r.a.createElement("div",null,j)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"name",name:"name",id:"name",onChange:function(e){return l(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",id:"email",onChange:function(e){return v(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:function(e){return y(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"rePassword"},"Re-Enter Password"),r.a.createElement("input",{type:"rePassword",name:"rePassword",onChange:function(e){return C(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Register")),r.a.createElement("li",null,"Already have an account? ",r.a.createElement(u.b,{to:"/"===k?"signin":"signin?redirect="+k,className:"button secondary text-center"},"Create your amazon account")))))};var T=function(e){var t=Object(n.useState)(!1),a=Object(S.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(""),o=Object(S.a)(u,2),E=o[0],v=o[1],f=Object(n.useState)(""),b=Object(S.a)(f,2),h=b[0],y=b[1],g=Object(n.useState)(""),_=Object(S.a)(g,2),O=_[0],C=_[1],R=Object(n.useState)(""),I=Object(S.a)(R,2),N=I[0],T=I[1],j=Object(n.useState)(""),U=Object(S.a)(j,2),k=U[0],D=U[1],P=Object(n.useState)(""),w=Object(S.a)(P,2),A=w[0],x=w[1],L=Object(n.useState)(""),F=Object(S.a)(L,2),G=F[0],Q=F[1],M=Object(n.useState)(""),V=Object(S.a)(M,2),$=V[0],q=V[1],B=Object(i.c)((function(e){return e.productList})),J=(B.loading,B.products),z=(B.error,Object(i.c)((function(e){return e.productSave}))),H=z.loading,W=z.success,X=z.error,Y=Object(i.c)((function(e){return e.productDelete})),K=(Y.loading,Y.success),Z=(Y.error,Object(i.b)());Object(n.useEffect)((function(){return W&&l(!1),Z(p()),function(){}}),[W,K]);var ee=function(e){l(!0),v(e._id),y(e.name),C(e.price),Q(e.category),x(e.countInStock),D(e.brand),T(e.image),q(e.description)},te=function(e){var t;Z((t=e._id,function(){var e=Object(m.a)(s.a.mark((function e(a,n){var r,c,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n(),c=r.userSignin.userInfo,a({type:"PRODUCT_DELETE_REQUEST",payload:t}),e.next=5,d.a.delete("/api/products/"+t,{headers:{Authorization:"Bearer"+c.token}});case 5:l=e.sent,u=l.data,a({type:"PRODUCT_DELETE_SUCCESS",payload:u,success:!0}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:"PRODUCT_DELETE_FAIL",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()))};return r.a.createElement("div",{className:"content content-margined"},r.a.createElement("div",{className:"product-header"},r.a.createElement("h3",null,"Products"),r.a.createElement("button",{className:"button primary",onClick:function(){return ee({})}},"Create Product")),c&&r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),Z((t={_id:E,name:h,price:O,image:N,category:G,countInStock:A,description:$,brand:k},function(){var e=Object(m.a)(s.a.mark((function e(a,n){var r,c,l,u,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a({type:"PRODUCT_SAVE_REQUEST",payload:t}),r=n(),c=r.userSignin.userInfo,t._id){e.next=9;break}return e.next=6,d.a.post("/api/products",t,{headers:{Authorization:"Bearer"+c.token}});case 6:l=e.sent,u=l.data,a({type:"PRODUCT_SAVE_SUCCESS",payload:u});case 9:return e.next=11,d.a.put("/api/products/"+t._id,t,{headers:{Authorization:"Bearer"+c.token}});case 11:i=e.sent,o=i.data,a({type:"PRODUCT_SAVE_SUCCESS",payload:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),a({type:"PRODUCT_SAVE_FAIL",payload:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,a){return e.apply(this,arguments)}}()))}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Create Product")),r.a.createElement("li",null,H&&r.a.createElement("div",null,"Loading ..."),X&&r.a.createElement("div",null,X)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",value:h,id:"name",onChange:function(e){return y(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"price"},"Price"),r.a.createElement("input",{type:"text",name:"price",value:O,id:"price",onChange:function(e){return C(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{type:"text",name:"image",value:N,id:"image",onChange:function(e){return T(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"brand"},"Brand"),r.a.createElement("input",{type:"text",name:"brand",value:k,id:"brand",onChange:function(e){return D(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:G,id:"category",onChange:function(e){return Q(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",value:$,id:"description",onChange:function(e){return q(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"countinstock"},"Count in Stocks"),r.a.createElement("input",{type:"text",name:"countinstock",value:A,id:"countinstock",onChange:function(e){return x(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},E?"Update":"Create")),r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:function(){return l(!1)},className:"button secondary"},"Back"))))),r.a.createElement("div",{className:"product-list"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Brand"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,J.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e._id),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.category),r.a.createElement("td",null,e.brand),r.a.createElement("td",null,r.a.createElement("button",{className:"button",onClick:function(){return ee(e)}},"Edit")," ",r.a.createElement("button",{className:"button",onClick:function(){return te(e)}},"Delete")))}))))))};var j=function(e){return r.a.createElement("div",{className:"checkout-steps"},r.a.createElement("div",{className:e.step1?"active":""},"Signin"),r.a.createElement("div",{className:e.step2?"active":""},"Shipping"),r.a.createElement("div",{className:e.step3?"active":""},"Payment"),r.a.createElement("div",{className:e.step4?"active":""},"Place Order"))};var U=function(e){var t=Object(n.useState)(""),a=Object(S.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(""),o=Object(S.a)(u,2),s=o[0],m=o[1],E=Object(n.useState)(""),d=Object(S.a)(E,2),p=d[0],v=d[1],f=Object(n.useState)(""),b=Object(S.a)(f,2),h=b[0],y=b[1],g=Object(i.b)();return r.a.createElement("div",null,r.a.createElement(j,{step1:!0,step2:!0}),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),g((a={address:c,city:s,postalCode:p,country:h},function(e){e({type:"CART_SAVE_SHIPPING",payload:a})})),e.history.push("payment")}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Shipping")),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",name:"address",id:"address",onChange:function(e){return l(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{type:"text",name:"city",id:"city",onChange:function(e){return m(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"postalCode"},"PostalCode"),r.a.createElement("input",{type:"text",name:"postalCode",id:"postalCode",onChange:function(e){return v(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement("input",{type:"text",name:"country",id:"country",onChange:function(e){return y(e.target.value)}})),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Continue"))))))};var k=function(e){var t=Object(n.useState)(""),a=Object(S.a)(t,2),c=a[0],l=a[1],u=Object(i.b)();return r.a.createElement("div",null,r.a.createElement(j,{step1:!0,step2:!0,step3:!0}),r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),u((a={paymentMethod:c},function(e){e({type:"CART_SAVE_PAYMENT",payload:a})})),e.history.push("placeorder")}},r.a.createElement("ul",{className:"form-container"},r.a.createElement("li",null,r.a.createElement("h2",null,"Payment")),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"paymentMethod",id:"paymentMethod",value:"paypal",onChange:function(e){return l(e.target.value)}}),r.a.createElement("label",{htmlFor:"paymentMethod"},"Paypal"))),r.a.createElement("li",null,r.a.createElement("button",{type:"submit",className:"button primary"},"Continue"))))))};var D=function(e){var t=Object(i.c)((function(e){return e.cart})),a=t.cartItems,c=t.shipping,l=t.payment;c.address?l.paymentMethod||e.history.push("/payment"):e.history.push("/shipping");var u=a.reduce((function(e,t){return e+t.price*t.qty}),0),o=u>100?0:10,s=.15*u,m=u+o+s;return Object(i.b)(),Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,r.a.createElement(j,{step1:!0,step2:!0,step3:!0,step4:!0}),r.a.createElement("div",{className:"placeorder"},r.a.createElement("div",{className:"placeorder-info"},r.a.createElement("div",null,r.a.createElement("h3",null,"Shipping"),r.a.createElement("div",null,t.shipping.address,", ",t.shipping.city,",",t.shipping.postalCode,", ",t.shipping.country,",")),r.a.createElement("div",null,r.a.createElement("h3",null,"Payment"),r.a.createElement("div",null,"Payment Method: ",t.payment.paymentMethod)),r.a.createElement("div",null,r.a.createElement("ul",{className:"cart-list-container"},r.a.createElement("li",null,r.a.createElement("h3",null,"Shopping Cart"),r.a.createElement("div",null,"Price")),0===a.length?r.a.createElement("div",null,"Cart is empty"):a.map((function(e){return r.a.createElement("li",null,r.a.createElement("div",{className:"cart-image"},r.a.createElement("img",{src:e.image,alt:"product"})),r.a.createElement("div",{className:"cart-name"},r.a.createElement("div",null,r.a.createElement(O.Link,{to:"/product/"+e.product},e.name)),r.a.createElement("div",null,"Qty: ",e.qty)),r.a.createElement("div",{className:"cart-price"},"$",e.price))}))))),r.a.createElement("div",{className:"placeorder-action"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"button primary full-width",onClick:function(){}},"Place Order")),r.a.createElement("li",null,r.a.createElement("h3",null,"Order Summary")),r.a.createElement("li",null,r.a.createElement("div",null,"Items"),r.a.createElement("div",null,"$",u)),r.a.createElement("li",null,r.a.createElement("div",null,"Shipping"),r.a.createElement("div",null,"$",o)),r.a.createElement("li",null,r.a.createElement("div",null,"Tax"),r.a.createElement("div",null,"$",s)),r.a.createElement("li",null,r.a.createElement("div",null,"Order Total"),r.a.createElement("div",null,"$",m))))))};var P=function(){var e=Object(i.c)((function(e){return e.userSignin})).userInfo;return r.a.createElement(u.a,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"brand"},r.a.createElement("button",{onClick:function(){document.querySelector(".sidebar").classList.add("open")}},"\u2630"),r.a.createElement(u.b,{to:"/"},"ShopKart")),r.a.createElement("div",{className:"header-links"},r.a.createElement(u.b,{to:"/cart/:id?"},"Cart "),e?r.a.createElement(u.b,{to:"/profile"},e.name):r.a.createElement(u.b,{to:"/signin"},"Sign In"))),r.a.createElement("aside",{className:"sidebar"},r.a.createElement("h3",null,"Shopping Categories"),r.a.createElement("button",{className:"sidebar-close-button",onClick:function(){document.querySelector(".sidebar").classList.remove("open")}},"x"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"index.html"},"Pants")),r.a.createElement("li",null,r.a.createElement("a",{href:"index.html"},"Shirts")))),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement(h.Route,{path:"/products",exact:!0,component:T}),r.a.createElement(h.Route,{path:"/signin",exact:!0,component:I}),r.a.createElement(h.Route,{path:"/register",exact:!0,component:N}),r.a.createElement(h.Route,{path:"/shipping",exact:!0,component:U}),r.a.createElement(h.Route,{path:"/payment",exact:!0,component:k}),r.a.createElement(h.Route,{path:"/product/:id",component:b}),r.a.createElement(h.Route,{path:"/placeorder",component:D}),r.a.createElement(h.Route,{path:"/cart/:id?",exact:!0,component:C}),r.a.createElement(h.Route,{path:"/",exact:!0,component:v}))),r.a.createElement("footer",{className:"footer"},"All rights reserved.")))},w=a(17);var A=a(41),x=a(22);var L=a(15),F=L.USER_SIGNIN_REQUEST,G=L.USER_SIGNIN_SUCCESS,Q=L.USER_SIGNIN_FAIL,M=L.USER_REGISTER_REQUEST,V=L.USER_REGISTER_SUCCESS,$=L.USER_REGISTER_FAIL;var q={cart:{cartItems:g.a.getJSON("cartItems")||[],shipping:{},payment:{}},userSignin:{userInfo:g.a.getJSON("userInfo")||null}},B=Object(w.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:t.payload};case"PRODUCT_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DETAILS_REQUEST":return{loading:!0};case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:t.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[],shipping:{},payment:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CART_ADD_ITEM":var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}:{cartItems:[].concat(Object(f.a)(e.cartItems),[a])};case"CART_REMOVE_ITEM":return{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))};case"CART_SAVE_SHIPPING":return Object(x.a)(Object(x.a)({},e),{},{shipping:t.payload});case"CART_SAVE_PAYMENT":return Object(x.a)(Object(x.a)({},e),{},{payment:t.payload});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return{loading:!0};case G:return{loading:!1,userInfo:t.payload};case Q:return{loading:!1,error:t.payload};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{loading:!0};case V:return{loading:!1,userInfo:t.payload};case $:return{loading:!1,error:t.payload};default:return e}},productSave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_SAVE_REQUEST":return{loading:!0};case"PRODUCT_SAVE_SUCCESS":return{loading:!1,success:!0,product:t.payload};case"PRODUCT_SAVE_FAIL":return{loading:!1,error:t.payload};default:return e}},productDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCT_DELETE_REQUEST":return{loading:!0};case"PRODUCT_DELETE_SUCCESS":return{loading:!1,product:t.payload,success:!0};case"PRODUCT_DELETE_FAIL":return{loading:!1,error:t.payload};default:return e}}}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||w.d,z=Object(w.e)(B,q,J(Object(w.a)(A.a)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,{store:z},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0ace3183.chunk.js.map