import{a as l,f as c,w as ua}from"../chunks/BB5MyQG0.js";import{i as xa}from"../chunks/CfEIrVZd.js";import{o as wa}from"../chunks/HR7M9EpP.js";import{K as ya,T as ka,U as ja,S as m,L as Oa,V as Pa,P as Ca,M as Ba,N as v,O as o,d as e,Q as t,R as d,v as Ma,W as w}from"../chunks/yM89E70g.js";import{s as b}from"../chunks/SPdGZtUR.js";import{i as _}from"../chunks/u_8C6bL4.js";import{h as za,s as y}from"../chunks/JaUMg9Ek.js";import{p as Ea}from"../chunks/DeVDQskz.js";const Na=!0,Wa=async()=>[{id:"0"},{id:"1"}],pe=Object.freeze(Object.defineProperty({__proto__:null,entries:Wa,prerender:Na},Symbol.toStringTag,{value:"Module"}));var Ia=ua(c(`<link rel="stylesheet" href="https://wisconsinwatch.org/wp-content/themes/newspack-theme/style.css?ver=2.17.0"/> <link rel="stylesheet" href="/css/wp-custom.css"/> <link rel="stylesheet" href="/css/landingpage.css"/> <script src="https://pym.nprapps.org/pym.v1.min.js"><\/script> <style>.candidate-detail {
			max-width: 900px;
			margin: 0 auto;
			padding: 2rem 1rem;
		}
		
		.candidate-header {
			display: flex;
			gap: 2rem;
			margin-bottom: 2rem;
			flex-wrap: wrap;
		}
		
		.candidate-photo {
			flex: 0 0 300px;
		}
		
		.candidate-photo img {
			width: 100%;
			height: auto;
			border-radius: 8px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		}
		
		.candidate-basic-info {
			flex: 1;
			min-width: 300px;
		}
		
		.candidate-detail h1 {
			margin-top: 0;
			color: #333;
		}
		
		.info-section {
			margin: 2rem 0;
		}
		
		.info-section h2 {
			color: #0073aa;
			border-bottom: 2px solid #0073aa;
			padding-bottom: 0.5rem;
		}
		
		.info-grid {
			display: grid;
			grid-template-columns: 200px 1fr;
			gap: 1rem;
			margin: 1rem 0;
		}
		
		.info-label {
			font-weight: bold;
			color: #555;
		}
		
		.info-value {
			color: #333;
		}
		
		.back-button {
			display: inline-block;
			margin-bottom: 1rem;
			padding: 0.75rem 1.5rem;
			background-color: #0073aa;
			color: white !important;
			text-decoration: none;
			border-radius: 4px;
			transition: background-color 0.2s;
		}
		
		.back-button:hover {
			background-color: #005a87;
		}
		
		.contact-links a {
			display: inline-block;
			margin-right: 1rem;
			margin-bottom: 0.5rem;
			color: #0073aa;
			text-decoration: none;
		}
		
		.contact-links a:hover {
			text-decoration: underline;
		}
		
		.placeholder-image {
			width: 100%;
			height: 400px;
			background-color: #e0e0e0;
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 4rem;
			color: #999;
		}
		
		@media (max-width: 768px) {
			.candidate-header {
				flex-direction: column;
			}
			
			.candidate-photo {
				flex: 1 1 100%;
			}
			
			.info-grid {
				grid-template-columns: 1fr;
			}
		}</style>`,1)),Ra=c("<img/>"),Sa=c('<div class="placeholder-image">?</div>'),Ta=c('<p style="font-size: 1.2rem; color: #666; margin: 0.5rem 0;"> </p>'),Fa=c('<p style="font-size: 1.1rem; color: #555; margin: 0.5rem 0;"> </p>'),La=c('<div class="info-section"><h2>Biography</h2> <p> </p></div>'),Aa=c('<div class="info-label">First Name:</div> <div class="info-value"> </div>',1),Da=c('<div class="info-label">Middle Name:</div> <div class="info-value"> </div>',1),Ga=c('<div class="info-label">Last Name:</div> <div class="info-value"> </div>',1),Ka=c('<div class="info-label">Education:</div> <div class="info-value"> </div>',1),Qa=c('<div class="info-label">Date of Birth:</div> <div class="info-value"> </div>',1),Ua=c('<div class="info-label">Gender:</div> <div class="info-value"> </div>',1),Va=c('<div class="info-label">Race:</div> <div class="info-value"> </div>',1),Xa=c('<div class="info-label">Ethnicity:</div> <div class="info-value"> </div>',1),$a=c('<div class="info-label">Campaign Email:</div> <div class="info-value"><a> </a></div>',1),qa=c('<div class="info-label">Official Email:</div> <div class="info-value"><a> </a></div>',1),Ha=c('<div class="info-label">Campaign Phone:</div> <div class="info-value"> </div>',1),Ja=c('<div class="info-label">Campaign Address:</div> <div class="info-value"> </div>',1),Ya=c('<div class="info-section"><h2>Contact Information</h2> <div class="info-grid"><!> <!> <!> <!></div></div>'),Za=c('<a target="_blank" rel="noopener noreferrer">Campaign Website →</a>'),ae=c('<a target="_blank" rel="noopener noreferrer">Official Website →</a>'),ee=c('<a target="_blank" rel="noopener noreferrer">Personal Website →</a>'),re=c('<a target="_blank" rel="noopener noreferrer">Facebook →</a>'),ie=c('<a target="_blank" rel="noopener noreferrer">X (Twitter) →</a>'),te=c('<a target="_blank" rel="noopener noreferrer">Instagram →</a>'),oe=c('<div class="info-section"><h2>Online Presence</h2> <div class="contact-links"><!> <!> <!> <!> <!> <!></div></div>'),ne=c('<div id="content" class="site-content"><section id="primary" class="content-area"><main id="main" class="site-main" role="main"><div class="candidate-detail"><a href="/wisconsin-supreme-court" class="back-button">← Back to Race</a> <a href="/" class="back-button" style="margin-left: 1rem;">← Back to Main Page</a> <div class="candidate-header"><div class="candidate-photo"><!></div> <div class="candidate-basic-info"><h1> </h1> <!> <!></div></div> <!> <div class="info-section"><h2>Basic Information</h2> <div class="info-grid"><!> <!> <!> <!> <!> <!> <!> <!></div></div> <!> <!></div></main></section></div>');function ge(Y,R){ya(R,!1);const a=Ma();let S=Ea(R,"data",8);wa(()=>{typeof window<"u"&&window.pym&&new window.pym.Child}),ka(()=>Ca(S()),()=>{Pa(a,S().candidate)}),ja(),xa();var P=ne();za("jjkajc",r=>{var i=Ia();Ba(8),l(r,i)});var T=v(P),F=v(T),L=v(F),C=o(v(L),4),B=v(C),Z=v(B);{var aa=r=>{var i=Ra();m(()=>{y(i,"src",(e(a),t(()=>e(a).image))),y(i,"alt",(e(a),t(()=>e(a).name)))}),l(r,i)},ea=r=>{var i=Sa();l(r,i)};_(Z,r=>{e(a),t(()=>e(a).image)?r(aa):r(ea,!1)})}d(B);var A=o(B,2),M=v(A),ra=v(M,!0);d(M);var D=o(M,2);{var ia=r=>{var i=Ta(),n=v(i);d(i),m(()=>b(n,`Party: ${e(a),t(()=>e(a).party)??""}`)),l(r,i)};_(D,r=>{e(a),t(()=>e(a).party)&&r(ia)})}var ta=o(D,2);{var oa=r=>{var i=Fa(),n=v(i);d(i),m(()=>b(n,`Occupation: ${e(a),t(()=>e(a).occupation)??""}`)),l(r,i)};_(ta,r=>{e(a),t(()=>e(a).occupation)&&r(oa)})}d(A),d(C);var G=o(C,2);{var na=r=>{var i=La(),n=o(v(i),2),f=v(n,!0);d(n),d(i),m(()=>b(f,(e(a),t(()=>e(a).bio)))),l(r,i)};_(G,r=>{e(a),t(()=>e(a).bio)&&r(na)})}var z=o(G,2),K=o(v(z),2),Q=v(K);{var va=r=>{var i=Aa(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).name_first)))),l(r,i)};_(Q,r=>{e(a),t(()=>e(a).name_first)&&r(va)})}var U=o(Q,2);{var da=r=>{var i=Da(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).name_middle)))),l(r,i)};_(U,r=>{e(a),t(()=>e(a).name_middle)&&r(da)})}var V=o(U,2);{var sa=r=>{var i=Ga(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).name_last)))),l(r,i)};_(V,r=>{e(a),t(()=>e(a).name_last)&&r(sa)})}var X=o(V,2);{var la=r=>{var i=Ka(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).education)))),l(r,i)};_(X,r=>{e(a),t(()=>e(a).education)&&r(la)})}var $=o(X,2);{var ca=r=>{var i=Qa(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).date_of_birth)))),l(r,i)};_($,r=>{e(a),t(()=>e(a).date_of_birth)&&r(ca)})}var q=o($,2);{var _a=r=>{var i=Ua(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).gender)))),l(r,i)};_(q,r=>{e(a),t(()=>e(a).gender)&&r(_a)})}var H=o(q,2);{var fa=r=>{var i=Va(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).race)))),l(r,i)};_(H,r=>{e(a),t(()=>e(a).race)&&r(fa)})}var ma=o(H,2);{var pa=r=>{var i=Xa(),n=o(w(i),2),f=v(n,!0);d(n),m(()=>b(f,(e(a),t(()=>e(a).ethnicity)))),l(r,i)};_(ma,r=>{e(a),t(()=>e(a).ethnicity)&&r(pa)})}d(K),d(z);var J=o(z,2);{var ga=r=>{var i=Ya(),n=o(v(i),2),f=v(n);{var E=p=>{var h=$a(),u=o(w(h),2),x=v(u),s=v(x,!0);d(x),d(u),m(()=>{y(x,"href",`mailto:${e(a),t(()=>e(a).email_campaign)??""}`),b(s,(e(a),t(()=>e(a).email_campaign)))}),l(p,h)};_(f,p=>{e(a),t(()=>e(a).email_campaign)&&p(E)})}var k=o(f,2);{var N=p=>{var h=qa(),u=o(w(h),2),x=v(u),s=v(x,!0);d(x),d(u),m(()=>{y(x,"href",`mailto:${e(a),t(()=>e(a).email_official)??""}`),b(s,(e(a),t(()=>e(a).email_official)))}),l(p,h)};_(k,p=>{e(a),t(()=>e(a).email_official)&&p(N)})}var j=o(k,2);{var W=p=>{var h=Ha(),u=o(w(h),2),x=v(u,!0);d(u),m(()=>b(x,(e(a),t(()=>e(a).phone_campaign)))),l(p,h)};_(j,p=>{e(a),t(()=>e(a).phone_campaign)&&p(W)})}var O=o(j,2);{var I=p=>{var h=Ja(),u=o(w(h),2),x=v(u,!0);d(u),m(()=>b(x,(e(a),t(()=>e(a).address_campaign)))),l(p,h)};_(O,p=>{e(a),t(()=>e(a).address_campaign)&&p(I)})}d(n),d(i),l(r,i)};_(J,r=>{e(a),t(()=>e(a).website_campaign||e(a).website_official||e(a).website_personal||e(a).email_campaign||e(a).email_official||e(a).phone_campaign)&&r(ga)})}var ba=o(J,2);{var ha=r=>{var i=oe(),n=o(v(i),2),f=v(n);{var E=s=>{var g=Za();m(()=>y(g,"href",(e(a),t(()=>e(a).website_campaign)))),l(s,g)};_(f,s=>{e(a),t(()=>e(a).website_campaign)&&s(E)})}var k=o(f,2);{var N=s=>{var g=ae();m(()=>y(g,"href",(e(a),t(()=>e(a).website_official)))),l(s,g)};_(k,s=>{e(a),t(()=>e(a).website_official)&&s(N)})}var j=o(k,2);{var W=s=>{var g=ee();m(()=>y(g,"href",(e(a),t(()=>e(a).website_personal)))),l(s,g)};_(j,s=>{e(a),t(()=>e(a).website_personal)&&s(W)})}var O=o(j,2);{var I=s=>{var g=re();m(()=>y(g,"href",(e(a),t(()=>e(a).facebook_campaign)))),l(s,g)};_(O,s=>{e(a),t(()=>e(a).facebook_campaign)&&s(I)})}var p=o(O,2);{var h=s=>{var g=ie();m(()=>y(g,"href",(e(a),t(()=>e(a).x_campaign)))),l(s,g)};_(p,s=>{e(a),t(()=>e(a).x_campaign)&&s(h)})}var u=o(p,2);{var x=s=>{var g=te();m(()=>y(g,"href",(e(a),t(()=>e(a).instagram_campaign)))),l(s,g)};_(u,s=>{e(a),t(()=>e(a).instagram_campaign)&&s(x)})}d(n),d(i),l(r,i)};_(ba,r=>{e(a),t(()=>e(a).website_campaign||e(a).website_official||e(a).website_personal||e(a).facebook_campaign||e(a).x_campaign||e(a).instagram_campaign)&&r(ha)})}d(L),d(F),d(T),d(P),m(()=>b(ra,(e(a),t(()=>e(a).name)))),l(Y,P),Oa()}export{ge as component,pe as universal};
