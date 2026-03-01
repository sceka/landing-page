"use client";

import { useState, useEffect } from "react";
import "./Contact.css";

const contactInfo = [
	{
		title: "✉️ Email",
		description: "scekicm02@\ngmail.com",
		link: "mailto:scekicm02@gmail.com"
	},
	{
		title: "📞 Telefon",
		description: "+382 67 227 668\n(Viber / WhatsApp)",
		link: "tel:+38267227668"
	},
	{
		title: "🌍 Lokacija",
		description: "Podgorica - Budva\n Crna Gora"
	}
];

export default function Contact() {
	const [isSafari, setIsSafari] = useState(false);

	useEffect(() => {
		const userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.indexOf("safari") !== -1) {
			if (userAgent.indexOf("chrome") === -1 && userAgent.indexOf("opera") === -1 && userAgent.indexOf("opr") === -1) {
				setIsSafari(true);
			}
		}
	}, []);

	function renderContactItem(item: (typeof contactInfo)[0]) {
		const splitDescription = item.description.split("\n");

		return (
			<div className='contact-item' key={item.title}>
				<div className='contact-item-header'>
					<h3>{item.title}</h3>
				</div>
				<a href={item.link} target='_blank'>
					{splitDescription.map((line, index) => (
						<span key={index}>
							{line}
							{index < splitDescription.length - 1 && <br />}
						</span>
					))}
				</a>
			</div>
		);
	}

	return (
		<section id='contact' className='contact container'>
			<div className='contact-content'>
				<div className='contact-info'>
					<div className='animate-in idk'>
						<h2>Kontakt</h2>
						<p>
							Imate pitanja? Spreman sam da pomognem Vama i Vasem projektu na najbolji
							mogući način. Pošaljite mi poruku ili pozovite direktno.
						</p>
					</div>

					{/* Mobile (iOS?) doesn't properly support animating the background in */}
					<div className='contact-gradient-container hide-desktop'>
						<div className='cta-gradient' />
					</div>
					<div className='contact-gradient-container animate-in hide-mobile'>
						<div className='cta-gradient' />
					</div>

					<div className='animate-in'>
						<div className='contact-list card highlighted '>
							{contactInfo.map(renderContactItem)}
						</div>

						<div className={`contact-cta-container ${isSafari ? "no-gradient" : ""}`}>
							<div className='contact-cta-background-gradient' />
							<a className='btn contact-cta' href='tel:+38267227668'>
								Kontaktiraj
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
