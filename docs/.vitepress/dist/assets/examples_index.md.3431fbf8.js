import{_ as c,o as s,c as i,z as e,t as o,G as t}from"./chunks/framework.eb48dd0f.js";const _={props:{title:{required:!0,type:String},example:{required:!0,type:String},link:{default:!1,type:String}}},p={style:{position:"relative",display:"flex","flex-direction":"column","align-items":"center"}},d=["src"],h=["href"];function m(n,r,a,B,C,E){return s(),i("div",p,[e("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",src:`/index.html/?example=${a.example}`},`\r
        `,8,d),e("a",{href:a.link,style:{position:"absolute",top:"0",left:"0",display:"inline-block",width:"13vh",height:"13vh","z-index":"5"}},null,8,h),e("span",null,o(a.title),1)])}const l=c(_,[["render",m]]);const x={class:"container"},u=e("h1",null,"Example Gallery",-1),D={class:"section"},f=e("h2",null,"The Classics",-1),k=e("hr",null,null,-1),v={class:"cards"},y={class:"section"},g=e("h2",null,"Geographic",-1),b=e("hr",null,null,-1),S={class:"cards"},G=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"examples/index.md","filePath":"examples/index.md"}'),$={name:"examples/index.md"},N=Object.assign($,{setup(n){return(r,a)=>(s(),i("div",null,[e("div",x,[u,e("div",D,[f,k,e("div",v,[t(l,{title:"3D Scatter Plot",example:"scatterplot3D",link:"/examples/scatter_plot_3D"}),t(l,{title:"3D Bar Chart",example:"barchart3D",link:"/examples/bar_chart_3D"}),t(l,{title:"3D Line Chart",example:"linechart3D",link:"/examples/line_chart_3D"}),t(l,{title:"2D Scatter Plot",example:"scatterplot2D",link:"/examples/scatter_plot_2D"}),t(l,{title:"2D Bar Chart",example:"barchart2D",link:"/examples/bar_chart_2D"}),t(l,{title:"2D Line Chart",example:"linechart2D",link:"/examples/line_chart_2D"})])]),e("div",y,[g,b,e("div",S,[t(l,{title:"Texture Map",example:"textureMap",link:"/examples/texture_map"})])])])]))}});export{G as __pageData,N as default};
