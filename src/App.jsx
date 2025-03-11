import React, { useEffect, useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./App.css";

function App() {
  const textRef = useRef(null);
  const treeLeftRef = useRef(null);
  const treeRightRef = useRef(null);
  const gateLeftRef = useRef(null);
  const gateRightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      if (textRef.current) textRef.current.style.marginTop = value * 3.5 + "px";
      if (treeLeftRef.current) treeLeftRef.current.style.left = value * -1.5 + "px";
      if (treeRightRef.current) treeRightRef.current.style.left = value * 1.5 + "px";
      if (gateLeftRef.current) gateLeftRef.current.style.left = value * 0.5 + "px";
      if (gateRightRef.current) gateRightRef.current.style.left = value * -0.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <div className="header">
        <h2 className="logo"></h2>
        <div className="navigation">
          <a href="#" className="active">Home<span></span></a>
          <a href="#">About<span></span></a>
          <a href="#">Service<span></span></a>
          <a href="#">Contact<span></span></a>
        </div>
      </div>

      <div className="parallax">
        <h2 id="text" ref={textRef}>Parallax Website</h2>
        <img src="/tree-left.png" ref={treeLeftRef} id="tree-left" alt="Tree Left" />
        <img src="/tree-right.png" ref={treeRightRef} id="tree-right" alt="Tree Right" />
        <img src="/gate-left.png" ref={gateLeftRef} id="gate-left" alt="Gate Left" />
        <img src="/gate-right.png" ref={gateRightRef} id="gate-right" alt="Gate Right" />
        <img src="/grass.png" id="grass" alt="Grass" />
      </div>

      <div className="sec">
        <h2>Parallax Scrolling Website</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi dicta eum distinctio quis quidem vero iure debitis suscipit laborum omnis ipsa unde quod minus nisi obcaecati, nam maxime rerum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem pariatur officiis eum sint ut earum accusantium harum, quo tempore ea omnis impedit vero quae porro est qui libero ab.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus quae libero atque ea minima, possimus officiis id rem dignissimos nulla ad nobis natus nisi. Modi magnam magni unde odio?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam nostrum quia dolorum, ipsam, incidunt debitis aliquid obcaecati, porro eligendi esse quibusdam. Quisquam, vitae molestias rerum deserunt porro voluptates tempore!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur, sit excepturi reiciendis error nisi delectus eaque aut atque impedit quas officia quos ratione velit modi ipsa dicta, illo labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eveniet dolores adipisci qui, atque temporibus soluta doloribus ea a ut impedit porro, modi vitae itaque, corrupti commodi amet est iusto.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nisi eos pariatur amet aperiam consequatur incidunt voluptas saepe officiis, et modi sapiente optio sed ipsa cum nulla tempore dicta sint.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quia voluptatem, inventore voluptate vero, earum deleniti minima enim officiis, facilis ullam hic ipsam. Minus dicta quidem mollitia consectetur tenetur placeat?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae magni assumenda voluptatem nesciunt numquam suscipit laudantium, tempore qui saepe velit maxime ullam distinctio earum labore voluptatum debitis iusto fugit sint.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate numquam corrupti assumenda, vel dolore perferendis aut consequuntur sit nihil enim ipsum hic corporis repellendus reprehenderit, odit eos non officia?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nobis facere quod animi nam harum laudantium. Eveniet id magni eaque esse, dolorum sed error omnis repellendus ipsum voluptatum fugit quo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis minima a? Voluptatem a quam temporibus odio qui repellat nihil, praesentium rerum neque obcaecati debitis officia ea delectus nesciunt? Iure?
          
        </p>
      </div>

      <div className="parallax-section parallax-bg">
        <Parallax speed={-10}>
          <h1 className="title">Parallax World</h1>
        </Parallax>
      </div>

      <div className="third">
        <h2></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor neque dolores ipsam magni expedita consectetur consequatur architecto recusandae, illum dolorum eius nemo totam qui possimus sit ratione veniam voluptas? Nulla!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime ad, quo exercitationem veritatis fugit incidunt illum animi, quasi ratione, quam unde nesciunt cum sunt cupiditate! Quisquam dicta aliquam accusamus.</p>
      </div>

      <div className="parallax-section parallax-content">
        <Parallax speed={5}>
          <h2 className="subtitle">Scroll Down for More</h2>
        </Parallax>
      </div>

      <div className="third">
        <h2></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem delectus magni quos mollitia obcaecati cum dolore laborum distinctio, voluptas unde. Similique, laboriosam sit totam commodi distinctio sunt sint veniam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error delectus perferendis nobis nemo deleniti atque, dignissimos possimus ex et doloribus, deserunt reprehenderit quae quidem quaerat eligendi. Hic repellat enim quisquam.
        </p>
      </div>

      <div className="parallax-section parallax-end">
        <Parallax speed={10}>
          <h2 className="subtitle">Hope You Liked It!</h2>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;

// import React from "react";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import "./App.css";

// function App() {
//   let text = document.getElementById('text');
//   let treeLeft = document.getElementById('tree-left');
//   let treeRight = document.getElementById('tree-right');
//   let gateLeft = document.getElementById('gate-left');
//   let gateRight = document.getElementById('gate-right');

//   window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 3.5 + 'px'
//     treeLeft.style.left = value * -1.5 + 'px'
//     treeRight.style.left = value * 1.5 + 'px'
//     gateLeft.style.left = value * 0.5 + 'px'
//     gateRight.style.left = value * -0.5 + 'px'
//   })

//   return (
//     <>
//     <ParallaxProvider>
//       <div className="header">
//         <h2 className="logo">Logo</h2>
//         <div className="navigation">
//           <a href="#" className="active">Home<span></span></a>
//           <a href="#">About<span></span></a>
//           <a href="#">Service<span></span></a>
//           <a href="#">Contact<span></span></a>
//         </div>
//       </div>

//       <div className="parallax">
//         <h2 id="text">Parallax Website</h2>
//         <img src="public/tree-left.png" id="tree-left" />
//         <img src="public/tree-right.png" id="tree-right" />
//         <img src="public/gate-left.png" id="gate-left" />
//         <img src="public/gate-right.png" id="gate-right" />
//         <img src="public/grass.png" id="grass" />
//       </div>

//       <div className="sec">
//         <h2>Parallax Scrolling Website</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus nihil quidem non, inventore sequi, itaque nam suscipit quasi molestiae beatae, corrupti aliquam quos dolorum ullam doloribus sed fugit at?
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae aperiam eos ratione maxime magnam? Fuga ullam, sapiente explicabo, delectus voluptatem cupiditate harum consequuntur et dolorum, labore iure porro beatae!
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptas assumenda harum repudiandae recusandae ex quia beatae eveniet veniam saepe, repellat animi in dicta, ipsum quas cupiditate aliquid iusto hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti voluptatum beatae amet. Officia, excepturi hic, modi, quos maiores enim eum velit quod eligendi voluptate pariatur quis deleniti at. Nihil.
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rem numquam reiciendis velit quidem commodi provident perferendis amet corporis, soluta ullam magnam sapiente distinctio nobis, accusantium quam. Voluptatum, repellendus quia!
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum accusamus autem magni ab modi deserunt esse dolor odit? Nobis, atque quam. Rem ad est, deleniti expedita atque corporis ipsum.
//           <br />
//           <br />
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat officiis optio dolor quo consequatur omnis, necessitatibus iure? Odit laborum velit voluptate unde dolorem architecto dolorum quas distinctio facilis soluta?
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illum culpa quo quae voluptatibus autem consequuntur animi obcaecati reiciendis perspiciatis enim cum, quisquam delectus ex, harum labore dignissimos corporis id?
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt, voluptatibus tempora maiores soluta eos molestias placeat delectus natus quasi nostrum repudiandae reprehenderit fuga, commodi temporibus. Itaque animi delectus excepturi.
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident adipisci iure eveniet eum! Ipsa alias, voluptatem labore accusamus ipsam corporis error asperiores ut natus soluta eius nisi accusantium inventore.
//           <br />
//           <br />
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat officiis optio dolor quo consequatur omnis, necessitatibus iure? Odit laborum velit voluptate unde dolorem architecto dolorum quas distinctio facilis soluta?
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea illum culpa quo quae voluptatibus autem consequuntur animi obcaecati reiciendis perspiciatis enim cum, quisquam delectus ex, harum labore dignissimos corporis id?
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint incidunt, voluptatibus tempora maiores soluta eos molestias placeat delectus natus quasi nostrum repudiandae reprehenderit fuga, commodi temporibus. Itaque animi delectus excepturi.
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident adipisci iure eveniet eum! Ipsa alias, voluptatem labore accusamus ipsam corporis error asperiores ut natus soluta eius nisi accusantium inventore.
//           <br />
//           <br />

//         </p>
//       </div>
//       <div className="parallax-section parallax-bg">
//         <Parallax speed={-10}>
//           <h1 className="title">Parallax World</h1>
//         </Parallax>
//       </div>
//       <div className="third">
//         <h2>Parallax Scrolling Website</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus nihil quidem non, inventore sequi, itaque nam suscipit quasi molestiae beatae, corrupti aliquam quos dolorum ullam doloribus sed fugit at?
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae aperiam eos ratione maxime magnam? Fuga ullam, sapiente explicabo, delectus voluptatem cupiditate harum consequuntur et dolorum, labore iure porro beatae!
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptas assumenda harum repudiandae recusandae ex quia beatae eveniet veniam saepe, repellat animi in dicta, ipsum quas cupiditate aliquid iusto hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti voluptatum beatae amet. Officia, excepturi hic, modi, quos maiores enim eum velit quod eligendi voluptate pariatur quis deleniti at. Nihil.
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rem numquam reiciendis velit quidem commodi provident perferendis amet corporis, soluta ullam magnam sapiente distinctio nobis, accusantium quam. Voluptatum, repellendus quia!
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum accusamus autem magni ab modi deserunt esse dolor odit? Nobis, atque quam. Rem ad est, deleniti expedita atque corporis ipsum.
//           <br />
//         </p>
//       </div>

//       <div className="parallax-section parallax-content">
//         <Parallax speed={5}>
//           <h2 className="subtitle">Scroll Down for More</h2>
//         </Parallax>
//       </div>


//       <div className="third">
//         <h2>Parallax Scrolling Website</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus nihil quidem non, inventore sequi, itaque nam suscipit quasi molestiae beatae, corrupti aliquam quos dolorum ullam doloribus sed fugit at?
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae aperiam eos ratione maxime magnam? Fuga ullam, sapiente explicabo, delectus voluptatem cupiditate harum consequuntur et dolorum, labore iure porro beatae!
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptas assumenda harum repudiandae recusandae ex quia beatae eveniet veniam saepe, repellat animi in dicta, ipsum quas cupiditate aliquid iusto hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti voluptatum beatae amet. Officia, excepturi hic, modi, quos maiores enim eum velit quod eligendi voluptate pariatur quis deleniti at. Nihil.
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus rem numquam reiciendis velit quidem commodi provident perferendis amet corporis, soluta ullam magnam sapiente distinctio nobis, accusantium quam. Voluptatum, repellendus quia!
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut earum accusamus autem magni ab modi deserunt esse dolor odit? Nobis, atque quam. Rem ad est, deleniti expedita atque corporis ipsum.
//           <br />
//         </p>
//       </div>

//       <div className="parallax-section parallax-end">
//         <Parallax speed={10}>
//           <h2 className="subtitle">Hope You Liked It!</h2>
//         </Parallax>
//       </div>
//     </ParallaxProvider >

//     </>
//   );
// }

// export default App;
