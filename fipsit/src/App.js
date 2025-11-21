import React from "react";

const App = () => {
	return (
		<div className="site">
			<Header />

			<main>
				<Hero />
				<Services />
				<Industries />
				<WhyUs />
				<Process />
				<Callout />
				<Contact />
			</main>

			<Footer />
		</div>
	);
};

const Header = () => {
	return (
		<header className="header">
			<div className="container header-inner">
				<a href="#top" className="logo">
					{/* Replace this with your real logo image */}
					<div className="logo-mark">FI</div>
					<div className="logo-text">
						<span className="logo-title">First Impressions</span>
						<span className="logo-subtitle">
							Marketing &amp; Print • Oxford, MI
						</span>
					</div>
				</a>

				<nav className="nav">
					<a href="#services">Services</a>
					<a href="#industries">Industries</a>
					<a href="#why-us">Why Us</a>
					<a href="#process">Process</a>
					<a href="#contact" className="nav-cta">
						Request a Quote
					</a>
				</nav>
			</div>
		</header>
	);
};

const Hero = () => {
	return (
		<section className="hero" id="top">
			<div className="container hero-inner">
				<div className="hero-copy">
					<p className="eyebrow">Oxford, Michigan • Since 1980s</p>
					<h1>
						Your Full-Service <span className="accent">Marketing, Design</span>{" "}
						&amp; Print Partner
					</h1>
					<p className="hero-lead">
						At First Impressions, we specialize in Direct Mail, EDDM,
						Personalization, conventional and digital four-color printing, and
						large format printing. From idea to mailbox, we handle it all.
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
						<span>• Direct Mail &amp; EDDM Campaigns</span>
						<span>• High-Impact Large Format</span>
						<span>• Personalization &amp; Variable Data</span>
					</div>
				</div>

				<div className="hero-card">
					<h2>Print &amp; Mail that Gets Noticed.</h2>
					<p>
						Tell us about your next project and we&apos;ll help you choose the
						best format, stock, and mailing strategy to reach the right people
						at the right time.
					</p>
					<ul className="hero-list">
						<li>Postcards &amp; Self-Mailers</li>
						<li>Brochures, Catalogs &amp; Booklets</li>
						<li>Signs, Banners &amp; Displays</li>
					</ul>
					<a href="#contact" className="btn secondary full">
						Request a Quote
					</a>
					<p className="hero-contact">
						Prefer to talk? Call <a href="tel:12486285024">(248) 628-5024</a>
					</p>
				</div>
			</div>
		</section>
	);
};

const Services = () => {
	return (
		<section className="section" id="services">
			<div className="container">
				<header className="section-header">
					<h2>What We Do</h2>
					<p>
						A single partner for your marketing, design, printing and mailing –
						so you can stay focused on running your business.
					</p>
				</header>

				<div className="grid cards-3">
					<ServiceCard
						title="Direct Mail &amp; EDDM"
						items={[
							"Every Door Direct Mail (EDDM) campaigns",
							"Targeted list acquisition &amp; data cleanup",
							"Postcards, self-mailers &amp; letter packages",
							"Postal optimization &amp; mail preparation",
						]}
					/>
					<ServiceCard
						title="Conventional &amp; Digital Printing"
						items={[
							"Full-color digital &amp; offset printing",
							"Brochures, flyers, catalogs &amp; booklets",
							"Business cards, letterhead &amp; envelopes",
							"Numbering, perforating, scoring &amp; bindery",
						]}
					/>
					<ServiceCard
						title="Large Format &amp; Display"
						items={[
							"Posters, banners &amp; signs",
							"Window, wall &amp; floor graphics",
							"Trade show &amp; event displays",
							"Outdoor signage &amp; yard signs",
						]}
					/>
					<ServiceCard
						title="Personalization &amp; Variable Data"
						items={[
							"Personalized postcards &amp; letters",
							"Dynamic coupons, maps &amp; offers",
							"Merge/purge &amp; list management",
							"Barcode &amp; QR code integration",
						]}
					/>
					<ServiceCard
						title="Design &amp; Layout"
						items={[
							"Brand-aligned design for print",
							"Mail-ready layouts &amp; templates",
							"File repair &amp; preflight support",
							"Color correction &amp; proofing",
						]}
					/>
					<ServiceCard
						title="Labels &amp; Industrial Printing"
						items={[
							"Specialty bar code labels",
							"Product &amp; packaging labels",
							"Durable &amp; outdoor materials",
							"Short and long production runs",
						]}
					/>
				</div>
			</div>
		</section>
	);
};

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

const Industries = () => (
	<section className="section soft-bg" id="industries">
		<div className="container">
			<header className="section-header">
				<h2>Who We Serve</h2>
				<p>
					From local Oxford businesses to regional brands, we help organizations
					that depend on strong first impressions.
				</p>
			</header>

			<div className="chip-row">
				<span className="chip">Local Retail &amp; Restaurants</span>
				<span className="chip">Professional Services</span>
				<span className="chip">Healthcare &amp; Dental Offices</span>
				<span className="chip">Non-profits &amp; Community Groups</span>
				<span className="chip">Manufacturing &amp; Industrial</span>
				<span className="chip">Real Estate &amp; Home Services</span>
			</div>
		</div>
	</section>
);

const WhyUs = () => (
	<section className="section" id="why-us">
		<div className="container two-col">
			<div>
				<header className="section-header left">
					<h2>Why First Impressions?</h2>
					<p>
						You&apos;re not just ordering print — you&apos;re investing in a
						message. We make sure it lands with impact.
					</p>
				</header>

				<ul className="checklist">
					<li>
						<strong>Full-service support.</strong> Strategy, design, print and
						mail under one roof.
					</li>
					<li>
						<strong>Oxford-based, relationship-driven.</strong> Real people you
						can call, meet and rely on.
					</li>
					<li>
						<strong>Personalization that works.</strong> Variable data and
						targeting that lifts response rates.
					</li>
					<li>
						<strong>Color and quality you can see.</strong> Conventional and
						digital four-color printing for sharp, consistent results.
					</li>
				</ul>
			</div>

			<div className="highlight-box">
				<p className="eyebrow">Located in Oxford, MI</p>
				<h3>Local service. Big impact.</h3>
				<p>
					We know the area, the audience and the post office. Whether
					you&apos;re mailing across town or across the country, we make the
					process simple.
				</p>
				<div className="contact-snippet">
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
			</div>
		</div>
	</section>
);

const Process = () => (
	<section className="section" id="process">
		<div className="container">
			<header className="section-header">
				<h2>How It Works</h2>
				<p>Simple, guided steps from first idea to finished piece.</p>
			</header>

			<ol className="steps">
				<li>
					<span className="step-number">1</span>
					<div>
						<h3>Start the Conversation</h3>
						<p>
							Tell us about your goals, timeline and budget. We&apos;ll help you
							choose the right format and quantity.
						</p>
					</div>
				</li>
				<li>
					<span className="step-number">2</span>
					<div>
						<h3>Design &amp; Proof</h3>
						<p>
							Provide your artwork or collaborate with our design team. Review
							digital or hardcopy proofs before we go to press.
						</p>
					</div>
				</li>
				<li>
					<span className="step-number">3</span>
					<div>
						<h3>Print, Finish &amp; Mail</h3>
						<p>
							We produce, finish and, if needed, address and deliver your piece
							to the post office — ready to make a powerful first impression.
						</p>
					</div>
				</li>
			</ol>
		</div>
	</section>
);

const Callout = () => (
	<section className="callout">
		<div className="container callout-inner">
			<div>
				<h2>Have a project in mind?</h2>
				<p>
					Send us your files, a rough idea, or even just a problem you&apos;re
					trying to solve. We&apos;ll help you figure out the rest.
				</p>
			</div>
			<a href="#contact" className="btn on-dark">
				Request a Quote
			</a>
		</div>
	</section>
);

const Contact = () => (
	<section className="section" id="contact">
		<div className="container two-col">
			<div>
				<header className="section-header left">
					<h2>Request a Quote</h2>
					<p>
						Share a few details about your project and we&apos;ll follow up with
						pricing options and next steps.
					</p>
				</header>

				<form
					className="contact-form"
					onSubmit={(e) => {
						e.preventDefault();
						alert(
							"This is a static demo. Hook this form up to your email or CRM."
						);
					}}
				>
					<div className="field-row">
						<div className="field">
							<label htmlFor="name">Name*</label>
							<input id="name" name="name" type="text" required />
						</div>
						<div className="field">
							<label htmlFor="company">Company</label>
							<input id="company" name="company" type="text" />
						</div>
					</div>

					<div className="field-row">
						<div className="field">
							<label htmlFor="email">Email*</label>
							<input id="email" name="email" type="email" required />
						</div>
						<div className="field">
							<label htmlFor="phone">Phone</label>
							<input id="phone" name="phone" type="tel" />
						</div>
					</div>

					<div className="field">
						<label htmlFor="service">What are you interested in?</label>
						<select id="service" name="service">
							<option>Direct Mail / EDDM</option>
							<option>Brochures / Flyers</option>
							<option>Large Format / Signage</option>
							<option>Labels / Industrial Printing</option>
							<option>Design Only</option>
							<option>Not Sure Yet</option>
						</select>
					</div>

					<div className="field">
						<label htmlFor="details">Project details</label>
						<textarea
							id="details"
							name="details"
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
					<h3>Contact &amp; Location</h3>
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
					<p className="small">
						Looking to send files? Ask us about our preferred file transfer
						method when you reach out.
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
				Oxford, MI. All rights reserved.
			</p>
			<p className="small">
				First Impressions is a full-service Marketing, Design &amp; Print firm
				specializing in Direct Mail, EDDM, Personalization, conventional and
				digital four-color printing, including large format printing.
			</p>
		</div>
	</footer>
);

export default App;
