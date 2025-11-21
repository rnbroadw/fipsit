import React from "react";

const App = () => {
	return (
		<div className="site">
			<Header />

			<main>
				<Hero />
				<Services />
				<Contact />
			</main>

			<Footer />
		</div>
	);
};

const Header = () => (
	<header className="header">
		<div className="container header-inner">
			<a href="#top" className="logo">
				<div className="logo-mark">FI</div>
				<div className="logo-text">
					<span className="logo-title">First Impressions</span>
					<span className="logo-subtitle">
						Marketing, Design &amp; Print • Oxford, MI
					</span>
				</div>
			</a>

			<nav className="nav">
				<a href="#services">Services</a>
				<a href="#contact" className="nav-cta">
					Request a Quote
				</a>
			</nav>
		</div>
	</header>
);

const Hero = () => (
	<section className="hero" id="top">
		<div className="container hero-inner">
			<div className="hero-copy">
				<p className="eyebrow">Oxford, Michigan</p>
				<h1>
					Full-Service <span className="accent">Marketing, Design</span> &amp;
					Print.
				</h1>
				<p className="hero-lead">
					At First Impressions we are a full-service Marketing, Design and Print
					firm specializing in Direct Mail, EDDM, Personalization, conventional
					and digital four-color printing, including large format printing.
				</p>
				<div className="hero-actions">
					<a href="#contact" className="btn primary">
						Start a Project
					</a>
					<a href="#services" className="btn ghost">
						View Services
					</a>
				</div>
				<div className="hero-meta">
					<span>Direct Mail &amp; EDDM</span>
					<span>Four-Color Printing</span>
					<span>Large Format Printing</span>
				</div>
			</div>

			<div className="hero-card">
				<h2>Print &amp; Mail that gets noticed.</h2>
				<p>
					From concept to mailbox, we handle design, production and mailing so
					you can focus on running your business.
				</p>
				<ul className="hero-list">
					<li>Postcards &amp; self-mailers</li>
					<li>Brochures, flyers &amp; booklets</li>
					<li>Banners, signs &amp; displays</li>
				</ul>
				<a href="#contact" className="btn secondary full">
					Request a Quote
				</a>
			</div>
		</div>
	</section>
);

const Services = () => (
	<section className="section" id="services">
		<div className="container">
			<header className="section-header">
				<h2>What We Do</h2>
				<p>
					A single partner for your marketing, design, printing and mailing
					needs.
				</p>
			</header>

			<div className="grid cards-3">
				<ServiceCard
					title="Direct Mail &amp; EDDM"
					items={[
						"Every Door Direct Mail campaigns",
						"Targeted list and data cleanup",
						"Postcards &amp; letter packages",
					]}
				/>
				<ServiceCard
					title="Conventional &amp; Digital Printing"
					items={[
						"Full-color digital &amp; offset",
						"Brochures, flyers &amp; catalogs",
						"Business stationery &amp; forms",
					]}
				/>
				<ServiceCard
					title="Large Format Printing"
					items={[
						"Banners &amp; signs",
						"Window &amp; wall graphics",
						"Event &amp; trade show displays",
					]}
				/>
				<ServiceCard
					title="Personalization"
					items={[
						"Variable data printing",
						"Personalized offers &amp; coupons",
						"Barcodes &amp; QR codes",
					]}
				/>
				<ServiceCard
					title="Design &amp; Layout"
					items={[
						"Print-ready design",
						"Brand-aligned layouts",
						"File repair &amp; preflight",
					]}
				/>
				<ServiceCard
					title="Local Partner"
					items={[
						"Oxford, MI based",
						"Real people, real support",
						"From idea to finished piece",
					]}
				/>
			</div>
		</div>
	</section>
);

const ServiceCard = ({ title, items }) => (
	<article className="card service-card">
		<h3>{title}</h3>
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	</article>
);

const Contact = () => (
	<section className="section" id="contact">
		<div className="container two-col">
			<div>
				<header className="section-header left">
					<h2>Request a Quote</h2>
					<p>
						Tell us a little about your project and we&apos;ll follow up with
						options and pricing.
					</p>
				</header>

				<form
					className="contact-form"
					onSubmit={(e) => {
						e.preventDefault();
						alert(
							"This is a static demo. Connect this form to email or a backend to make it live."
						);
					}}
				>
					<div className="field-row">
						<div className="field">
							<label htmlFor="name">Name*</label>
							<input id="name" type="text" required />
						</div>
						<div className="field">
							<label htmlFor="company">Company</label>
							<input id="company" type="text" />
						</div>
					</div>

					<div className="field-row">
						<div className="field">
							<label htmlFor="email">Email*</label>
							<input id="email" type="email" required />
						</div>
						<div className="field">
							<label htmlFor="phone">Phone</label>
							<input id="phone" type="tel" />
						</div>
					</div>

					<div className="field">
						<label htmlFor="service">What are you interested in?</label>
						<select id="service">
							<option>Direct Mail / EDDM</option>
							<option>Brochures / Flyers</option>
							<option>Large Format / Signage</option>
							<option>Design only</option>
							<option>Not sure yet</option>
						</select>
					</div>

					<div className="field">
						<label htmlFor="details">Project details</label>
						<textarea
							id="details"
							rows="4"
							placeholder="Quantities, sizes, deadlines, goals..."
						/>
					</div>

					<button type="submit" className="btn primary">
						Submit Request
					</button>
				</form>
			</div>

			<aside className="contact-aside">
				<div className="contact-card">
					<h3>Contact &amp; Mailing Address</h3>
					<p>
						P.O. Box 43
						<br />
						Oxford, MI 48370-2213
					</p>
					<p>
						Phone: <a href="tel:12486285024">(248) 628-5024</a>
						<br />
						Fax: (248) 628-1743
						<br />
						Email: <a href="mailto:info@fipsit.com">info@fipsit.com</a>
					</p>
				</div>
			</aside>
		</div>
	</section>
);

const Footer = () => (
	<footer className="footer">
		<div className="container footer-inner">
			<p>
				© {new Date().getFullYear()} First Impressions Marketing &amp; Print –
				Oxford, MI.
			</p>
			<p className="small">
				Full-service marketing, design and print specializing in Direct Mail,
				EDDM, personalization, four-color and large format printing.
			</p>
		</div>
	</footer>
);

export default App;
