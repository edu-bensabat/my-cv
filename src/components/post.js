const presentation = [
  {
    title: "Apresentação",
    text: "Ola meu nome é João Vitor. Criei esse site com o objetivo de me apresentar melhor profissionalmente e usá-lo como currículo também. Visando ter um lugar centralizado e melhor organizado para divulgar meus trabalhos, mostrar meu perfil profissional e meus contatos.",
  },
  {
    title: "Home",
    text: "Para navegar no site, há a barra de navegação na parte superior, onde em Home, está localizada essa parte para apresentação do site.",
  },
  {
    title: "Currículo",
    text: "Na parte de Currículo , pode ser encontrado meu perfil profissional com foto, dados sobre mim como nascimento para saber idade e o que estou cursando no momento. Também há as principais tecnologias que tenho conhecimento.",
  },
  {
    title: "Contato",
    text: "Em contato é onde se pode ver meus principais meios de contato, tais como meu Linkedin ou email. Também pode ver esses contatos no inferior da página, na parte do footer",
  },
  {
    title: "Portfolio",
    text: 'Aqui é onde serão encontrados meus projetos já feitos, desde projetos independentes até os que são relacionados à cursos que eu tenha feito. Projetos de determinado curso estão na área destinada a esses cursos e os que não são de curso nenhum, estarão na aba "Projetos pessoais".',
  },
];

const post = async () => {
  await fetch(
    "https://mycurriculum-439eb-default-rtdb.firebaseio.com/presentation.json",
    {
      method: "POST",
      body: JSON.stringify(presentation),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

post();
