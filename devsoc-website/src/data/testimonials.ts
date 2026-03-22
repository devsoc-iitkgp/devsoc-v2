export interface Testimonial {
  name: string;
  person: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "HACKPORTAL",
    person: "ALEX NGUYEN",
    quote:
      "Being part of DevSoc's hackathon team transformed my approach to problem-solving. We shipped a real product in 24 hours.",
  },
  {
    name: "FINAL YEAR PROJECT",
    person: "PRIYA SHARMA",
    quote:
      "The mentorship program connected me with industry engineers. DevSoc shaped my entire career trajectory.",
  },
  {
    name: "OPEN SOURCE SPRINT",
    person: "JAMES O'BRIEN",
    quote:
      "I went from zero open-source contributions to 3 merged PRs in a semester. The workshops are genuinely excellent.",
  },
  {
    name: "WORKSHOP SERIES",
    person: "SARA KOWALSKI",
    quote:
      "The cloud computing bootcamp was hands-on and practical. I landed my internship partly because of skills I learned here.",
  },
];

export default testimonials;
