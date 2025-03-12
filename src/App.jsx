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
        <h2 id="text" ref={textRef}>All Hallow's Eve </h2>
        <img src="/tree-left.png" ref={treeLeftRef} id="tree-left" alt="Tree Left" />
        <img src="/tree-right.png" ref={treeRightRef} id="tree-right" alt="Tree Right" />
        <img src="/gate-left.png" ref={gateLeftRef} id="gate-left" alt="Gate Left" />
        <img src="/gate-right.png" ref={gateRightRef} id="gate-right" alt="Gate Right" />
        <img src="/grass.png" id="grass" alt="Grass" />
      </div>

      <div className="sec">
        <h2>Halloween</h2>
        <p>
          Halloween, celebrated on October 31st, has its origins in the ancient Celtic festival of Samhain. The Celts believed that on this night, the boundary between the living and the dead was blurred, allowing spirits to roam the Earth. To ward off these spirits, they built bonfires, wore disguises, and performed rituals. Over time, the festival merged with Christian traditions, leading to the establishment of All Hallows’ Eve, which later became Halloween. Irish and Scottish immigrants brought Halloween customs to North America, where they evolved into modern celebrations.
          <br /><br />

          Today, Halloween is widely recognized for its fun and spooky traditions, including trick-or-treating, costume parties, haunted houses, and pumpkin carving. The practice of trick-or-treating stems from medieval souling, where people went door to door seeking food in exchange for prayers. The carving of jack-o’-lanterns originates from an Irish folktale about Stingy Jack. Symbols like black cats, witches, ghosts, and skeletons add to the eerie atmosphere, while horror films and themed events enhance the holiday's popularity.
          <br /><br />
          Halloween has grown into a multi-billion-dollar industry, with retailers selling costumes, decorations, and candy months in advance. Despite some controversies, such as concerns over safety and cultural appropriation in costumes, Halloween continues to be a beloved holiday that fosters creativity and community engagement. Whether through spooky decorations, festive gatherings, or scary movies, Halloween remains a night of excitement and mystery for people of all ages.
          <br /><br />
          With the spread of Christianity, the Church sought to replace pagan festivals with Christian observances. In the 9th century, Pope Gregory III designated November 1st as All Saints' Day (also known as All Hallows' Day) to honor all saints and martyrs. The evening before, October 31st, became known as All Hallows’ Eve, which later evolved into Halloween. Despite efforts to Christianize the holiday, many of the original pagan customs persisted, blending with Christian traditions over time.
          Despite its popularity, Halloween has faced criticism and controversy over the years. Some religious groups oppose the holiday due to its pagan origins and perceived association with the occult. Additionally, concerns about safety, such as tampered candy, cultural appropriation in costumes, and excessive commercialization, have sparked debates about the ethical aspects of Halloween celebrations.
        </p>
      </div>

      <div className="parallax-section parallax-bg">
        <Parallax speed={-10}>
          <h1 className="title">Halloween wraps fear in innocence, As though it were a slightly sour sweet. <br /> Let terror, then, be turned into a treat</h1>
        </Parallax>
      </div>

      <div className="third">
        <h2>Trick-or-Treating</h2>
        <p>
        One of the most well-known Halloween traditions, trick-or-treating, has its origins in the medieval practice of "souling." During All Souls' Day, the poor would go door to door, offering prayers for the dead in exchange for food, known as "soul cakes." Over time, this practice evolved into "guising," where children dressed in costumes and performed tricks, songs, or jokes in exchange for treats. The custom eventually became trick-or-treating in North America, where children go from house to house collecting candy.
        </p>
      </div>

      <div className="parallax-section parallax-content">
        <Parallax speed={5}>
          <h2 className="subtitle">There is nothing funny about Halloween. <br />This sarcastic festival reflects, rather,<br /> an infernal demand for revenge by children on the adult world.</h2>
        </Parallax>
      </div>

      <div className="fourth">
        <h2>Jack-o’-Lanterns</h2>
        <p>
        The tradition of carving pumpkins into jack-o’-lanterns originates from an Irish folktale about "Stingy Jack," a man who tricked the Devil and was condemned to roam the Earth with only a carved-out turnip lantern. When Irish immigrants arrived in America, they found pumpkins to be more abundant and easier to carve than turnips, leading to the modern practice of creating jack-o’-lanterns.

        </p>
      </div>

      <div className="parallax-section parallax-end">
        <Parallax speed={10}>
          <h2 className="subtitle">Jack-o'-lantern: a symbol of spooky and sweet.</h2>
        </Parallax>
      </div>

      <section class="footer" id="footer">
        <div class="contact_heading">
            <h1>Follow Us On</h1>
        </div>
        <div class="icon_set">
            <div class="icon">
                <a href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
            </div>
            <div class="icon">
                <a href=""><i class="fa-brands fa-facebook fa-2x"></i></a>
            </div>
            <div class="icon">
                <a href=""><i class="fa-brands fa-x-twitter fa-2x"></i></a>
            </div>
            <div class="icon">
                <a href=""><i class="fa-brands fa-whatsapp fa-2x"></i></a>
            </div>
        </div>
        <div class="contact_heading">
            <p> &#169; 2025 My Website. All rights reserved.</p>
        </div>
    </section>
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
