import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import styled from "styled-components";

const BLink = styled.a`
  cursor: pointer;
  transition: color 0.8s;

  &:hover {
    color: white;
  }
`;

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);

  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container" + (active ? " active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <BLink
                className={`link${router.pathname === "/" ? " active" : ""}`}
              >
                About
              </BLink>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <BLink
                className={`link${
                  router.pathname.startsWith("/posts") ? " active" : ""
                }`}
              >
                Blog
              </BLink>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: var(--bg);
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              font-weight: 500;
              color: white;
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }

            .link {
              color: #ccc;
            }

            .active {
              color: white;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
