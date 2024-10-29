import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";

function App() {
  const ref = useRef();

  return (
    <div>
      <RenderPhase5 />
    </div>
  );

  function RenderPhase1() {
    return (
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer>
          <h3>Parallax demo - step 1</h3>
        </ParallaxLayer>

        <ParallaxLayer>
          <h3>Web development is fun!</h3>
        </ParallaxLayer>
      </Parallax>
    );
  }

  function RenderPhase2() {
    return (
      <Parallax pages={2} ref={ref}>
        <ParallaxLayer speed={1}>
          <h3>Parallax demo - step 2</h3>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h3>Web development is fun!</h3>
        </ParallaxLayer>
      </Parallax>
    );
  }

  function RenderPhase3() {
    return (
      <Parallax pages={3} ref={ref}>
        <ParallaxLayer
          offset={0} // This is the starting point of the layer
          speed={1} // This is the speed of the layer
          factor={2} // This is the height of the layer
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer speed={1}>
          <h3>Parallax demo - step 3</h3>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h3>Web development is fun!</h3>
        </ParallaxLayer>
      </Parallax>
    );
  }

  function RenderPhase4() {
    return (
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0} // This is the starting point of the layer
          speed={1} // This is the speed of the layer
          factor={2} // This is the height of the layer
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={3}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer speed={1}>
          <h3>Parallax demo - step 4</h3>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h3>Web development is fun!</h3>
        </ParallaxLayer>
      </Parallax>
    );
  }

  function RenderPhase5() {
    return (
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2.2 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h3>Parallax demo - step 5</h3>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h3>jump to start</h3>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default App;
