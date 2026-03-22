export interface Project {
  imgSrc: string;
  vectorSrc: string;
  title: string;
  tags: string[];
}

export interface ProjectData {
  folio1: Project[];
  folio2: Project[];
}

const projectData: ProjectData = {
  folio1: [
    {
      imgSrc: "/assets/section1/Img1.png",
      vectorSrc: "/assets/section1/vector1.png",
      title: "UNITRACK",
      tags: ["full-stack", "react", "node.js", "postgresql"],
    },
    {
      imgSrc: "/assets/section1/Img2.png",
      vectorSrc: "/assets/section1/vector2.png",
      title: "HACKPORTAL",
      tags: ["hackathon", "next.js", "typescript", "open source"],
    },
  ],
  folio2: [
    {
      imgSrc: "/assets/section1/Img3.png",
      vectorSrc: "/assets/section1/vector3.png",
      title: "DEVSOC APP",
      tags: ["mobile", "react native", "expo", "firebase"],
    },
    {
      imgSrc: "/assets/section1/Img4.png",
      vectorSrc: "/assets/section1/vector4.png",
      title: "OPENLMS",
      tags: ["education", "django", "python", "open source"],
    },
  ],
};

export default projectData;
