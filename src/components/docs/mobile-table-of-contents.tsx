import { Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import type { TocItem } from "../../lib/generateToc";

interface Props {
  toc: TocItem[];
  labels: {
    onThisPage: string;
    title?: string;
  };
}

const TableOfContents = ({ toc = [], labels }: Props) => {
  const [currentHeading, setCurrentHeading] = useState({
    slug: toc[0].slug,
    text: toc[0].text,
  });

  const onLinkClick = (e: any) => {
    setCurrentHeading({
      slug: e.currentTarget.getAttribute("href")!.replace("#", ""),
      text: e.currentTarget.textContent || "",
    });
  };

  const TableOfContentsItem = ({ heading }: { heading: TocItem }) => {
    const { depth, slug, text, children } = heading;
    return (
      <li>
        <a
          className={`block  px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary dark:hover:bg-background2 depth-${depth} ${
            currentHeading.slug === slug
              ? "bg-gray-100 text-foreground dark:bg-background2"
              : "text-para"
          }`.trim()}
          href={`#${slug}`}
          onClick={onLinkClick}
        >
          {text}
        </a>
        {children.length > 0 ? (
          <ul className="ml-3 text-xs">
            {children.map((heading) => (
              <TableOfContentsItem key={heading.slug} heading={heading} />
            ))}
          </ul>
        ) : null}
      </li>
    );
  };

  return (
    <>
      <ul>
        {toc.map((heading2) => (
          <TableOfContentsItem key={heading2.slug} heading={heading2} />
        ))}
      </ul>
    </>
  );
};

const MobileTableOfContents = ({ toc = [], labels }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center text-xs  text-para">
          {labels.onThisPage}
          <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute
        ${labels.title && labels?.title?.length > 19 ? "right-0" : "left-0"}
        
         z-10 mt-3 w-56 origin-top-right rounded-md bg-background2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:left-0 sm:mt-2`}
        >
          <div className="sidebar-scroll max-h-[500px] overflow-y-auto  py-1">
            <Menu.Item>
              {({ active }) => (
                <TableOfContents
                  toc={toc}
                  labels={{
                    onThisPage: "onThisPage",
                    title: labels.title,
                  }}
                />
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileTableOfContents;
