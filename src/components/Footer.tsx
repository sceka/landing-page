"use client";

import "./Footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-content'>
					<div className='footer-section'>
						<h3>Quark Digital</h3>
						<p>Softverska agencija iz Crne Gore. Izrada i dizajn web sajtova i mobilnih aplikacija.</p>
					</div>
					<div className='footer-section'>
						<h4>Usluge</h4>
						<ul>
							<li>Web Design</li>
							<li>Web Development</li>
							<li>Hosting</li>
						</ul>
					</div>
					<div className='footer-section'>
						<h4>Kontakt</h4>
						<ul>
							<li>Podgorica, Crna Gora</li>
							<li>scekicm02@gmail.com</li>
							<li>+382 67 227 668</li>
						</ul>
					</div>
				</div>
				<div className='footer-bottom'>
					<p>&copy; {currentYear} Quark Digital.</p>
				</div>
			</div>
		</footer>
	);
}
