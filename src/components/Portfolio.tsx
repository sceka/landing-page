import "./Portfolio.css";
import Image, { StaticImageData } from "next/image";
import reliveImage from "../../public/portfolio/relive.jpg";
import cameaImage from "../../public/portfolio/camea.jpg";
import etherImage from "../../public/portfolio/ether.jpg";
import cabloImage from "../../public/portfolio/cablo.jpg";
import mneLuxImage from "../../public/portfolio/mne-lux.jpg";
import bionizeImage from "../../public/portfolio/bionize.jpg";
import fuelMeImage from "../../public/portfolio/fuelme.png";
import wivImage from "../../public/portfolio/wiv.avif";
import PersonalProjects from "./PersonalProjects";
import linkIcon from "../../public/icons/link-3.svg";

const currentYear = new Date().getFullYear();

type ProjectItem = {
	id: number;
	title: string;
	date: string;
	description: string;
	image: StaticImageData;
	link?: string;
	imageSize?: { width: number; height: number };
};

/** Radno iskustvo po članu: prvo ime i prezime, ispod kartice; tri takva bloka */
const workExperienceByMember: { memberName: string; projects: ProjectItem[] }[] = [
	{
		memberName: "Đorđe Popović",
		projects: [
			{
				id: 1,
				title: "Relive",
				date: "2021 - 2026",
				description:
					"Relive je platforma, bazirana u Holandiji, koja omogućava praćenje aktivnosti poput trčanja, biciklizma i planinarenja, sa mobilnom i web aplikacijom. Koriste je preko 20 miliona korisnika širom sveta. Radio sam u multi-disciplinarnom timu na ključnim dijelovima proizvoda koji utiču na svakodnevno iskustvo korisnika. U toku svog radnog iskustva, smanjio sam troškove infrastrukture za oko 3000 EUR mjesečno, i značajno poboljšao rang na Google pretrazi kroz SEO optimizaciju.",
				image: reliveImage,
				link: "https://relive.com"
			},
			{
				id: 2,
				title: "Camea",
				date: "Jan - Jun 2021 ",
				description:
					"Camea je platforma koja se fokusira na digitalizaciju pronalaženja osobe za pomoć po kući, bazirana u Njemačkoj. Bio sam odgovoran za razvoj glavnih funkcionalnosti sajta. Sopstvenom inicijativom uveo sam moderne tehnologije i prakse koje su značajno smanjile vreme razvoja i poboljšale kvalitet proizvoda, poput automatskog testiranja.",
				image: cameaImage,
				link: "https://www.linkedin.com/company/cameacare"
			},
			{
				id: 3,
				title: "Ether",
				date: "Nov - Dec 2020",
				description:
					"Ether je društvena aplikacija koja povezuje ljude na osnovu njihove lokacije i interesovanja. Kao jedini programer u timu, samostalno sam razvio sam čitavu back-end infrastrukturu i API za aplikaciju od nule u duplo kraćem roku od onog što je planirano. Rezultirajući sistem je bio stabilan, brz, i testiran sa preko 100,000 virtualnih korisnika.",
				image: etherImage
			}
		]
	},
	{
		memberName: "Marko Šćekić", // Ime i prezime drugog člana
		projects: [
			{
				id: 4,
				title: "Fuel Me",
				date: "Apr 2023 - Sep 2024",
				description:
					"Fuel Me je platforma za naručivanje goriva koju koriste svjetske firme. Radio sam u malom, fokusiranom timu gdje su inženjering i proizvod bili u neposrednoj saradnji. Svojim radom sam doprinio Series A finansiranju kompanije od 18 miliona dolara. Napravio sam kompletan sistem za email obavještenja i značajno ubrzao sajt — vrijeme odziva smanjio sa 10 na 3 sekunde, što je doprinijelo boljem korisničkom iskustvu i performansama proizvoda.",
				image: fuelMeImage,
				link: "https://fuel.me"
			},
			{
				id: 10,
				title: "Wiv Technology",
				date: "Dec 2021 – Mar 2023",
				description:
					"Norveška kompanija koja se bavi NFT-ovima i kriptovalutama — platforma za upravljanje i kreiranje digitalnih sadržaja. Vodio sam ključnu inicijativu — implementaciju sigurnosnog i autentifikacionog sistema za platformu za upravljanje digitalnim sadržajima, pri čemu je bilo u pitanju preko 50.000$. Predvodio sam i razvoj Wiv Marketplace platforme: završio je za 2 mjeseca umjesto planiranih 5, ubrzavši napredak za 60% već u prve dvije sedmice i uštedjevši kompaniji hiljade dolara.",
				image: wivImage,
			},
			{
				id: 11,
				title: "Camea",
				date: "Jan 2021 – Nov 2021",
				description:
					"Njemačka kompanija sa platformom koja moderizuje industriju njege i pronalaženja pomoći po kući. Radio sam remote iz Budve u živahnom i raznolikom timu, odgovoran za cijeli razvoj velike web platforme od početka do kraja. Uspješno sam rješavao sve izazove u razvoju i samostalno usvajao ono što je bilo potrebno za širok spektar zadataka, bez seniora u timu na koga bih se mogao osloniti.",
				image: cameaImage,
				link: "https://www.linkedin.com/company/cameacare"
			}
		]
	},
	{
		memberName: "Uroš Stešević",
		projects: [
			{
				id: 13,
				title: "Cablo",
				date: `2023 – ${currentYear}`,
				description:
					"Cablo je platforma za digitalizaciju ličnog prevoza i taksi servisa u Crnoj Gori, slična Uberu — korisnici mogu naručiti vožnju putem aplikacije širom zemlje. Od 2023. radim u timu na razvoju: doprinosim izradi mobilne aplikacije za vozače i putnike, web sajta za narudžbe i backend sistema koji povezuje sve u cjelinu. Uključen sam u dodavanje novih funkcionalnosti, održavanje i poboljšanje performansi i korisničkog iskustva.",
				image: cabloImage
			},
			{
				id: 12,
				title: "Wiv Technology",
				date: "Jun 2022 – Jul 2023",
				description:
					"Norveška kompanija koja se bavi NFT-ovima i kriptovalutama — platforma za upravljanje i kreiranje digitalnih sadržaja. Radio sam u timu na razvoju proizvoda, od održavanja do novih funkcionalnosti, u bliskoj saradnji sa ostatkom tima. Dinamično okruženje u kojem se brzo donose odluke i uči na izazovima. Doprinosio sam kvalitetu i stabilnosti platforme tokom perioda njenog rasta.",
				image: wivImage,
			}
		]
	}
];

const sideProjects: ProjectItem[] = [
	{
		id: 4,
		title: "Cablo",
		date: `2023 - ${currentYear}`,
		description:
			"Cablo je platforma za digitalizaciju licnog prevoza i taksi servisa u Crnoj Gori, nalik Uber-a. Dozvoljava korisnicima da zakažu vožnju putem aplikacije u bilo koje vrijeme širom teritorije Crne Gore, što rešava problem nedovoljne dostupnosti taksi servisa i tražnja posebnog broja taksija u svakom pojedinačnom gradu. Zajedno sa dvoje programera, razvili smo čitav sistem (aplikaciju, sajt, i server) od nule.",
		image: cabloImage
	},
	{
		id: 5,
		title: "Montenegro Luxury Association",
		date: "2022 - 2023",
		description:
			"Radili na izradi digitalne platforme za Montenegro Luxury Association, organizacija koja promoviše luksuzni turizam u Crnoj Gori na globalnom tržištu kroz brojna partnerstva i projekte. Razvio sam ključne funkcionalnosti na web sajtu za bukiranje luksuznog smještaja i usluga u Crnoj Gori koristeći moderne tehnologije.",
		image: mneLuxImage
	},
	{
		id: 6,
		title: "Bionize",
		date: "Jun - Oct 2022",
		description:
			"Bionize je browser dodatak koji automatski prilagođava tekst na web stranicama kako bi sadržaj bio lakši i brži za čitanje. Proizvod je prešao 3000+ preuzimanja u roku od dvije nedelje i pokazao koliko dobro osmišljen UX detalj može odmah povećati upotrebljivost.",
		image: bionizeImage
	}
];

export default function Portfolio() {
	function renderPortfolioItem(item: ProjectItem, section: "work" | "side") {
		const hasContent = item.title || item.description;
		const Wrapper = item.link ? "a" : "div";
		const wrapperProps = item.link
			? { href: item.link, target: "_blank" as const }
			: {};

		return (
			<Wrapper key={item.id} data-index={item.id} className='' {...wrapperProps}>
				<div
					className={`portfolio-item card animate-in highlighted-${section === "work" ? "1" : "2"}`}>
					<div className='portfolio-content'>
						<div className='portfolio-content-header'>
							<h3>{item.title || "—"}</h3>
							{item.date && <p>{item.date}</p>}
						</div>

						{item.description && <p className='portfolio-description'>{item.description}</p>}

						{item.link && hasContent && (
							<div className='portfolio-item-link'>
								<Image src={linkIcon} alt='Sajt' width={20} height={20} />
								<p className='link-text'>Posjeti Sajt</p>
							</div>
						)}
					</div>
					<div className='portfolio-image'>
						<Image src={item.image} alt={item.title || "Projekat"} width={item.imageSize?.width || 800} height={item.imageSize?.height || 800} style={{ objectFit: "cover", objectPosition: "center" }} />
					</div>
				</div>
			</Wrapper>
		);
	}

	return (
		<section id='portfolio' className='portfolio '>
			<div className='portfolio-main-sections container'>
				<div className='section-header animate-in'>
					<h2>Radno Iskustvo</h2>
					<p>
						Iskustvo iz realnih proizvoda i platformi, sa fokusom na rezultate koji
						donose vrijednost klijentima.
					</p>
				</div>

				{workExperienceByMember.map((member, i) => (
					<div key={i} className='portfolio-member-block'>
						<h3 className='portfolio-member-name'>
							{member.memberName || "Član tima"}
						</h3>
						<div className='portfolio-items'>
							{member.projects.map((item) => renderPortfolioItem(item, "work"))}
						</div>
					</div>
				))}

				<div className='section-header animate-in'>
					<h2>Projekti i Saradnje</h2>
					<p>
						Iskustvo iz realnih proizvoda i platformi, sa fokusom na rezultate koji
						donose vrijednost klijentima.
					</p>
				</div>
				<div className='portfolio-items'>{sideProjects.map((item) => renderPortfolioItem(item, "side"))}</div>
			</div>

			<PersonalProjects />
		</section>
	);
}
