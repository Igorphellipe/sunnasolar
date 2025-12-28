console.log('JS carregado com sucesso');

// MODAL DE SERVIÇOS 
const modal = document.getElementById("modalServicos");
const modalTitulo = document.getElementById("modal-titulo");
const modalImagem = document.getElementById("modal-imagem");
const modalDescricao = document.getElementById("modal-texto");
const modalUso = document.getElementById("modal-uso");
const modalIndicado = document.getElementById("modal-indicado");
const fechaModal = document.querySelector(".modal-close");

const servicesData = {
  ongrid: {
    titulo: "Sistemas On-Grid",
    imagem: "imagens/Sunna Solar - logo.png",
    descricao: "Sistemas fotovoltaicos conectados à rede elétrica pública, permitindo a troca de energia com a concessionária.",
    uso: "Uso comum: Residências, comércios e indústrias conectados à rede elétrica.",
    indicado: "Indicado para: Residencial, Comercial e Empresarial."
  },
  offgrid: {
    titulo: "Sistemas Off-Grid",
    imagem: "imagens/Sunna Solar - logo.png",
    descricao: "Sistemas fotovoltaicos independentes da rede elétrica, ideais para locais remotos ou sem acesso à rede.",
    uso: "Uso comum: Sítios, fazendas, áreas rurais e locais isolados.",
    indicado: "Indicado para: Rural e locais sem acesso à rede pública."
  },
  zerogrid: {
    titulo: "Sistemas Zero-Grid",
    imagem: "imagens/Sunna Solar - logo.png",
    descricao: "Sistemas fotovoltaicos que combinam a eficiência da energia solar com a autonomia total do sistema.",
    uso: "Uso comum: Projetos que exigem independência total da rede, com backup e controle inteligente.",
    indicado: "Indicado para: Residencial, Empresarial e Rural que buscam autonomia máxima."
  }
};

// Abrir modal
document.querySelectorAll('.service-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.dataset.service;
    const data = servicesData[service];

    if (!data) return;

    modalTitulo.textContent = data.titulo;
    modalImagem.src = data.imagem;
    modalDescricao.textContent = data.descricao;
    modalUso.textContent = data.uso;
    modalIndicado.textContent = data.indicado;

    if (modal) {
      modal.classList.add('active');
    }
  });
});

// Fechar modal
if (modal) {
  function closeModal() {
      modal.classList.remove('active');
      // Limpa campos do modal
      modalTitulo.textContent = '';
      modalImagem.src = '';
      modalDescricao.textContent = '';
      modalUso.textContent = '';
      modalIndicado.textContent = '';
  }

// Botão X
  fechaModal.addEventListener('click', closeModal);

// Clique fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
     closeModal();
    }
});
}

// função para abrir o modal (pode ser usada em outros contextos)
function abrirModal() {
  console.log('Abrir modal chamado');
  if (modal) {
    modal.classList.add('active');
  } else {
    console.error('Modal não encontrado');
  } 
}


// Botão de voltar ao topo
const topo = document.getElementById('topo');
window.addEventListener('scroll', () => {
  topo.style.display = window.scrollY > 400 ? 'block' : 'none';
});
topo.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// FAQ - expandir e recolher
const faqs = document.querySelectorAll('.faq-question');
faqs.forEach(f => f.addEventListener('click', () => {
  const ans = f.nextElementSibling;
  const open = ans.style.display === 'block';
  document.querySelectorAll('.faq-answer').forEach(a => a.style.display='none');
  document.querySelectorAll('.faq-question span').forEach(s=>s.textContent='+');
  ans.style.display = open ? 'none' : 'block';
  f.querySelector('span').textContent = open ? '+' : '-';
}));

// Destacar link do menu conforme a seção visível
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });


  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}); 

// Scroll suave para seções
const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    const headerOffset = 100; // Altura do cabeçalho
    const elementPosition = targetSection.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}); 


// Alterar estilo do cabeçalho ao rolar a página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  } 
});

// Menu móvel
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('header .nav');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});