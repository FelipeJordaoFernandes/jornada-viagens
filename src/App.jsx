import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import logoDesktop from "../img/Logo-provisória-branca-desktop.png";
import logoMobile from "../img/Logo-provisória-branca-mobile.png";
import logoFooter from "../img/Logo-branco-com-tagline.png";
import menuIcon from "../img/menu.png";
import whatsapp from "../img/whatsapp.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import homeHero from "../img/desktop/Banner-large.png";
import homeHeroTablet from "../img/tablet/Banner-tablet.png";
import homeHeroMobile from "../img/mobile/Banner-homepage.png";
import japanOffer from "../img/desktop/Japao.png";
import sanAndreasOffer from "../img/desktop/San-Andreas.png";
import paraibaOffer from "../img/desktop/Paraiba.png";
import manausOffer from "../img/desktop/Manaus.png";
import nationalIcon from "../img/mobile/ícone - pacotes nacionais.png";
import internationalIcon from "../img/mobile/ícone - pacotes interacionais.png";
import transferIcon from "../img/mobile/ícone -transfer.png";
import insuranceIcon from "../img/mobile/ícone - seguro viagem.png";
import tokyoImage from "../img/desktop/Tokyo.jpg";
import osakaImage from "../img/desktop/Osaka.jpg";
import homeMontage from "../img/desktop/frame.png";
import talitaAvatar from "../img/mobile/Avatar-Talita.png";
import amariAvatar from "../img/mobile/Avatar-Amari.png";
import lauroAvatar from "../img/mobile/Avatar-Lauro.png";
import homePreFooter from "../img/desktop/Imagem-pre-rodape-large.png";
import destinationHero from "../img/desktop/banner-destino-large.png";
import destinationMontage from "../img/desktop/montagem.png";
import julioAvatar from "../img/mobile/Avatar-Julio.png";
import luciaAvatar from "../img/mobile/Avatar-Lucia.png";
import olgaAvatar from "../img/mobile/Avatar-Olga.png";
import destinationPreFooter from "../img/desktop/imagem-pre-rodape-destino-large.png";
import blogHero from "../img/desktop/banner-blog-large.png";
import blogArrival from "../img/desktop/tokyo-1.png";
import blogAccommodation from "../img/desktop/tokyo-2.png";
import blogOsaka from "../img/desktop/osaka-blog.png";
import blogHiroshima from "../img/desktop/hiroshima-blog.png";
import blogKyoto from "../img/desktop/kyoto-blog.png";
import contactHero from "../img/desktop/banner-contact-large.png";
import contactPreFooter from "../img/desktop/imagem-pre-rodape-contact-large.png";

const details = {
  japao: ["Japão", "R$ 4000", "Pacote com passagem aérea, hospedagem e roteiro cultural pelas principais cidades japonesas.", ["7 diárias", "Café da manhã incluso", "Passeios em Tóquio e Osaka"]],
  "san-andreas": ["San Andreas", "R$ 3000", "Uma viagem urbana para quem gosta de paisagens icônicas, compras e entretenimento.", ["5 diárias", "Hotel bem localizado", "Transfer aeroporto-hotel"]],
  paraiba: ["Paraíba", "R$ 1200", "Praias, gastronomia regional e descanso em um pacote nacional com ótimo custo-benefício.", ["4 diárias", "Passeio pelo litoral", "Opção de pagamento no Pix"]],
  manaus: ["Manaus", "R$ 1600", "Experiência amazônica com cultura local, natureza e passeios guiados pela região.", ["4 diárias", "Tour pelo centro histórico", "Passeio de barco opcional"]],
  tokyo: ["Tóquio", "A partir de R$ 4000", "Roteiro para explorar templos, tecnologia, gastronomia e bairros clássicos da capital japonesa.", ["Roteiro personalizado", "Suporte da equipe Jornada", "Indicações gastronômicas"]],
  osaka: ["Osaka", "A partir de R$ 3800", "Destino perfeito para gastronomia, vida noturna e conexão com outras cidades japonesas.", ["Roteiro gastronômico", "Fácil acesso a Kyoto", "Hospedagem central"]],
};

const offers = [
  ["japao", "internacional", "Japão", "R$ 4000", japanOffer], ["san-andreas", "internacional", "San Andreas", "R$ 3000", sanAndreasOffer],
  ["paraiba", "nacional", "Paraíba", "R$ 1200", paraibaOffer], ["manaus", "nacional", "Manaus", "R$ 1600", manausOffer],
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><Link className="brand" to="/" onClick={close} aria-label="Jornada Viagens, página inicial"><img className="brand__desktop" src={logoDesktop} alt="Jornada Viagens" /><img className="brand__mobile" src={logoMobile} alt="Jornada Viagens" /></Link><button className="menu-button" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}><img src={menuIcon} alt="" /></button><nav className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Navegação principal"><NavLink to="/blog" onClick={close}>Blog</NavLink><NavLink to="/pacotes" onClick={close}>Pacotes de viagem</NavLink><NavLink to="/contato" onClick={close}>Contato</NavLink></nav></header>;
}

function Footer() {
  return <footer className="site-footer"><div><img className="footer-logo" src={logoFooter} alt="Jornada Viagens" /><p>Horário de atendimento: 08h - 20h (Segunda a Sábado)</p><p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p></div><div className="footer-social"><p>Acesse nossas redes:</p><p><a href="#redes" aria-label="WhatsApp"><img src={whatsapp} alt="" /></a><a href="#redes" aria-label="Instagram"><img src={instagram} alt="" /></a><a href="#redes" aria-label="Twitter"><img src={twitter} alt="" /></a></p></div></footer>;
}

function Title({ children }) { return <div className="section-title"><h2>{children}</h2><span /></div>; }
function Button({ children = "Ver detalhes", onClick, className = "" }) { return <button className={`primary-button ${className}`} type="button" onClick={onClick}>{children}</button>; }

function Hero({ kind = "home", title, text }) {
  const visual = kind === "home" ? <picture><source media="(min-width: 1024px)" srcSet={homeHero} /><source media="(min-width: 768px)" srcSet={homeHeroTablet} /><img src={homeHeroMobile} alt="Praia nas Maldivas" /></picture> : <img src={{ destination: destinationHero, blog: blogHero, contact: contactHero }[kind]} alt="" />;
  return <section className={`hero hero--${kind}`}><div className="hero-visual">{visual}</div>{title && <div className="hero-copy"><h1>{title}</h1><span /><p>{text}</p></div>}</section>;
}

function PreFooter({ image, alt }) { return <div className="pre-footer"><img src={image} alt={alt} /></div>; }
function DestinationCard({ image, title, text, click }) { return <article className="destination-card"><img src={image} alt={`Vista de ${title}`} /><h3>{title}</h3><p>{text}</p><Button onClick={click} /></article>; }
function Testimonial({ image, name, text }) { return <article className="testimonial"><p>{text}</p><div><img src={image} alt={`Foto de ${name}`} /><section><h3>{name}</h3><strong aria-label="5 de 5 estrelas">★★★★★</strong></section></div></article>; }

function Dialog({ item, close }) {
  if (!item) return null;
  const [title, price, summary, highlights] = item;
  return <div className="dialog-overlay" onMouseDown={close}><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(event) => event.stopPropagation()}><button className="dialog-close" type="button" onClick={close} aria-label="Fechar detalhes">×</button><h2 id="dialog-title">{title}</h2><strong>{price}</strong><p>{summary}</p><ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><Link className="primary-button" to="/contato" onClick={close}>Quero esse pacote</Link></section></div>;
}

function Home({ show }) {
  const [filter, setFilter] = useState("todos");
  const cards = filter === "todos" ? offers : offers.filter((offer) => offer[1] === filter);
  const categories = [[nationalIcon, "Pacotes Nacionais"], [internationalIcon, "Pacotes Internacionais"], [transferIcon, "Transfer"], [insuranceIcon, "Seguro Viagem"]];
  return <><Hero /><main className="page-content home-page"><p className="home-intro">Somos uma agência apaixonada por criar viagens inesquecíveis. Do destino à seleção das atividades, cuidamos de todos os detalhes para que você aproveite ao máximo cada momento da sua jornada!</p><section className="content-section"><Title>Ofertas da semana</Title><div className="filters"><Button className={filter === "todos" ? "is-active" : ""} onClick={() => setFilter("todos")}>Todos</Button><Button className={filter === "internacional" ? "is-active" : ""} onClick={() => setFilter("internacional")}>Internacionais</Button><Button className={filter === "nacional" ? "is-active" : ""} onClick={() => setFilter("nacional")}>Nacionais</Button></div><div className="offer-grid">{cards.map(([key, category, name, price, image]) => <article className="offer-card" key={key} style={{ backgroundImage: `linear-gradient(#0008,#0008),url(${image})` }}><p>HOTEL + AÉREO</p><h3>{name}</h3><strong>{price}</strong><Button onClick={() => show(details[key])} /></article>)}</div></section><section className="content-section"><Title>Busque por Categoria</Title><div className="category-grid">{categories.map(([image, label]) => <article className="category-card" key={label}><img src={image} alt="" /><h3>{label}</h3></article>)}</div></section><Destinations show={show} title="Destinos populares" /><section className="content-section"><Title>Condições de Pagamento</Title><div className="payment-layout"><div><h3>Parcelamento em até 12x!</h3><p>Viaje pagando em até 12 parcelas no cartão, à vista no crédito com 5% de desconto ou no Pix com 10% de desconto!</p></div><img src={homeMontage} alt="Montagem de momentos de viagem" /></div></section><Testimonials data={[[talitaAvatar, "Talita Villas Boas", "A Jornada foi uma das melhores agências de viagens que eu já experimentei. O serviço ao cliente foi excepcional, e toda a equipe foi muito atenciosa e prestativa."], [amariAvatar, "Amari Salin", "Recomendo fortemente a agência de viagens Jornada. Eles oferecem um serviço personalizado e de alta qualidade que excedeu minhas expectativas em minha última viagem."], [lauroAvatar, "Lauro B. Matos", "Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada."]]} /></main><PreFooter image={homePreFooter} alt="Pessoa aproveitando uma viagem" /></>;
}

function Destinations({ show, title }) { return <section className="content-section"><Title>{title}</Title><div className="destination-grid"><DestinationCard image={tokyoImage} title="Tóquio" text="Tóquio é uma cidade vibrante e cosmopolita, com seus templos históricos, museus de arte moderna e arranha-céus icônicos. Não perca a chance de mergulhar em sua atmosfera fascinante." click={() => show(details.tokyo)} /><DestinationCard image={osakaImage} title="Osaka" text="Osaka é uma cidade agitada e moderna no Japão. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas." click={() => show(details.osaka)} /></div></section>; }
function Testimonials({ data }) { return <section className="content-section"><Title>Depoimentos</Title><div className="testimonial-grid">{data.map(([image, name, text]) => <Testimonial key={name} image={image} name={name} text={text} />)}</div></section>; }

function Packages({ show }) { return <><Hero kind="destination" title="Conheça o Japão!" text="A Jornada possui o pacote perfeito para seu estilo e orçamento! Conheça as belas paisagens e a cultura milenar deste belo país!" /><main className="page-content"><Destinations show={show} title="Destinos da Excursão" /><section className="content-section"><Title>Pagamento</Title><div className="payment-layout"><div><h3>R$ 4000</h3><h4>Em até 12x!</h4><p>Viaje pagando em até 12 parcelas no cartão, à vista no crédito com 5% de desconto ou no Pix com 10% de desconto!</p></div><img src={destinationMontage} alt="Montagem com lugares do Japão" /></div></section><Testimonials data={[[julioAvatar, "Júlio Garibaldi", "Tive uma experiência inesquecível. O pacote Japão me permitiu explorar de templos antigos a cidades modernas. E o valor coube no bolso, recomendo!"], [luciaAvatar, "Lúcia S. Rabello", "Minha viagem para Tóquio foi incrível. O itinerário personalizado me permitiu muito em pouco tempo. Excedeu minhas expectativas e já quero viajar com a Jornada novamente!"], [olgaAvatar, "Olga dos Reis", "Minha viagem para Osaka foi inesquecível! A Jornada organizou tudo de forma perfeita, recomendo de olhos fechados!"]]} /></main><PreFooter image={destinationPreFooter} alt="Cenário japonês" /></>;
}

function ArticleBlock({ title, children }) { return <section className="article-block"><h3>{title}</h3><p>{children}</p></section>; }
function Blog({ show }) {
  const related = [[blogOsaka, "Osaka", "osaka", "Osaka é uma cidade agitada e moderna no Japão. A cidade é famosa por sua gastronomia deliciosa e por ser um excelente ponto de partida para explorar outras cidades japonesas próximas."], [blogHiroshima, "Hiroshima", "tokyo", "Cidade localizada no sudoeste do Japão, conhecida por sua história, cultura de paz e gastronomia."], [blogKyoto, "Kyoto", "tokyo", "Kyoto preserva tradições japonesas, com templos históricos, jardins e cerimônias de chá."]];
  return <><Hero kind="blog" title="Blog da Jornada" text="Histórias de viagens de nossos clientes. Inspire-se, encontre roteiros e dicas! Qual seu próximo destino?" /><main className="page-content"><article className="content-section blog-article"><Title>Tokyo</Title><div className="arrival"><div><h3>Chegada</h3><p>Nossa viagem começou no Aeroporto Internacional de Narita, localizado a cerca de 60 km de Tóquio. Após desembarcar e fazer todos os procedimentos de imigração, fomos recebidos pela equipe da Jornada Viagens, que nos conduziu até o nosso hotel.</p></div><img src={blogArrival} alt="Vista de Tóquio" /></div><ArticleBlock title="Acomodação">Nos hospedamos no luxuoso Hotel Okura Tokyo, localizado no bairro de Toranomon. O hotel possui uma vista incrível para a cidade, e oferece uma ampla gama de serviços, incluindo um spa, uma piscina, restaurantes renomados e um lounge bar. Ficamos encantados com a atenção aos detalhes e a qualidade do atendimento.</ArticleBlock><figure className="article-figure"><img src={blogAccommodation} alt="Vista da cidade pela janela do hotel" /><figcaption>Vista da cidade da janela do hotel!</figcaption></figure><ArticleBlock title="Explorando a cidade">Começamos nosso tour pela cidade com uma visita ao famoso Templo Sensoji, um dos mais antigos e importantes templos budistas do Japão. Caminhamos pela rua comercial Nakamise, onde encontramos muitas lojas vendendo artigos típicos japoneses, como quimonos, leques e comidas tradicionais. Em seguida, visitamos o icônico cruzamento de Shibuya, um dos mais movimentados do mundo. No dia seguinte, visitamos o Parque Ueno e, à noite, fomos a um típico Izakaya.</ArticleBlock><ArticleBlock title="Compras">Tóquio é famosa por suas lojas de departamento e centros comerciais. Fomos ao distrito comercial de Ginza, onde encontramos lojas das marcas mais renomadas do mundo, e também a Akihabara, o centro de eletrônicos e entretenimento.</ArticleBlock><ArticleBlock title="Gastronomia">Não se pode falar do Japão sem mencionar sua gastronomia. Tivemos a oportunidade de experimentar sushi, sashimi, ramen, tempura e doces tradicionais como o mochi.</ArticleBlock><ArticleBlock title="Concluindo...">Nossa viagem a Tóquio com a agência Jornada Viagens foi uma experiência inesquecível. A equipe cuidou de todos os detalhes, desde a reserva do hotel até a escolha dos melhores lugares para visitar e comer.</ArticleBlock></article><section className="content-section"><Title>Talvez você também goste destes posts...</Title><div className="related-grid">{related.map(([image, title, key, text]) => <article key={title}><img src={image} alt={`Vista de ${title}`} /><h3>{title}</h3><p>{text}</p><Button onClick={() => show(details[key])} /></article>)}</div></section></main></>;
}

function Contact() {
  const [status, setStatus] = useState("");
  const submit = (event) => { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) return form.reportValidity(); setStatus("Mensagem enviada com sucesso! Em um projeto real, estes dados seriam enviados para uma API."); form.reset(); };
  return <><Hero kind="contact" title="Entre em contato!" text="Dúvidas, sugestões, problemas para resolver? Temos uma equipe de plantão para ajudar você!" /><main className="page-content"><section className="content-section contact-section"><Title>Preencha o formulário:</Title><p>Temos uma equipe sempre em prontidão para resolver suas dúvidas, problemas, trazer dicas e orientações objetivas para tornar sua experiência o mais prazerosa e tranquila possível. Preencha seus dados que vamos retornar seu contato conforme a urgência do seu chamado. Pode confiar!</p><form onSubmit={submit}><label>Seu nome<input name="name" required /></label><div className="form-row"><label>Telefone<input name="phone" type="tel" required minLength="10" /></label><label>E-mail<input name="email" type="email" required /></label></div><label>Assunto<input name="subject" required /></label><label>Escreva sua mensagem aqui...<textarea name="message" required minLength="20" rows="4" /></label><Button>Enviar!</Button>{status && <p className="form-status" role="status">{status}</p>}</form></section></main><PreFooter image={contactPreFooter} alt="Pessoa planejando uma viagem" /></>;
}

function NotFound() { return <main className="not-found"><h1>Página não encontrada</h1><Link to="/" className="primary-button">Voltar ao início</Link></main>; }

export default function App() { const [item, setItem] = useState(null); return <><Header /><Routes><Route path="/" element={<Home show={setItem} />} /><Route path="/pacotes" element={<Packages show={setItem} />} /><Route path="/blog" element={<Blog show={setItem} />} /><Route path="/contato" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes><Footer /><Dialog item={item} close={() => setItem(null)} /></>; }
