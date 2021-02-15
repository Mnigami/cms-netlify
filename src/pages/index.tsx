import { useEffect } from "react";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Zdog from "zdog";

export default function Index() {
  useEffect(() => {
    let isSpinning = true;

    let illo = new Zdog.Illustration({
      element: ".zdog-canvas",
      zoom: 4,
      dragRotate: true,
      onDragStart: function () {
        isSpinning = false;
      },
      onDragEnd: () => (isSpinning = true),
    });

    new Zdog.Shape({
      addTo: illo,
      stroke: 10,
      color: "#0f7ad1",
    });

    new Zdog.Shape({
      addTo: illo,
      stroke: 15,
      color: "#b2c9ed60",
    });

    new Zdog.Ellipse({
      addTo: illo,
      diameter: 10 * 3,
      stroke: 0.4,
      color: "lightgray",
    });
    function animate() {
      illo.rotate.y += isSpinning ? 0.009 : 0;
      illo.rotate.x += isSpinning ? 0.009 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, we're Devblock<span className="fancy">.</span>
          </h1>
          <span className="handle">@Devblock</span>
          <h2>A blog for learn blockchain.</h2>
          <SocialList />
        </div>
        <canvas width={240} height={240} className="zdog-canvas" />
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #0f7ad1;
        }

        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
