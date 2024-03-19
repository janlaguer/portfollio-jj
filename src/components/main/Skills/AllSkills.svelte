<script>
  import { Card, CardContainer } from "@components/ui/HoverCards";
  import SkillBlock from "./SkillBlock.svelte";
  import css from "@assets/icons/css.svg";
  import html from "@assets/icons/html-5.svg";
  import python from "@assets/icons/python.svg";
  import javascript from "@assets/icons/javascript.svg";
  import typescript from "@assets/icons/typescript.svg";
  import django from "@assets/icons/django.svg";
  import git from "@assets/icons/git.svg";
  import mysql from "@assets/icons/mysql.svg";
  import opencv from "@assets/icons/opencv.svg";
  import react from "@assets/icons/react.svg";
  import svelte from "@assets/icons/svelte.svg";
  import tensorflow from "@assets/icons/tensorflow.svg";
  import astro from "@assets/icons/astro.svg";
  import nextjs from "@assets/icons/nextjs.svg";
  import postgre from "@assets/icons/postgresql.svg";
  import tailwindcss from "@assets/icons/tailwindcss.svg";

  let clientX, clientY, isHovering;

  const skills = [
    [python, "Python"],
    [javascript, "Javascript"],
    [typescript, "Typescript"],
    [html, "HTML"],
    [css, "CSS"],
    [tailwindcss, "TailwindCSS"],
    [django, "Django"],
    [react, "React"],
    [nextjs, "Next.js"],
    [svelte, "Svelte"],
    [astro, "Astro"],
    [git, "Git"],
    [mysql, "MySQL"],
    [postgre, "PostgreSQL"],
    [opencv, "OpenCV"],
    [tensorflow, "Tensorflow"],
  ];
  const skillData = skills.map((skill) => ({
    logo: skill[0],
    title: skill[1],
  }));
</script>

<CardContainer bind:clientX bind:clientY bind:isHovering>
  {#each skillData as { logo, title }}
    <Card {clientX} {clientY} {isHovering}>
      <SkillBlock {logo} {title} />
    </Card>
  {/each}
</CardContainer>
