(this.webpackJsonprandomusers=this.webpackJsonprandomusers||[]).push([[6],{120:function(e,t,a){"use strict";a.r(t);var s=a(92),n=a.n(s),c=a(94),r=a(45),i=a(46),l=a(51),o=a(50),d=a(0),j=a.n(d),b=a(49),u=a(95),h=a.n(u);a(113).config();var p=a(60),m=a(57),x=a(2);var g=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(p.a,{variant:"info",className:"mt-2",children:Object(x.jsxs)(p.a.Heading,{children:[Object(x.jsx)(m.a,{animation:"grow"})," ","Fetching Users Personnels..."]})})})},O=a(116),f=a.n(O),v=a(121),N=a(58),P=a(42),k=a(41),y=a(37),C=a(20),D=a(21),w={currPage:1,postsPerPage:5,posts:[],pageCount:0,offset:0,data:[],perPage:4,currentPage:0,loadingSearch:!1,image_file:null,imageName:"",fetching:!1,currentlyDisplayed:[]},S=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).getEvents=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.props.dispatch({type:"GET_USERS",payload:h()({method:"GET",url:"".concat("https://randomuser.me/api/?results=28")})});case 2:s.props.users.fetchUsers.isFulfilled&&s.setState({currentlyDisplayed:s.props.users.fetchUsers.data});case 3:case"end":return e.stop()}}),e)}))),s.convertDate=function(e){var t=new Date(e).toISOString().substr(0,10).split("-");return"".concat(t[2]," ").concat(t[1]," ")},s.receivedData=Object(c.a)(n.a.mark((function e(){var t,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.props.users.fetchUsers.isFulfilled&&(t=s.props.users.fetchUsers.data,a=t.slice(s.state.offset,s.state.offset+s.state.perPage),c=a.map((function(e,t){return Object(x.jsx)(j.a.Fragment,{children:Object(x.jsxs)(v.a,{id:e.login.username,style:{width:"15rem",marginInline:"0.5em",marginBlockEnd:"0.5em"},children:[Object(x.jsx)(v.a.Header,{className:"bg-transparent",children:Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(P.a,{children:["Personnel ID : ",Object(x.jsx)("span",{style:{color:"#5abfb6"},children:e.login.username})]}),Object(x.jsx)(P.a,{xs:1,lg:1,children:Object(x.jsx)(C.a,{icon:D.b})})]})}),Object(x.jsx)(v.a.Body,{children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(P.a,{xs:4,md:12,lg:12,id:"foto-cards",children:Object(x.jsx)(v.a.Img,{variant:"top",src:e.picture.large,className:"rounded-circle mb-2"})}),Object(x.jsxs)(P.a,{xs:8,md:12,lg:12,children:[Object(x.jsx)(v.a.Title,{children:"Name"}),Object(x.jsxs)(v.a.Text,{children:[" ",e.name.title," ",e.name.first," ",e.name.last," "]}),Object(x.jsx)(v.a.Title,{children:"Telephone"}),Object(x.jsxs)(v.a.Text,{children:[" ",e.phone," "]}),Object(x.jsx)(v.a.Title,{className:"d-none d-sm-block",children:"Birthday "}),Object(x.jsxs)(v.a.Text,{className:"d-none d-sm-block",children:[" ",s.convertDate(e.dob.date)," "]}),Object(x.jsx)(v.a.Title,{className:"d-none d-sm-block",children:"Email"}),Object(x.jsxs)(v.a.Text,{className:"d-none d-sm-block",children:[" ",e.email," "]})]})]})})]},e.login.username)})})),s.setState({pageCount:Math.ceil(t.length/s.state.perPage),postData:c}));case 1:case"end":return e.stop()}}),e)}))),s.componentDidMount=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getEvents();case 2:return e.next=4,s.receivedData();case 4:case"end":return e.stop()}}),e)}))),s.handlePageClick=function(e){s.setState({loadingSearch:!1});var t=e.selected,a=t*s.state.perPage;s.setState({currentPage:t,offset:a},(function(){s.receivedData()}))},s.state=w,s}return Object(i.a)(a,[{key:"render",value:function(){return this.props.users.fetchUsers.isFulfilled?Object(x.jsxs)(k.a,{children:[Object(x.jsxs)(N.a,{id:"user-top",className:"bg-white mb-5 ml-0 mr-0 mt-5 p-3",children:[Object(x.jsxs)(P.a,{xs:12,lg:6,id:"judul",children:[Object(x.jsx)("h1",{children:"PERSONNEL LIST"}),Object(x.jsx)("label",{children:"List of all personnels"})]}),Object(x.jsxs)(P.a,{xs:12,lg:6,id:"cari-tambah-btn",children:[Object(x.jsxs)(y.a,{xs:12,lg:6,variant:"outline-success",children:[Object(x.jsxs)("span",{className:"text-info",children:[Object(x.jsx)(C.a,{icon:D.e})," "]}),"Find Personnel"]})," ",Object(x.jsxs)(y.a,{xs:12,lg:6,variant:"info",children:["Add Personnel"," ",Object(x.jsx)(C.a,{icon:D.d})]})," "]})]}),Object(x.jsx)(N.a,{className:"mb-5 ml-0 mr-0 mt-5",style:{justifyContent:"space-between"},children:this.state.postData}),Object(x.jsx)(N.a,{className:"justify-content-center",children:Object(x.jsx)("div",{id:"paginate",className:"",children:Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{previousLabel:"< Previous Page",nextLabel:"Next Page >",breakLabel:" ",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:0,pageRangeDisplayed:0,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"btn active d-none"})})})})]}):Object(x.jsx)(g,{})}}]),a}(d.Component);t.default=Object(b.b)((function(e){return{users:e.users}}))(S)}}]);
//# sourceMappingURL=6.27a988f0.chunk.js.map