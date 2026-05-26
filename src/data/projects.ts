import pubirdImage from "../assets/projects/pubird.jpg";
import alexandreImage from "../assets/projects/alexandre-meneghini.jpg";

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
  details?: string;
  image: string;
  challenge?: string;
  solution?: string;
  result?: string;
};

export const projects: Project[] = [
  {
    title: "Pubird",
    category: "Agência de Marketing, Tecnologia e Growth",
    description:
      "Site institucional e presença digital para agência que une estratégia, branding e tecnologia.",
    technologies: ["React", "Vite", "TailwindCSS", "Vercel"],
    link: "https://pubird.com.br",
    image: pubirdImage,
    challenge:
      "Criar uma presença digital premium para uma agência nova, transmitindo autoridade, clareza e posicionamento desde o primeiro contato.",
    solution:
      "Desenvolvi uma interface moderna, responsiva e estratégica, com foco em apresentar os serviços da agência de forma objetiva e visualmente forte.",
    result:
      "O site passou a funcionar como vitrine principal da Pubird, reforçando o posicionamento da marca e facilitando a apresentação comercial da agência.",
  },
  {
    title: "Alexandre Meneghini",
    category: "Landing Page / Autoridade Digital",
    description:
      "Página de apresentação e conversão para livro e marca pessoal.",
    technologies: ["React", "Supabase", "Resend", "Vercel"],
    link: "https://www.alexandremeneghini.com.br/",
    image: alexandreImage,
    challenge:
      "Criar uma landing page para apresentar o livro e fortalecer a autoridade digital do autor, com foco em conversão e captação de interesse.",
    solution:
      "Estruturei uma página com narrativa clara, apresentação do livro, chamada para ação e integração com ferramentas de captura e comunicação.",
    result:
      "A página se tornou um ativo digital para campanhas, remarketing e construção de audiência em torno da marca pessoal do autor.",
  },
];

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5587981576154&text=Ol%C3%A1%2C%20Pedro%21%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.";

export const SOCIAL = {
  instagram: "https://www.instagram.com/pedroeliasgv/",
  tiktok: "https://www.tiktok.com/@pedroeliasgv",
  linkedin: "https://www.linkedin.com/in/pedro-elias-225165276/",
  pubird: "https://pubird.com.br",
};