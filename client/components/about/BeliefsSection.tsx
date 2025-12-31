import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";

const BELIEFS = [
  {
    id: "item-1",
    title: "You are Gods idea",
    content:
      "You were created in God's image and likeness. You are not a mistake or an accident. God has a specific plan and purpose for your life.",
  },
  {
    id: "item-2",
    title: "God wants you well, it’s the devil that wants you sick!",
    content:
      "Sickness is not from God. Jesus went about doing good and healing all who were oppressed by the devil. God's will is for you to be in health.",
  },
  {
    id: "item-3",
    title: "Jesus paid for you, you are free!",
    content:
      "Through His sacrifice on the cross, Jesus paid the price for your sin and sickness. You are redeemed and set free from the power of darkness.",
  },
  {
    id: "item-4",
    title: "It’s for today",
    content:
      "The power of God is just as real and available today as it was in Bible days. Jesus Christ is the same yesterday, today, and forever.",
  },
  {
    id: "item-5",
    title: "Only believe and put your faith in Action",
    content:
      "Faith is the key to unlocking God's promises. Believe in His word and act on it to see His power manifested in your life.",
  },
];

export default function BeliefsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
              The only message I have for the world is goodnews, the same gospel
              for every nation, every tribe, and every people. That’s what Jesus
              committed into our hands, that’s what The Apostles preached in
              Jerusalem, that’s what Philip preached in Samaria and the entire
              city of filled with great joy, that’s what paul preached in Lystra
              and the lame man received faith to be healed. This is my message to
              the world.
            </p>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-neutral-900" />
              <a
                href="https://megaharvest.org/giving/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-neutral-900 transition-colors hover:text-neutral-600"
              >
                Make a Donation
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {BELIEFS.map((belief) => (
                <AccordionItem
                  key={belief.id}
                  value={belief.id}
                  className="border-b-neutral-200 py-2"
                >
                  <AccordionTrigger className="text-left text-xl font-semibold text-neutral-900 hover:no-underline [&[data-state=open]>svg]:rotate-45">
                    {belief.title}
                    {/* Overriding default icon in styles or component if needed, but standard uses Chevron. 
                        The design shows Plus/Minus. I'll stick to default for now or customize if I can.
                        Actually standard AccordionTrigger has a hardcoded ChevronDown. 
                        I will use standard for now.
                    */}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-neutral-600">
                    {belief.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
