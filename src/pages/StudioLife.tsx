import React from "react";
import {
	Users,
	Trophy,
	Zap,
	Heart,
	Target,
	Lightbulb,
	User,
} from "lucide-react";
import { useNavigation } from "../App";

const teamMembers = [
	{
		name: "Sarah Connor",
		role: "CEO & Founder",
		img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
	},
	{
		name: "David Chen",
		role: "Creative Director",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
	},
	{
		name: "Elena Rodriguez",
		role: "Lead Engineer",
		img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
	},
	{
		name: "Marcus Johnson",
		role: "Art Director",
		img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
	},
	{
		name: "Emily Zhao",
		role: "Head of Marketing",
		img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
	},
	{
		name: "James Wilson",
		role: "Audio Director",
		img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
	},
	{
		name: "Aisha Patel",
		role: "Senior Producer",
		img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
	},
	{
		name: "Tom Baker",
		role: "Tech Lead",
		img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1964&auto=format&fit=crop",
	},
];

const values = [
	{
		icon: <Zap className="w-6 h-6" />,
		title: "Player First",
		desc: "Every decision starts with the player experience.",
	},
	{
		icon: <Heart className="w-6 h-6" />,
		title: "Inclusive Worlds",
		desc: "Gaming is for everyone. Our worlds reflect that.",
	},
	{
		icon: <Target className="w-6 h-6" />,
		title: "Excellence",
		desc: "We don't ship until it's ready. Period.",
	},
	{
		icon: <Lightbulb className="w-6 h-6" />,
		title: "Innovation",
		desc: "We take risks to push the medium forward.",
	},
];

export const StudioLife: React.FC = () => {
	const { navigate } = useNavigation();

	return (
		<div className="bg-studio-black">
			{/* Hero Section */}
			<section className="pt-32 pb-20 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-1/2 h-full bg-studio-accent/5 blur-3xl rounded-full transform translate-x-1/2"></div>
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-4">
							About Nebula
						</h4>
						<h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
							ARCHITECTS OF
							<br />
							THE IMPOSSIBLE
						</h1>
						<p className="text-xl text-studio-light font-sans leading-relaxed">
							We are a collective of dreamers, engineers, and
							storytellers dedicated to pushing the boundaries of
							interactive entertainment.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* 4-Image Staggered Asymmetrical Grid */}
						<div className="grid grid-cols-2 gap-4 md:gap-6 h-[500px] md:h-[600px] relative">
							{/* Column 1 */}
							<div className="flex flex-col gap-6 pt-12">
								{/* Img 1: Tall */}
								<div className="relative h-64 w-full overflow-hidden rounded-2xl group">
									<img
										src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										alt="Team"
									/>
								</div>
								{/* Img 2: Square */}
								<div className="relative h-40 w-4/5 ml-auto overflow-hidden rounded-2xl group">
									<img
										src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										alt="Meeting"
									/>
								</div>
							</div>

							{/* Column 2 */}
							<div className="flex flex-col gap-6">
								{/* Img 3: Small Landscape */}
								<div className="relative h-32 w-full overflow-hidden rounded-2xl group">
									<img
										src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										alt="Culture"
									/>
								</div>
								{/* Img 4: Tallest */}
								<div className="relative flex-1 w-full overflow-hidden rounded-2xl group shadow-2xl shadow-studio-accent/10">
									<img
										src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										alt="Office"
									/>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<h3 className="text-3xl font-display font-bold text-white">
								From Garage to Global
							</h3>
							<p className="text-studio-light leading-relaxed">
								Founded in 2010, Nebula Studios started with
								three friends and a shared vision. Today, we are
								a diverse team of 200+ creators working across
								three continents. Our journey has been defined
								by a relentless pursuit of quality and a refusal
								to compromise on our creative vision.
							</p>
							<p className="text-studio-light leading-relaxed">
								We believe in crunch-free development, unlimited
								creativity, and putting the player experience
								above all else. Our studio culture is built on
								trust, autonomy, and the shared joy of making
								things that matter.
							</p>

							<div className="pt-6 border-t border-white/5 mt-6">
								<p className="text-white font-bold italic border-l-4 border-studio-accent pl-4">
									"We don't just make games. We build the
									memories players will keep for a lifetime."
								</p>
								<div className="mt-2 pl-5 text-sm text-studio-light uppercase tracking-wider">
									- Sarah Connor, CEO
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="py-24 bg-studio-dark border-y border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-4xl font-display font-bold text-white mb-12 text-center uppercase">
						Our DNA
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((val, i) => (
							<div
								key={i}
								className="bg-studio-card p-8 rounded-xl border border-white/5 hover:border-studio-accent transition-colors group"
							>
								<div className="w-12 h-12 bg-studio-accent/10 rounded-lg flex items-center justify-center text-studio-accent mb-6 group-hover:bg-studio-accent group-hover:text-white transition-colors">
									{val.icon}
								</div>
								<h3 className="text-xl font-display font-bold text-white mb-3">
									{val.title}
								</h3>
								<p className="text-studio-light text-sm leading-relaxed">
									{val.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Leadership Team */}
			<section className="py-24 bg-studio-black">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex justify-between items-end mb-12">
						<div>
							<h4 className="text-studio-accent font-display font-bold tracking-widest uppercase mb-2">
								Leadership
							</h4>
							<h2 className="text-4xl font-display font-bold text-white">
								MEET THE TEAM
							</h2>
						</div>
						<button
							onClick={() => navigate("/careers")}
							className="hidden md:block border border-white/20 text-white px-6 py-2 rounded uppercase font-bold text-sm hover:bg-white hover:text-studio-black transition-all"
						>
							Join Us
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{teamMembers.map((member, i) => (
							<div key={i} className="group">
								<div className="relative overflow-hidden rounded-xl mb-4 bg-studio-card">
									<img
										src={member.img}
										className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
										alt={member.name}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-studio-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
										<div className="text-white">
											<div className="font-bold text-lg">
												{member.name}
											</div>
											<div className="text-studio-accent text-sm font-bold uppercase">
												{member.role}
											</div>
										</div>
									</div>
								</div>
								<div className="md:hidden">
									<h3 className="text-white font-bold text-lg">
										{member.name}
									</h3>
									<p className="text-studio-light text-sm">
										{member.role}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Timeline / History */}
			<section className="py-24 bg-studio-card relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 relative z-10">
					<h2 className="text-4xl font-display font-bold text-white mb-16 text-center uppercase">
						Our Journey
					</h2>

					<div className="relative">
						{/* Center Line (Desktop) / Left Line (Mobile) */}
						<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

						<div className="space-y-12">
							{/* Item 1 (Left) */}
							<div className="relative flex flex-col md:flex-row items-center justify-between">
								<div className="md:w-[calc(50%-3rem)] md:text-right pl-12 md:pl-0">
									<span className="text-studio-accent font-bold text-sm tracking-widest uppercase mb-1 block">
										2010
									</span>
									<h3 className="text-2xl font-bold text-white mb-2">
										The Beginning
									</h3>
									<p className="text-studio-light">
										Nebula Studios is founded in a small
										garage in Seattle by three industry
										veterans.
									</p>
								</div>
								<div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-studio-accent rounded-full border-4 border-studio-card top-1"></div>
								<div className="md:w-[calc(50%-3rem)] hidden md:block"></div>
							</div>

							{/* Item 2 (Right) */}
							<div className="relative flex flex-col md:flex-row items-center justify-between">
								<div className="md:w-[calc(50%-3rem)] hidden md:block"></div>
								<div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full border-4 border-studio-card top-1"></div>
								<div className="md:w-[calc(50%-3rem)] pl-12 md:pl-0">
									<span className="text-white font-bold text-sm tracking-widest uppercase mb-1 block">
										2014
									</span>
									<h3 className="text-2xl font-bold text-white mb-2">
										First Major Hit
									</h3>
									<p className="text-studio-light">
										Released "Starlight Drift", which sold 2
										million copies in its first week.
									</p>
								</div>
							</div>

							{/* Item 3 (Left) */}
							<div className="relative flex flex-col md:flex-row items-center justify-between">
								<div className="md:w-[calc(50%-3rem)] md:text-right pl-12 md:pl-0">
									<span className="text-white font-bold text-sm tracking-widest uppercase mb-1 block">
										2020
									</span>
									<h3 className="text-2xl font-bold text-white mb-2">
										Global Expansion
									</h3>
									<p className="text-studio-light">
										Opened offices in London and Tokyo to
										support 24/7 live service operations.
									</p>
								</div>
								<div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full border-4 border-studio-card top-1"></div>
								<div className="md:w-[calc(50%-3rem)] hidden md:block"></div>
							</div>

							{/* Item 4 (Right) */}
							<div className="relative flex flex-col md:flex-row items-center justify-between">
								<div className="md:w-[calc(50%-3rem)] hidden md:block"></div>
								<div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-studio-accent rounded-full border-4 border-studio-card top-1 animate-pulse"></div>
								<div className="md:w-[calc(50%-3rem)] pl-12 md:pl-0">
									<span className="text-studio-accent font-bold text-sm tracking-widest uppercase mb-1 block">
										2024
									</span>
									<h3 className="text-2xl font-bold text-white mb-2">
										Echoes of Eternity
									</h3>
									<p className="text-studio-light">
										Our most ambitious title to date wins
										"Best Art Direction" at The Game Awards.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
