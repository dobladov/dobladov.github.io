import"./hoisted.d52944d0.js";const f=(i,e,t,o,n)=>{const r=t-e,c=(n-o)/r;return(i-e)*c+o};class S{gradients;memory;constructor(){this.seed()}rand_vect(){let e=Math.random()*2*Math.PI;return{x:Math.cos(e),y:Math.sin(e)}}dot_prod_grid(e,t,o,n){let r,d={x:e-o,y:t-n};return this.gradients[[o,n]]?r=this.gradients[[o,n]]:(r=this.rand_vect(),this.gradients[[o,n]]=r),d.x*r.x+d.y*r.y}smootherstep(e){return 6*e**5-15*e**4+10*e**3}interp(e,t,o){return t+this.smootherstep(e)*(o-t)}seed(){this.gradients={},this.memory={}}get(e,t){if(this.memory.hasOwnProperty([e,t]))return this.memory[[e,t]];let o=Math.floor(e),n=Math.floor(t),r=this.dot_prod_grid(e,t,o,n),d=this.dot_prod_grid(e,t,o+1,n),c=this.dot_prod_grid(e,t,o,n+1),m=this.dot_prod_grid(e,t,o+1,n+1),b=this.interp(e-o,r,d),P=this.interp(e-o,c,m),p=this.interp(t-n,b,P);return this.memory[[e,t]]=p,p}}const s=document.getElementById("orb"),l=s.getContext("2d"),y=new S,M=100,w=.01,_=[],h=2,u=5;let x,g={x:0,y:0};window.addEventListener("deviceorientation",i=>{x=i.gamma},!0);window.addEventListener("mousemove",i=>{g={x:i.clientX,y:i.clientY}});window.addEventListener("mousedown",i=>{y.seed()});const E=()=>{s.style.width="500px",s.style.height="500px";const t=window.devicePixelRatio;s.width=Math.floor(500*t/2),s.height=Math.floor(500*t/2)},a=(i=0,e=0)=>Math.floor(Math.random()*(e-i)+i);E();for(let i=0;i<M;i++)_.push({x:a(s.width),y:a(s.height)});const I=i=>i.x>=0&&i.x<=s.width&&i.y>=0&&i.y<=s.height,R=()=>{const i=s.getBoundingClientRect();l.fillStyle="rgba(40, 40, 40, 0.03)",l.fillRect(0,0,s.width,s.height);for(let e=0;e<M;e++){let t=_[e],o=f(y.get(t.x*w,t.y*w),-1,1,0,1),n=Math.PI*2*o,r=f(g.y,0,window.screen.height*.9,.2,2);l.fillStyle="rgb(255, 0, 0)",l.fillRect(t.x+u,t.y,h,h),l.fillStyle="rgb(0, 255, 0)",l.fillRect(t.x,t.y,h,h),l.fillStyle="rgb(0, 0, 255)",l.fillRect(t.x-u,t.y,h,h),x<0||g.x<i.width/2+i.left?(t.x+=Math.cos(n)*r,t.y+=Math.sin(n)):(t.x-=Math.cos(n)*r,t.y-=Math.sin(n)*r),I(t)||(t.x=a(s.width),t.y=a(s.height))}window.requestAnimationFrame(R)};requestAnimationFrame(R);