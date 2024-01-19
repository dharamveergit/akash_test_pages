import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQs {
  title: string;
  description: string;
}

export function FAQ({ faqs }: { faqs: FAQs[] }) {
  const [value, setValue] = React.useState("");

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={() => setValue("")}
      className="w-full md:min-h-[460px]"
    >
      {faqs.map((faq: any, index: number) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className=" border-b    py-3  md:py-10"
        >
          <AccordionTrigger plus className="flex cursor-pointer no-underline ">
            <span className="flex h-full w-full">
              <p className="text-start  text-base  font-bold leading-[24px] text-foreground md:text-lg md:leading-[30px] lg:text-xl">
                {faq.title}
              </p>
            </span>
          </AccordionTrigger>

          <AccordionContent className="mt-4  md:mt-6">
            <ReactMarkdown className="prose:font-normal prose:leading-[30px] prose max-w-none prose-p:text-sm  prose-a:text-primary md:prose-p:text-lg ">
              {faq.description}
            </ReactMarkdown>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
