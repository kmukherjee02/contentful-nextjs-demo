import { gsap } from "gsap";

const duration = 0.5

export const initMouseInCardAnimation = (cardSelector: string, iconSelector?: string) => {
	const tl = gsap.timeline({ defaults: { delay: 0 }});
	tl.to(
		cardSelector, 
		{
			y: -10,
			duration,
			ease: "sine.out"
		},
	);
	iconSelector && tl.to(
		iconSelector,
		{
			rotateY: 180,
			duration,
			ease: "sine.in"
		},
		`<-=${duration}`
	);
}

export const initMouseOutCardAnimation = (cardSelector: string, iconSelector?: string) => {
	const tl = gsap.timeline();
	tl.to(
		cardSelector, 
		{
			y: 0,
			duration,
			ease: "sine.out"
		},
	);
	iconSelector && tl.to(
		iconSelector,
		{
			rotateY: 0,
			duration,
			ease: "sine.in"
		},
		`<-=${duration}`
	);
}