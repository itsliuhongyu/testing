import{a as n,f as c}from"../chunks/BXSoaE7z.js";import{i as K}from"../chunks/ByK_G9SY.js";import{K as L,L as N,O as l,M as Q,N as o,P as T,Q as i,R as s,d as a,S as g}from"../chunks/B2FYtd8N.js";import{s as j}from"../chunks/BmFrYnjO.js";import{i as M}from"../chunks/DA7fbhRF.js";import{e as W,i as Y}from"../chunks/DAiS3IZ2.js";import{h as q,s as h}from"../chunks/CpKluj6K.js";import{p as A}from"../chunks/Gdso-4nZ.js";const D=!0,te=Object.freeze(Object.defineProperty({__proto__:null,prerender:D},Symbol.toStringTag,{value:"Module"}));var E=c(`<link rel="stylesheet" href="https://wisconsinwatch.org/wp-content/themes/newspack-theme/style.css?ver=2.17.0"/> <link rel="stylesheet" href="/css/wp-custom.css"/> <link rel="stylesheet" href="/css/landingpage.css"/> <style>.candidate-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: 2rem;
			margin: 2rem 0;
			padding: 0 1rem;
		}
		
		.candidate-card {
			background: white;
			border: 1px solid #ddd;
			border-radius: 8px;
			overflow: hidden;
			cursor: pointer;
			transition: transform 0.2s, box-shadow 0.2s;
			text-decoration: none;
			color: inherit;
			display: block;
		}
		
		.candidate-card:hover {
			transform: translateY(-5px);
			box-shadow: 0 4px 12px rgba(0,0,0,0.15);
		}
		
		.candidate-image {
			width: 100%;
			height: 300px;
			object-fit: cover;
			background-color: #f0f0f0;
		}
		
		.candidate-info {
			padding: 1.5rem;
			text-align: center;
		}
		
		.candidate-name {
			font-size: 1.5rem;
			font-weight: bold;
			margin: 0;
			color: #333;
		}
		
		.candidate-party {
			color: #666;
			margin-top: 0.5rem;
		}
		
		.back-button {
			display: inline-block;
			margin: 2rem 0 1rem 1rem;
			padding: 0.75rem 1.5rem;
			background-color: #0073aa;
			color: white;
			text-decoration: none;
			border-radius: 4px;
			transition: background-color 0.2s;
		}
		
		.back-button:hover {
			background-color: #005a87;
		}</style>`,1),F=c('<img class="candidate-image"/>'),G=c('<div class="candidate-image" style="display: flex; align-items: center; justify-content: center; background-color: #e0e0e0;"><span style="font-size: 3rem; color: #999;">?</span></div>'),H=c('<p class="candidate-party"> </p>'),I=c('<a class="candidate-card"><!> <div class="candidate-info"><h3 class="candidate-name"> </h3> <!></div></a>'),J=c('<div id="content" class="site-content"><section id="primary" class="content-area"><main id="main" class="site-main" role="main"><a href="/" class="back-button">← Back to Main Page</a> <header class="entry-header"><h1 class="entry-title">Wisconsin Supreme Court Race</h1></header> <div class="entry-content"><h2 class="wp-block-heading has-text-align-center">Meet the Candidates</h2> <div class="candidate-grid"></div></div></main></section></div>');function se(S,f){L(f,!1);let u=A(f,"data",8);K();var m=J();q("4drw68",p=>{var e=E();Q(6),n(p,e)});var b=o(m),_=o(b),y=l(o(_),4),x=l(o(y),2);W(x,5,()=>(T(u()),i(()=>u().candidates)),Y,(p,e)=>{var d=I(),k=o(d);{var z=r=>{var t=F();g(()=>{h(t,"src",(a(e),i(()=>a(e).image))),h(t,"alt",(a(e),i(()=>a(e).name)))}),n(r,t)},O=r=>{var t=G();n(r,t)};M(k,r=>{a(e),i(()=>a(e).image)?r(z):r(O,!1)})}var w=l(k,2),v=o(w),P=o(v,!0);s(v);var C=l(v,2);{var R=r=>{var t=H(),B=o(t,!0);s(t),g(()=>j(B,(a(e),i(()=>a(e).party)))),n(r,t)};M(C,r=>{a(e),i(()=>a(e).party)&&r(R)})}s(w),s(d),g(()=>{h(d,"href",`/wisconsin-supreme-court/${a(e),i(()=>a(e).id)??""}`),j(P,(a(e),i(()=>a(e).name)))}),n(p,d)}),s(x),s(y),s(_),s(b),s(m),n(S,m),N()}export{se as component,te as universal};
