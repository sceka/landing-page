"use client";

import "./About.css";
import Image from "next/image";
import aboutImage from "../../public/avatar.jpg";
import markoImage from "../../public/marko1.png";
import urosImage from "../../public/uros.jpg";

const teamMembers = [
	{
		name: "Đorđe Popović",
		image: aboutImage,
		bio: "Softverski inženjer sa više od 5 godine iskustva u profesionalnoj izradi web i mobilnih proizvoda, stečenog u svjetskim IT firmama. Počeo sam da programiram sa 12 godina, a sada pomažem malim biznisima i preduzetnicima da dobiju kvalitetan, brz, i moderan sajt koji ostavlja profesionalan utisak i podstiče pronalaženje novih klijenata. Pristup mi je jednostavan: jasan dizajn, kvalitetna izrada i fokus na rezultate koji su Vama važni."
	},
	{
		name: "Marko Šćekić",
		image: markoImage,
		bio: "Samouk programer sa preko 5 godina iskustva u industriji. Prvi kod sam pisao u sedmom razredu osnovne škole, u C++. Od tada se kontinuirano usavršavam i danas se bavim webom i mobilnim aplikacijama — od koncepta do gotovog proizvoda. Važno mi je da rješenja budu pouzdana, da se u roku isporuče i da odgovaraju onome što klijent zaista želi. Volim izazove i rad na projektima koji donose stvarnu vrijednost; sa timom Quark Digital dijelim isti cilj: da vaša ideja postane proizvod koji radi."
	},
	{
		name: "Uroš Stešević",
		image: urosImage,
		bio: "Softverski inženjer sa više od 4 godine iskustva u razvoju web i mobilnih aplikacija. Rad u timu i dobra komunikacija su mi bitni — volim projekte gdje svi idu ka istom cilju. Trudim se da kod bude uredan, da se brzo i jasno radi, i da krajnji korisnik dobije ono što mu treba. Ulaganje u kvalitet i održivost rješenja smatram ključnim za dugoročan uspjeh projekta. U agenciji radim na tome da svaki projekat bude ne samo isporučen na vrijeme, već i lako održiv u budućnosti."
	}
];

export default function About() {
	return (
		<section id='about' className='about container'>
			<h2>Naš tim</h2>
			{teamMembers.map((member, index) => (
				<div key={index} className='about-content'>
					<div className='about-text'>
						<div className='img-container'>
							<Image src={member.image} alt={member.name || "Član tima"} fill={true} />
						</div>
					</div>
					<div>
						{member.name && <h3>{member.name}</h3>}
						{member.bio && <p>{member.bio}</p>}
					</div>
				</div>
			))}
		</section>
	);
}
