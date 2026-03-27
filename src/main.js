// src/main.js
import './style.css';

(function(){
  var bar=document.getElementById('pre-bar');
  var count=document.getElementById('pre-count');
  var el=document.getElementById('preloader');
  if(!bar||!count||!el)return;
  var current=0;
  function step(){
    var inc=Math.max(1,Math.floor(Math.random()*Math.min(100-current,7)));
    current=Math.min(current+inc,100);
    bar.style.width=current+'%';
    count.textContent=current+'%';
    if(current<100){setTimeout(step,15+Math.random()*30);}
    else{setTimeout(function(){el.classList.add('exit');setTimeout(function(){if(el.parentNode)el.parentNode.removeChild(el);},1000);},400);}
  }
  step();
})();

/* ─── DATA ─── */
const PROJECTS = [
  {
    id: 3,
    title: "Ma Long — Legend",
    cat: "Affiche",
    client: "Olympic Series",
    loc: "Beijing, CN",
    year: "2024",
    svc: "Retouche & Composition",
    desc: "Le geste pur d'une légende. Focus sur la précision chirurgicale et la puissance cinétique du Dragon Chinois.",
    tags: ["Table Tennis", "Legend", "Dragon", "Gold"],
    thumb: "/images/Affiche/Ma_long1.jpg",
    gallery:[
      "/images/Affiche/Ma_long1.jpg",
      "/images/Affiche/Ma_long2.jpg",
      "/images/Affiche/Ma_long3.jpg",
      "/images/Affiche/Ma_long4.jpg",
      {type:"video", src:"/images/Affiche/Ma_long5.mp4", thumb:"/images/Affiche/Ma_long1.jpg", caption:"Making Of Vidéo"}
    ],
    makingOf: {
      before: "/images/Affiche/Ma_long4.jpg",
      after: "/images/Affiche/Ma_long1.jpg"
    }
  },
  {
    id: 8,
    title: "MEDIATRANSPORTS — Film IA",
    cat: "Vidéo",
    client: "Mediatransports",
    loc: "Paris, FR",
    year: "2026",
    svc: "IA & Direction Artistique",
    desc: "Mediatransports nous a confié la création d’un film 100% IA. 6 jours pour produire l’univers, l’avatar et toute la DA.",
    tags: ["AI Video", "Subway", "Future", "Innovation"],
    thumb: "/images/Storyboard_mediatransport.png",
    videoUrl: "https://www.youtube.com/embed/1NI1vao01UE",
    preview: "https://www.youtube.com/embed/1NI1vao01UE?controls=0&mute=1&loop=1&playlist=1NI1vao01UE&enablejsapi=1",
    gallery: [
      {type:"video", src:"https://www.youtube.com/embed/1NI1vao01UE?autoplay=1", thumb:"/images/Storyboard_mediatransport.png", caption:"Film Principal"},
      "/images/Storyboard_mediatransport.png"
    ],
    makingOf: {
      before: "/images/Storyboard_mediatransport.png",
      after: "/images/Storyboard_mediatransport.png"
    }
  },
  {
    id: 0,
    title: "Takamoto Katsuta",
    cat: "Automobile",
    client: "Projet Personnel",
    loc: "WRC",
    year: "2025",
    svc: "Photomontage & Retouche",
    tools: "Photoshop, Camera Raw",
    desc: "Affiche fan-made dédiée à Takamoto Katsuta, réalisée sur Photoshop sans IA. Montage complet : détourage, color grading, intégration de la voiture dans un décor montagneux, travail sur la poussière et les lueurs pour un rendu ciné façon affiche officielle WRC.",
    tags: ["WRC", "Toyota", "Rally", "Dust"],
    thumb: "/images/RALLYE/Takamoto_1.jpg",
    gallery: [
      {type:"video", src:"/images/RALLYE/Takamoto_6.mp4", thumb:"/images/RALLYE/Takamoto_1.jpg", caption:"Making Of Vidéo"},
      "/images/RALLYE/Takamoto_2.jpg",
      "/images/RALLYE/Takamoto_3.mp4",
      "/images/RALLYE/Takamoto_4.jpg",
      "/images/RALLYE/Takamoto_5.jpg"
    ],
    makingOf: {
      before: "/images/RALLYE/Takamoto_5.jpg",
      after: "/images/RALLYE/Takamoto_1.jpg"
    }
  },
  {
    id: 1,
    title: "LAFERRARI BLUE",
    cat: "Automobile",
    client: "Projet Personnel",
    loc: "Paris, FR",
    year: "2025",
    svc: "Photomontage Premium",
    desc: "Une vision unique de la LaFerrari, sublimée par une teinte bleue électrique. Un travail de lumière et de composition pour révéler les lignes agressives de cette hypercar.",
    tags: ["Ferrari", "Hypercar", "Blue", "Speed"],
    thumb: "/images/ferrari/laferrariblue1.jpg",
    gallery: ["/images/ferrari/laferrariblue1.jpg", "/images/ferrari/laferrariblue3.jpg", "/images/ferrari/laferrariblue4.jpg", "/images/ferrari/laferrariblue5.jpg"],
    makingOf: {
      before: "/images/ferrari/laferrariblue5.jpg",
      after: "/images/ferrari/laferrariblue1.jpg"
    }
  },
  {
    id:2,
    title:"Ferrari 499P — Le Mans",
    cat: ["Affiche", "Automobile"],
    client:"Projet Personnel",
    loc:"Le Mans, FR",
    year:"2025",
    svc:"Photomontage & Affiche",
    desc:"Pendant les 24h du Mans, j'ai relevé un défi : créer une affiche impactante sans IA, juste avec ma vision et mes outils. Choix aléatoire de la Ferrari 499P #50. Puissance, vitesse, émotion — tout ce que Le Mans représente.",
    tags: ["Le Mans", "Endurance", "Racing", "Red"],
    thumb:"/images/499P/499P_1.jpg",
    gallery:["/images/499P/499P_1.jpg", "/images/499P/499P_2.jpg", "/images/499P/499P_3.jpg"],
    makingOf:{before:"/images/499P/499P_3.jpg",after:"/images/499P/499P_1.jpg"}
  },
  {
    id:4,
    title:"Champions League 2024",
    cat:"Sport & Action",
    client:"UEFA · Paris",
    loc:"Paris, FR",
    year:"2024",
    svc:"Photomontage & Affiche",
    desc:"La nuit la plus électrique du football européen, immortalisée. Une composition qui rend hommage à la grandeur de la compétition.",
    tags: ["Football", "UEFA", "Stadium", "Night"],
    thumb:"https://picsum.photos/seed/champions/1350/1080",
    gallery:["https://picsum.photos/seed/champions/1350/1080","https://picsum.photos/seed/champions2/1350/1080"],
    makingOf: {
      before: "https://picsum.photos/seed/champions2/1350/1080",
      after: "https://picsum.photos/seed/champions/1350/1080"
    }
  },
  {
    id:5,
    title:"Tour de France 2024",
    cat:"Sport & Action",
    client:"ASO Cyclisme",
    loc:"Paris, FR",
    year:"2024",
    svc:"Composition & Retouche",
    desc:"L'épopée du peloton, saisie dans toute sa puissance et sa sérénité. Un poster iconique pour la plus grande course cycliste.",
    tags: ["Cycling", "Peloton", "France", "Yellow"],
    thumb:"https://picsum.photos/seed/tour/1350/1080",
    gallery:["https://picsum.photos/seed/tour/1350/1080","https://picsum.photos/seed/tour2/1350/1080"],
    makingOf: {
      before: "https://picsum.photos/seed/tour2/1350/1080",
      after: "https://picsum.photos/seed/tour/1350/1080"
    }
  },
  {
    id:6,
    title:"Lamborghini Huracán",
    cat:"Automobile",
    client:"Lamborghini SPA",
    loc:"Sant'Agata, IT",
    year:"2024",
    svc:"Photomontage Premium",
    desc:"La bête italienne dans toute sa splendeur. Une ode à la vitesse et au design qui redéfinit les limites du possible.",
    tags: ["Supercar", "Italian", "Design", "Green"],
    thumb:"https://picsum.photos/seed/lambo/1350/1080",
    gallery:["https://picsum.photos/seed/lambo/1350/1080","https://picsum.photos/seed/lambo2/1350/1080"],
    makingOf: {
      before: "https://picsum.photos/seed/lambo2/1350/1080",
      after: "https://picsum.photos/seed/lambo/1350/1080"
    }
  },
  {
    id:7,
    title:"Paris 2023 — Olympisme",
    cat:"Composition",
    client:"COJOP France",
    loc:"Paris, FR",
    year:"2023",
    svc:"Direction Artistique",
    desc:"L'esprit olympique sublimé. Une composition qui rend hommage à l'excellence sportive mondiale dans un cadre parisien unique.",
    tags: ["Olympics", "Paris", "Eiffel Tower", "Gold"],
    thumb:"https://picsum.photos/seed/paris24/1350/1080",
    gallery:["https://picsum.photos/seed/paris24/1350/1080","https://picsum.photos/seed/paris24b/1350/1080"],
    makingOf: {
      before: "https://picsum.photos/seed/paris24b/1350/1080",
      after: "https://picsum.photos/seed/paris24/1350/1080"
    }
  },
  {
    id: 9,
    title: "Poids de corps idéal",
    cat: "Miniature",
    client: "@forcespecialtraining",
    loc: "Digital",
    year: "2024",
    svc: "Miniature YouTube",
    desc: "Création de miniature pour vidéo YouTube sur le thème de la santé et du sport.",
    tags: ["YouTube", "Thumbnail", "Sport"],
    thumb: "/images/miniature/charle1.jpg",
    gallery: ["/images/miniature/charle1.jpg"]
  },
  {
    id: 10,
    title: "Charles FAQ",
    cat: "Miniature", 
    client: "@forcespecialtraining",
    loc: "Digital",
    year: "2024",
    svc: "Miniature YouTube",
    desc: "Design de miniature pour une vidéo FAQ.",
    tags: ["YouTube", "Thumbnail", "FAQ"],
    thumb: "/images/miniature/Charle%20FAQ.jpg",
    gallery: ["/images/miniature/Charle%20FAQ.jpg"]
  },
  {
    id: 11,
    title: "DELOAD",
    cat: "Miniature", 
    client: "@forcespecialtraining",
    loc: "Digital",
    year: "2024",
    svc: "Miniature YouTube",
    desc: "Visuel impactant pour une vidéo sur la récupération.",
    tags: ["YouTube", "Thumbnail", "Training"],
    thumb: "/images/miniature/DeLOAD.jpg",
    gallery: ["/images/miniature/DeLOAD.jpg"]
  },
  {
    id: 12,
    title: "Stage Commando",
    cat: "Miniature", 
    client: "@forcespecialtraining",
    loc: "Digital",
    year: "2024",
    svc: "Miniature YouTube",
    desc: "Miniature immersion pour une vidéo style reportage/action.",
    tags: ["YouTube", "Thumbnail", "Action"],
    thumb: "/images/miniature/MINIA%203_STAGE%20COMMANDO.jpg",
    gallery: ["/images/miniature/MINIA%203_STAGE%20COMMANDO.jpg"]
  },
  {
    id: 13,
    title: "Miniature Concept",
    cat: "Miniature",
    client: "YouTube",
    loc: "Digital",
    year: "2024",
    svc: "Miniature YouTube",
    desc: "Création graphique pour contenu vidéo.",
    tags: ["YouTube", "Thumbnail", "Concept"],
    thumb: "/images/miniature/Miniature%201.jpg", 
    gallery: ["/images/miniature/Miniature%201.jpg"]
  },
  {
    id: 14,
    title: "Aston Martin V12",
    cat: "Automobile",
    client: "Projet Personnel",
    loc: "Paris, FR",
    year: "2025",
    svc: "Photomontage Premium",
    tools: "Photoshop, Lightroom",
    desc: "Intégration d'une Aston Martin dans un décor urbain nocturne avec gestion avancée des reflets et de l'éclairage.",
    tags: ["Aston Martin", "Night", "Urban", "Retouche"],
    thumb: "/images/499P/499P_1.jpg", 
    gallery: ["/images/499P/499P_1.jpg"]
  },
];
const SKILLS=[{name:"Photoshop / Retouche",pct:98},{name:"Illustrator / Vecteur",pct:92},{name:"Direction Artistique",pct:90},{name:"After Effects / Motion",pct:78},{name:"Figma / UI Design",pct:72}];
const TOOLS=[
  {name:"Photoshop",l:"Ps",color:"#31A8FF"},
  {name:"Premiere Pro",l:"Pr",color:"#EA77FF"},
  {name:"After Effects",l:"Ae",color:"#9999FF"},
  {name:"Illustrator",l:"Ai",color:"#FF9A00"},
  {name:"Figma",figma:true},
  {name:"WordPress",l:"WP",color:"#21a0db"},
  {name:"Perplexity",l:"Px",color:"#22b8cf"},
  {name:"Gemini",l:"✦",color:"#4e85f6"}
];

/* ─── VIDEO OBSERVER ─── */
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      if (entry.target.tagName === 'VIDEO' && !entry.target.paused) entry.target.pause();
      else if (entry.target.tagName === 'IFRAME') entry.target.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } else {
      if (entry.target.tagName === 'VIDEO' && entry.target.hasAttribute('autoplay') && entry.target.paused) entry.target.play().catch(()=>{});
    }
  });
}, { threshold: 0.1 });

/* ─── THREE.JS LIQUID GRADIENT ─── */
let threeApp = null;

function initHeroGL() {
  const wrap = document.getElementById('hero-canvas-wrap');
  if (!wrap || threeApp || window.skipThreeRender) return;
  if (typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({antialias:true,alpha:false});
  const W = wrap.clientWidth, H = wrap.clientHeight;
  renderer.setSize(W,H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  wrap.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d0f1e);
  const camera = new THREE.PerspectiveCamera(45, W/H, 0.1, 1000);
  camera.position.z = 50;

  const getViewSize = () => {
    const fov = camera.fov * Math.PI / 180;
    const h = Math.abs(camera.position.z * Math.tan(fov/2) * 2);
    return {w: h * camera.aspect, h};
  };

  // Touch texture
  const ttCanvas = document.createElement('canvas');
  ttCanvas.width = ttCanvas.height = 64;
  const ttCtx = ttCanvas.getContext('2d');
  const ttTex = new THREE.Texture(ttCanvas);
  let ttTrail = [], ttLast = null;
  const ttRadius = 0.1;

  function ttUpdate() {
    ttCtx.fillStyle = 'black';
    ttCtx.fillRect(0,0,64,64);
    for (let i = ttTrail.length-1; i >= 0; i--) {
      const p = ttTrail[i];
      const f = p.force * (1/64) * (1 - p.age/64);
      p.x += p.vx*f; p.y += p.vy*f; p.age++;
      if (p.age > 64) { ttTrail.splice(i,1); continue; }
      const px = p.x*64, py = (1-p.y)*64;
      let intensity = p.age < 64*.3
        ? Math.sin((p.age/(64*.3))*(Math.PI/2))
        : -((1-(p.age-64*.3)/(64*.7))*((1-(p.age-64*.3)/(64*.7))-2));
      intensity *= p.force;
      const r = ttRadius*64;
      ttCtx.shadowOffsetX = 320; ttCtx.shadowOffsetY = 320;
      ttCtx.shadowBlur = r;
      ttCtx.shadowColor = `rgba(${((p.vx+1)/2)*255},${((p.vy+1)/2)*255},${intensity*255},${.2*intensity})`;
      ttCtx.beginPath();
      ttCtx.fillStyle = 'rgba(255,0,0,1)';
      ttCtx.arc(px-320, py-320, r, 0, Math.PI*2);
      ttCtx.fill();
    }
    ttTex.needsUpdate = true;
  }

  function ttAddTouch(pt) {
    let force=0,vx=0,vy=0;
    if (ttLast) {
      const dx=pt.x-ttLast.x,dy=pt.y-ttLast.y;
      if (dx===0&&dy===0) return;
      const d=Math.sqrt(dx*dx+dy*dy);
      vx=dx/d;vy=dy/d;
      force=Math.min((dx*dx+dy*dy)*20000,2.0);
    }
    ttLast={x:pt.x,y:pt.y};
    ttTrail.push({x:pt.x,y:pt.y,age:0,force,vx,vy});
  }

  wrap.addEventListener('mousemove',e=>{
    ttAddTouch({x:e.offsetX/wrap.clientWidth,y:1-e.offsetY/wrap.clientHeight});
  });

  // Shader
  const vs = getViewSize();
  const geo = new THREE.PlaneGeometry(vs.w,vs.h,1,1);
  const uniforms = {
    uTime:{value:0},
    uResolution:{value:new THREE.Vector2(W,H)},
    uColor1:{value:new THREE.Vector3(0.94,0.35,0.29)},
    uColor2:{value:new THREE.Vector3(0.05,0.06,0.12)},
    uSpeed:{value:0.9},
    uIntensity:{value:1.6},
    uTouchTexture:{value:ttTex},
    uGrainIntensity:{value:0.0},
    uDarkNavy:{value:new THREE.Vector3(0.05,0.06,0.12)},
    uGradientSize:{value:0.42},
    uC1W:{value:0.55},
    uC2W:{value:1.6},
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader:`varying vec2 vUv;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);vUv=uv;}`,
    fragmentShader:`
      uniform float uTime,uSpeed,uIntensity,uGrainIntensity,uGradientSize,uC1W,uC2W;
      uniform vec2 uResolution;
      uniform vec3 uColor1,uColor2,uDarkNavy;
      uniform sampler2D uTouchTexture;
      varying vec2 vUv;
      float grain(vec2 uv,float t){return fract(sin(dot(uv*uResolution*0.5+t,vec2(12.9898,78.233)))*43758.5453)*2.0-1.0;}
      void main(){
        vec2 uv=vUv;
        vec4 tt=texture2D(uTouchTexture,uv);
        uv.x-=(tt.r*2.0-1.0)*0.6*tt.b;
        uv.y-=(tt.g*2.0-1.0)*0.6*tt.b;
        float dist=length(uv-vec2(0.5));
        float ripple=sin(dist*18.0-uTime*2.5)*0.03*tt.b;
        uv+=vec2(ripple);

        float t=uTime*uSpeed;
        vec2 c1=vec2(0.5+sin(t*0.4)*0.4,0.5+cos(t*0.5)*0.4);
        vec2 c2=vec2(0.5+cos(t*0.6)*0.5,0.5+sin(t*0.45)*0.5);
        vec2 c3=vec2(0.5+sin(t*0.35)*0.45,0.5+cos(t*0.55)*0.45);
        vec2 c4=vec2(0.5+cos(t*0.5)*0.4,0.5+sin(t*0.4)*0.4);
        vec2 c5=vec2(0.5+sin(t*0.7)*0.35,0.5+cos(t*0.6)*0.35);
        vec2 c6=vec2(0.5+cos(t*0.45)*0.5,0.5+sin(t*0.65)*0.5);

        float i1=1.0-smoothstep(0.0,uGradientSize,length(uv-c1));
        float i2=1.0-smoothstep(0.0,uGradientSize,length(uv-c2));
        float i3=1.0-smoothstep(0.0,uGradientSize,length(uv-c3));
        float i4=1.0-smoothstep(0.0,uGradientSize,length(uv-c4));
        float i5=1.0-smoothstep(0.0,uGradientSize,length(uv-c5));
        float i6=1.0-smoothstep(0.0,uGradientSize,length(uv-c6));

        vec3 col=vec3(0.0);
        col+=uColor1*i1*(0.5+0.5*sin(t))*uC1W;
        col+=uColor2*i2*(0.5+0.5*cos(t*1.2))*uC2W;
        col+=uColor1*i3*(0.5+0.5*sin(t*0.8))*uC1W;
        col+=uColor2*i4*(0.5+0.5*cos(t*1.3))*uC2W;
        col+=uColor1*i5*(0.5+0.5*sin(t*1.1))*uC1W;
        col+=uColor2*i6*(0.5+0.5*cos(t*0.9))*uC2W;

        col=clamp(col,vec3(0.0),vec3(1.0))*uIntensity;
        float lum=dot(col,vec3(0.299,0.587,0.114));
        col=mix(vec3(lum),col,1.3);
        col=pow(col,vec3(0.94));
        float brightness=length(col);
        col=mix(uDarkNavy,col,max(brightness*1.2,0.12));
        col+=grain(uv,uTime)*uGrainIntensity;
        col=clamp(col,vec3(0.0),vec3(1.0));
        gl_FragColor=vec4(col,1.0);
      }
    `
  });

  const mesh = new THREE.Mesh(geo,mat);
  scene.add(mesh);
  const clock = new THREE.Clock();

  function tick() {
    const delta = Math.min(clock.getDelta(),.1);
    ttUpdate();
    uniforms.uTime.value += delta;
    renderer.render(scene,camera);
    threeApp.animId = requestAnimationFrame(tick);
  }

  threeApp = {
    renderer,scene,camera,uniforms,geo,mesh,
    animId:null,
    resize() {
      const w=wrap.clientWidth,h=wrap.clientHeight;
      camera.aspect=w/h;
      camera.updateProjectionMatrix();
      renderer.setSize(w,h);
      uniforms.uResolution.value.set(w,h);
      const vs2=getViewSize();
      mesh.geometry.dispose();
      mesh.geometry=new THREE.PlaneGeometry(vs2.w,vs2.h,1,1);
    },
    destroy() {
      if(this.animId) cancelAnimationFrame(this.animId);
      renderer.dispose();
      if(wrap.contains(renderer.domElement)) wrap.removeChild(renderer.domElement);
      threeApp=null;
    }
  };

  window.addEventListener('resize',()=>threeApp&&threeApp.resize());
  tick();
}

/* ─── CURSOR ─── */
const cursorRing = document.getElementById('cursor-ring');
const cursorDot = document.getElementById('cursor-dot');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function cursorLoop(){
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  cursorRing.style.left=rx+'px';cursorRing.style.top=ry+'px';
  cursorDot.style.left=mx+'px';cursorDot.style.top=my+'px';
  requestAnimationFrame(cursorLoop);
})();
document.querySelectorAll('a,button,[onclick]').forEach(el=>{
  el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-grow'));
  el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-grow'));
});

/* ─── ROUTER ─── */
let isNavigating = false;
function navigate(page,data) {
  if(isNavigating) return false;
  isNavigating = true;

  const current = document.querySelector('.page.active');
  const next = document.getElementById('page-'+page);
  const curtain = document.getElementById('transition-curtain');

  if(!next) { isNavigating = false; return false; }

  document.querySelectorAll('[data-page]').forEach(a=>a.classList.toggle('active',a.dataset.page===page));

  // Start transition
  curtain.style.transformOrigin = 'bottom';
  curtain.classList.add('in');

  setTimeout(() => {
    if(current){
      current.classList.remove('active');
      current.classList.remove('exit');
    }
    next.classList.add('active');

    if(window.lenis) window.lenis.scrollTo(0, {immediate:true}); else window.scrollTo(0,0);

    if(page==='home') setTimeout(initHeroGL,80);
    else if(threeApp) threeApp.destroy();
    if(page==='portfolio') renderGal(currentCat);
    if(page==='about') initAbout();
    if(page==='project'&&data!==undefined) renderProject(data);
    setTimeout(triggerReveal,120);
    
    // End transition
    curtain.style.transformOrigin = 'top';
    curtain.classList.remove('in');
    
    setTimeout(() => {
      isNavigating = false;
    }, 600);
  }, 600);

  return false;
}
window.navigate = navigate;

function toggleMobile(){
  const n=document.getElementById('mobile-nav');
  const b=document.getElementById('burger');
  n.classList.toggle('open');
  b.textContent=n.classList.contains('open')?'✕':'☰';
}
window.toggleMobile = toggleMobile;

/* ─── GALLERY ─── */
let currentCat='Tout';
let currentItems=[];
let isAppending=false;

function renderGal(cat){
  currentCat=cat;
  document.querySelectorAll('.fbtn').forEach(b => {
    b.classList.toggle('on', b.textContent.trim() === cat);
  });

  const grid=document.getElementById('gal-grid');
  
  if(cat === 'Miniature') grid.classList.add('miniature-mode');
  else grid.classList.remove('miniature-mode');
  
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(20px)';
  grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  setTimeout(() => {
    currentItems=cat==='Tout'?PROJECTS:PROJECTS.filter(p => {
      if (Array.isArray(p.cat)) return p.cat.includes(cat);
      return p.cat === cat;
    });
    document.getElementById('gal-count').textContent=currentItems.length+' projet'+(currentItems.length>1?'s':'');
    grid.innerHTML='';
    grid.style.transition = 'none';
    grid.style.opacity = '1';
    grid.style.transform = 'none';
    isAppending=false;
    appendGalItems();
  }, 300);
}

function appendGalItems(){
  if(isAppending) return;
  isAppending=true;
  const grid=document.getElementById('gal-grid');
  currentItems.forEach((p,i)=>{
    const c=document.createElement('div');
    c.className='gal-card rv';
    let vidHtml = '';
    if(p.preview) {
      if(p.preview.includes('youtube.com') || p.preview.includes('vimeo.com')) {
        vidHtml = `<iframe class="card-video" src="${p.preview}" allow="autoplay; encrypted-media" frameborder="0"></iframe>`;
      } else {
        vidHtml = `<video class="card-video" src="${p.preview}" loop muted playsinline onerror="this.style.display='none'"></video>`;
      }
    }
    const catDisplay = Array.isArray(p.cat) ? p.cat.join(' & ') : p.cat;
    c.innerHTML=`<img src="${p.thumb}" alt="${p.title}" loading="lazy" decoding="async">${vidHtml}<div class="ov"></div><div class="cat-badge"><span class="tag">${catDisplay}</span></div><div class="ci"><p style="font-size:.5rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,243,240,.3);margin-bottom:4px">${p.client} · ${p.year}</p><h3 style="font-family:'Syne',sans-serif;font-size:1rem;font-weight:800;text-transform:uppercase;letter-spacing:-.02em;line-height:1.1">${p.title}</h3></div>`;
    c.onclick=()=>openProject(p.id);
    c.addEventListener('mouseenter',()=>document.body.classList.add('cursor-grow'));
    c.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-grow'));
    if(p.preview) bindCardVideo(c);
    c.querySelectorAll('video, iframe').forEach(el => videoObserver.observe(el));
    bindCardHover(c);
    grid.appendChild(c);
  });
  setTimeout(()=>{
    triggerReveal();
    isAppending=false;
    initParallax();
  }, 500);
}
function filterGal(cat,btn){
  renderGal(cat);
}
window.filterGal = filterGal;

function bindCardVideo(card) {
  const vid = card.querySelector('video');
  if(vid) {
    card.addEventListener('mouseenter', () => { vid.currentTime=0; vid.play().catch(()=>{}); });
    card.addEventListener('mouseleave', () => { vid.pause(); });
  }
  const iframe = card.querySelector('iframe');
  if(iframe) {
    card.addEventListener('mouseenter', () => {
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });
    card.addEventListener('mouseleave', () => {
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  }
}

function bindCardHover(card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', x + 'px');
    card.style.setProperty('--my', y + 'px');
  });
}

/* ─── PROJECT ─── */
let curProjId=0,curProjImgIdx=0;
let curCarouselIdx=0;
function openProject(id){curProjId=id;navigate('project',id)}
window.openProject = openProject;

function renderProject(id){
  document.querySelectorAll('#page-project .rv').forEach(el=>el.classList.remove('in'));
  const p=PROJECTS.find(x=>x.id===id);if(!p)return;
  curProjImgIdx=0;
  
  const bgImg = document.getElementById('proj-bg-img');
  if(bgImg) bgImg.src = p.thumb;

  document.getElementById('proj-title').textContent=p.title;
  
  const tagsEl = document.getElementById('proj-tags');
  if(tagsEl) {
    tagsEl.innerHTML = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  }
  document.getElementById('proj-desc').textContent=p.desc;
  
  let metaItems = [
    {k:'Services',v:p.svc}, {k:'Client',v:p.client},
    {k:'Location',v:p.loc}, {k:'Année',v:p.year}
  ];
  if(p.tools) metaItems.push({k:'Outils',v:p.tools});
  document.getElementById('proj-meta').innerHTML = metaItems.map(m => `<div><div class="mk">${m.k}</div><div class="mv">${m.v}</div></div>`).join('');
  
  // 1. On prépare le média principal (Vidéo ou Image)
  let mainMediaHtml = '';
  if(p.videoUrl) {
      mainMediaHtml = `<div class="proj-media rv" style="transition-delay:0s">
          <iframe src="${p.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;aspect-ratio:16/9;display:block;"></iframe>
      </div>`;
  } else {
      mainMediaHtml = `<div class="proj-media rv" style="transition-delay:0s; cursor:zoom-in;" onclick="openLbFromProj(0)">
          <img src="${p.thumb}" alt="${p.title}" style="width:100%; height:auto; display:block;" />
      </div>`;
  }

  // 2. On prépare la galerie (les autres images s'il y en a)
  let galHtml = '';
  if(p.gallery && p.gallery.length > 0) {
      galHtml = p.gallery.map((item, i) => {
          const delay = 0.1 * (i + 1);
          // Vérifie si l'item de la galerie est un objet vidéo ou une simple image (string)
          const isVidObj = typeof item === 'object' && item.type === 'video';
          const src = isVidObj ? item.src : item;
          const isVidStr = typeof src === 'string' && (src.endsWith('.mp4') || src.endsWith('.webm'));
          
          if (!p.videoUrl && src === p.thumb) return '';

          if(isVidObj || isVidStr) {
              return `<div class="proj-media rv" style="transition-delay:${delay}s">
                  <video src="${src}" loop muted playsinline autoplay style="width:100%; height:auto; display:block;"></video>
              </div>`;
          } else {
              return `<div class="proj-media rv" style="transition-delay:${delay}s; cursor:zoom-in;" onclick="openLbFromProj(${i})">
                  <img src="${src}" style="width:100%; height:auto; display:block;" loading="lazy" />
              </div>`;
          }
      }).join('');
  }

  // 3. ON INJECTE LE TOUT ENSEMBLE !
  document.getElementById('proj-gallery').innerHTML = `<div class="proj-gallery-stack">${mainMediaHtml}${galHtml}</div>`;

  // 4. On gère le bouton "Voir la sélection" pour ouvrir la lightbox globale
  document.querySelector('.btn-primary[onclick="openLbFromProj()"]').onclick = () => openLbFromProj(0);

  document.querySelectorAll('#proj-gallery video, #proj-gallery iframe').forEach(el => videoObserver.observe(el));

  const all=PROJECTS,idx=all.findIndex(x=>x.id===id);
  
  // Making Of Section
  const moContainer = document.getElementById('proj-making-of');
  let moHtml = '';
  if(p.makingOf) {
    moHtml += `
      <div class="making-of-section rv in">
        <h2 class="mo-title">Making Of — Avant / Après</h2>
        <div class="comparison-slider" id="comp-slider">
          <img src="${p.makingOf.after}" alt="Après" class="img-after" onclick="openLb(['${p.makingOf.after}'], 0)" style="cursor:zoom-in">
          <img src="${p.makingOf.before}" alt="Avant" class="img-before">
          <div class="slider-handle"></div>
          <div class="slider-label label-after">Après</div>
          <div class="slider-label label-before">Avant</div>
        </div>
      </div>
    `;
    setTimeout(initComparisonSlider, 100);
  }
  if(p.makingOfGallery) {
    moHtml += `
      <div class="mo-gallery-grid">
        ${p.makingOfGallery.map((src, i) => {
          const isVid = src.toLowerCase().endsWith('.mp4');
          return `<div class="mo-card rv" style="transition-delay:${i*.1}s">${isVid ? `<video src="${src}" loop muted playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>` : `<img src="${src}" loading="lazy">`}</div>`;
        }).join('')}
      </div>
    `;
  }
  moContainer.innerHTML = moHtml;
  document.querySelectorAll('#proj-making-of video').forEach(el => videoObserver.observe(el));

  const prev=all[(idx-1+all.length)%all.length],next=all[(idx+1)%all.length];
  document.getElementById('proj-prev-btn').onclick=()=>openProject(prev.id);
  document.getElementById('proj-next-btn').onclick=()=>openProject(next.id);
  setTimeout(triggerReveal, 50);
}
function moveCarousel(d){
  const slides=document.querySelectorAll('.carousel-slide');
  const count=slides.length;
  if(count===0)return;
  const prevVid = slides[curCarouselIdx].querySelector('video');
  if(prevVid) prevVid.pause();
  slides[curCarouselIdx].classList.remove('active');
  curCarouselIdx=(curCarouselIdx+d+count)%count;
  slides[curCarouselIdx].classList.add('active');
  const nextVid = slides[curCarouselIdx].querySelector('video');
  if(nextVid) { nextVid.currentTime=0; nextVid.play().catch(()=>{}); }
}
window.moveCarousel = moveCarousel;

function initCarouselSwipe() {
  const wrap = document.querySelector('.carousel-wrap');
  if(!wrap) return;
  let startX = 0;
  let currentX = 0;
  let isDown = false;
  let activeSlide = null;

  const onStart = (x) => {
    isDown = true;
    startX = x;
    currentX = x;
    wrap.style.cursor = 'grabbing';
    activeSlide = wrap.querySelector('.carousel-slide.active');
    if(activeSlide) activeSlide.style.transition = 'none';
  };
  const onMove = (x) => {
    if(!isDown || !activeSlide) return;
    currentX = x;
    const diff = currentX - startX;
    activeSlide.style.transform = `translateX(${diff}px) scale(1)`;
  };
  const onEnd = () => {
    if(!isDown) return;
    isDown = false;
    wrap.style.cursor = 'grab';
    if(activeSlide) {
      activeSlide.style.transition = '';
      activeSlide.style.transform = '';
      const diff = currentX - startX;
      if(Math.abs(diff) > 50) moveCarousel(diff > 0 ? -1 : 1);
      activeSlide = null;
    }
  };

  wrap.addEventListener('mousedown', e => { e.preventDefault(); onStart(e.pageX); });
  wrap.addEventListener('touchstart', e => onStart(e.changedTouches[0].pageX), {passive: true});
  
  window.addEventListener('mousemove', e => { if(isDown) onMove(e.pageX); });
  window.addEventListener('touchmove', e => { if(isDown) onMove(e.changedTouches[0].pageX); }, {passive: true});
  window.addEventListener('mouseup', onEnd);
  window.addEventListener('touchend', onEnd);
}
function initComparisonSlider() {
  const slider = document.getElementById('comp-slider');
  if(!slider) return;
  const beforeImg = slider.querySelector('.img-before');
  const handle = slider.querySelector('.slider-handle');
  
  const updateSlider = (x) => {
    const rect = slider.getBoundingClientRect();
    let pos = (x - rect.left) / rect.width * 100;
    pos = Math.max(0, Math.min(100, pos));
    beforeImg.style.clipPath = `inset(0 ${100-pos}% 0 0)`;
    handle.style.left = `${pos}%`;
  };
  slider.addEventListener('mousemove', (e) => updateSlider(e.clientX));
  slider.addEventListener('touchmove', (e) => updateSlider(e.touches[0].clientX));
}
function openLbFromProj(idx){const p=PROJECTS.find(x=>x.id===curProjId);if(p)openLb(p.gallery, idx !== undefined ? idx : curProjImgIdx)}
window.openLbFromProj = openLbFromProj;

/* ─── LIGHTBOX ─── */
let lbImgs=[],lbIdx=0;
function openLb(imgs,idx){lbImgs=imgs;lbIdx=idx||0;renderLb();document.getElementById('lightbox').classList.add('open');document.body.style.overflow='hidden'}
window.openLb = openLb;
function closeLb(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow='';document.getElementById('lb-vid').src='';const v=document.getElementById('lb-vid-mp4');if(v){v.pause();v.src=''}}
window.closeLb = closeLb;
function lbNav(d){lbIdx=(lbIdx+d+lbImgs.length)%lbImgs.length;renderLb()}
window.lbNav = lbNav;
function renderLb(){
  const img=document.getElementById('lb-img');
  const vid=document.getElementById('lb-vid');
  const vidMp4=document.getElementById('lb-vid-mp4');
  const cap=document.getElementById('lb-caption');
  const item=lbImgs[lbIdx];
  
  img.style.display='none';
  vid.style.display='none';
  if(vidMp4) vidMp4.style.display='none';
  vid.src='';
  if(vidMp4) { vidMp4.pause(); vidMp4.src=''; }

  if(typeof item === 'object' && item.type === 'video'){
    const isMp4 = item.src.toLowerCase().endsWith('.mp4') || item.src.toLowerCase().endsWith('.webm');
    if(isMp4 && vidMp4){
      vidMp4.style.display='block';
      vidMp4.src=item.src;
      vidMp4.play().catch(()=>{});
    } else {
      vid.style.display='block';
      vid.src=item.src;
    }
    cap.textContent=item.caption||'';
    cap.style.display=item.caption?'block':'none';
  } else {
    img.style.display='block';
    img.style.animation='none';img.offsetHeight;img.style.animation='';
    img.src=item;
    cap.style.display='none';
  }

  const de=document.getElementById('lb-dots');
  if(lbImgs.length>1){
    de.innerHTML=lbImgs.map((_,i)=>`<div class="dot${i===lbIdx?' on':''}" style="width:${i===lbIdx?40:22}px;cursor:none" onclick="lbIdx=${i};renderLb()"></div>`).join('');
    de.style.display='flex';
    document.querySelector('.lb-prev').style.display='flex';
    document.querySelector('.lb-next').style.display='flex';
  } else {
    de.style.display='none';
    document.querySelector('.lb-prev').style.display='none';
    document.querySelector('.lb-next').style.display='none';
  }
}
window.renderLb = renderLb;

document.getElementById('lightbox').addEventListener('click',function(e){if(e.target===this)closeLb()});
document.addEventListener('keydown',e=>{
  if(!document.getElementById('lightbox').classList.contains('open'))return;
  if(e.key==='Escape')closeLb();
  if(e.key==='ArrowRight')lbNav(1);
  if(e.key==='ArrowLeft')lbNav(-1);
  
  if(document.getElementById('page-project').classList.contains('active')){
    if(e.key==='ArrowRight') document.getElementById('proj-next-btn').click();
    if(e.key==='ArrowLeft') document.getElementById('proj-prev-btn').click();
  }
});

/* Lightbox Swipe */
let touchStartX=0,touchEndX=0;
const lbEl=document.getElementById('lightbox');
lbEl.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX},{passive:true});
lbEl.addEventListener('touchend',e=>{
  touchEndX=e.changedTouches[0].screenX;
  if(touchStartX-touchEndX>50)lbNav(1);
  if(touchEndX-touchStartX>50)lbNav(-1);
},{passive:true});

/* ─── FEATURED VIEW ─── */
function setFeatView(mode,btn){
  localStorage.setItem('featViewMode', mode);
  const grid=document.querySelector('.feat-grid');
  const btns=document.querySelectorAll('.view-btn');
  btns.forEach(b=>b.classList.remove('active'));
  
  if(btn) btn.classList.add('active');
  else {
    const idx = mode==='list'?1:0;
    if(btns[idx]) btns[idx].classList.add('active');
  }

  const apply = () => {
    if(mode==='list') grid.classList.add('view-list');
    else grid.classList.remove('view-list');
    setTimeout(triggerReveal,50);
  };

  if(btn) {
    grid.classList.add('fade-out');
    setTimeout(()=>{ apply(); grid.classList.remove('fade-out'); }, 300);
  } else apply();
}
window.setFeatView = setFeatView;

/* ─── ABOUT ─── */
function initAbout(){
  const sc=document.getElementById('skills-container');
  sc.innerHTML=SKILLS.map(s=>`<div class="skill-row"><div class="skill-info"><span>${s.name}</span><span>${s.pct}%</span></div><div class="skill-bar"><div class="skill-fill" style="width:0%" data-pct="${s.pct}"></div></div></div>`).join('');
  const tg=document.getElementById('tools-grid');
  tg.innerHTML=TOOLS.map(t=>{
    const icon=t.figma?`<svg width="18" height="18" viewBox="0 0 38 57"><path d="M19 28.5A9.5 9.5 0 1128.5 19H19v9.5z" fill="#0ACF83"/><path d="M9.5 47.5A9.5 9.5 0 019.5 28.5H19v9.5a9.5 9.5 0 01-9.5 9.5z" fill="#0ACF83"/><path d="M9.5 9.5H19V19H9.5a9.5 9.5 0 010-19z" fill="#F24E1E"/><path d="M19 0h9.5a9.5 9.5 0 010 19H19V0z" fill="#FF7262"/><path d="M19 19h9.5a9.5 9.5 0 110 19H19V19z" fill="#1ABCFE"/></svg>`:`<div class="tl" style="background:rgba(255,255,255,.06);color:${t.color};border:1px solid rgba(255,255,255,.08)">${t.l}</div>`;
    return `<div class="tool-chip">${icon}<span>${t.name}</span></div>`;
  }).join('');
  setTimeout(()=>document.querySelectorAll('.skill-fill').forEach(el=>el.style.width=el.dataset.pct+'%'),300);
}

/* ─── CONTACT ─── */
function submitForm(){
  if(!document.getElementById('cf-name').value.trim()||!document.getElementById('cf-email').value.trim()){alert('Veuillez renseigner votre nom et email.');return}
  document.getElementById('cf-inner').style.display='none';
  document.getElementById('cf-success').style.display='block';
}
window.submitForm = submitForm;

/* ─── PARALLAX ─── */
let parallaxItems = [];
function initParallax(){
  parallaxItems = document.querySelectorAll('.feat-card, .gal-card');
}
function updateParallax() {
  if(!parallaxItems.length) initParallax();
  const winH = window.innerHeight;
  parallaxItems.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < winH && rect.bottom > 0) {
      const dist = (rect.top + rect.height/2) - winH/2;
      const img = card.querySelector('img');
      if(img) img.style.setProperty('--parallax-y', (dist * 0.1) + 'px');
    }
  });
  requestAnimationFrame(updateParallax);
}
requestAnimationFrame(updateParallax);

/* ─── REVEAL ─── */
let revealObserver = null;
function triggerReveal(){
  if(revealObserver) revealObserver.disconnect();
  
  revealObserver = new IntersectionObserver((entries) => {
    let visibleEntries = entries.filter(entry => entry.isIntersecting);
    visibleEntries.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);
    
    visibleEntries.forEach((entry, index) => {
      setTimeout(() => {
        entry.target.classList.add('in');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    });
  }, {threshold: 0.08, rootMargin: '0px 0px -30px 0px'});

  document.querySelectorAll('.rv:not(.in)').forEach(el => revealObserver.observe(el));
}

/* ─── STATS COUNTER ─── */
function initStatsCounter() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.counter').forEach(counter => {
          const target = +counter.dataset.target;
          const suffix = counter.dataset.suffix || '';
          const duration = 1500;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(ease * target) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  const stats = document.querySelector('.stats-bar');
  if(stats) observer.observe(stats);
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded',()=>{
  const heroTitle=document.querySelector('.hero-title');

  /* ─── HERO INTERACTION ─── */
  document.addEventListener('mousemove', (e) => {
    if (!heroTitle || !document.getElementById('page-home').classList.contains('active')) return;
    
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);
    
    heroTitle.style.setProperty('--rotate-x', `${y * -10}deg`);
    heroTitle.style.setProperty('--rotate-y', `${x * 10}deg`);
  });

  /* ─── TOOLS INTERACTION ─── */
  document.querySelectorAll('.t-item').forEach(item => {
    const ico = item.querySelector('.t-ico');
    if(!ico) return;
    
    item.addEventListener('mousemove', (e) => {
      const rect = ico.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      const rotX = Math.max(-25, Math.min(25, y * -0.8));
      const rotY = Math.max(-25, Math.min(25, x * 0.8));
      
      ico.style.transition = 'transform 0.1s ease-out';
      ico.style.transform = `perspective(500px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.15)`;
    });

    item.addEventListener('mouseleave', () => {
      ico.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      ico.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
    });
  });

  // Init Smooth Scroll
  if(typeof Lenis !== 'undefined'){
    window.lenis = new Lenis();

    const stBtn=document.getElementById('scroll-top');
    const navbar=document.getElementById('navbar');

    function handleLenisScroll(e) {
      const y = e.scroll;
      
      if(stBtn) stBtn.classList.toggle('show', y > 500);
      if(navbar) navbar.classList.toggle('transparent', y < 10);
      
      if(heroTitle && document.getElementById('page-home').classList.contains('active')){
        heroTitle.style.setProperty('--scroll-y', `${y * 0.35}px`);
        heroTitle.style.opacity = Math.max(0, 1 - y / 700);
      }

      const projBg = document.getElementById('proj-bg-img');
      if(projBg && document.getElementById('page-project').classList.contains('active')){
        projBg.style.transform = `translateY(${y * 0.5}px)`;
      }

      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (y / h) * 100 : 0;
      const bar = document.getElementById('scroll-progress');
      if(bar) bar.style.width = p + '%';

      if(document.getElementById('page-portfolio').classList.contains('active')){
        if((window.innerHeight + y) >= document.documentElement.scrollHeight - 800){
          appendGalItems();
        }
      }
    }

    window.lenis.on('scroll', handleLenisScroll);
    
    function raf(time){window.lenis.raf(time);requestAnimationFrame(raf)}
    requestAnimationFrame(raf);

    // Initial call to set states
    handleLenisScroll({scroll: 0, velocity: 0});
  }

  const savedView = localStorage.getItem('featViewMode');
  if(savedView) setFeatView(savedView);
  navigate('home');
  // Re-bind cursor grow after dynamic content
  document.addEventListener('click',()=>{
    document.querySelectorAll('a,button,[onclick]').forEach(el=>{
      if(!el._cursorBound){
        el._cursorBound=true;
        el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-grow'));
        el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-grow'));
      }
    });
  });

  // Bind hover for static featured cards
  document.querySelectorAll('.feat-card').forEach(c => {
    bindCardHover(c);
    bindCardVideo(c);
  });
  document.querySelectorAll('video, iframe').forEach(el => videoObserver.observe(el));
  initStatsCounter();
  initParallax();
});
