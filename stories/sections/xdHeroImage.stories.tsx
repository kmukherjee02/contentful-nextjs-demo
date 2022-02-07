import XDHeroImage from "@components/contentTypes/xdHeroImage";

const entry = {
  title: "IT Solutions & Business Services Company",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.",
  image: {
    metadata: {
      tags: [],
    },
    sys: {
      space: {
        sys: {
          type: "Link",
          linkType: "Space",
          id: "vokgf8kbpmof",
        },
      },
      id: "2qvauZT9Og6B4zUJBmQPvT",
      type: "Asset",
      createdAt: "2021-12-17T19:50:43.178Z",
      updatedAt: "2021-12-17T19:50:43.178Z",
      environment: {
        sys: {
          id: "master",
          type: "Link",
          linkType: "Environment",
        },
      },
      revision: 1,
      locale: "en-US",
    },
    fields: {
      title: "Home Font",
      description: "",
      file: {
        url: "//images.ctfassets.net/vokgf8kbpmof/2qvauZT9Og6B4zUJBmQPvT/c259832adfffcf8493f744cf46f3e7b2/home-font.png",
        details: {
          size: 52880,
          image: {
            width: 600,
            height: 593,
          },
        },
        fileName: "home-font.png",
        contentType: "image/png",
      },
    },
  },
  buttons: [
    {
      metadata: {
        tags: [],
      },
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "vokgf8kbpmof",
          },
        },
        id: "7q3ZjpIuSQNfluEiX3Fx0n",
        type: "Entry",
        createdAt: "2021-12-17T19:52:41.743Z",
        updatedAt: "2022-01-09T16:38:01.909Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 8,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdLink",
          },
        },
        locale: "en-US",
      },
      fields: {
        linkName: "Hero Image About Us",
        label: "About Us",
        href: "about-us",
        target: "_blank",
        isExternal: false,
        displayStyle: "Button",
        theme: "secondary",
      },
    },
    {
      metadata: {
        tags: [],
      },
      sys: {
        space: {
          sys: {
            type: "Link",
            linkType: "Space",
            id: "vokgf8kbpmof",
          },
        },
        id: "5dNZ9vlQcuhAI66NIryQbI",
        type: "Entry",
        createdAt: "2021-12-17T19:59:27.788Z",
        updatedAt: "2022-01-09T16:38:13.735Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 7,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdLink",
          },
        },
        locale: "en-US",
      },
      fields: {
        linkName: "Hero Image Contact Us",
        label: "Contact Us",
        href: "contact",
        target: "_self",
        isExternal: false,
        displayStyle: "Button",
        theme: "primary",
      },
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Sections/02 Hero Image",
  component: "HeroImage",
};

export const xdHeaderSection = (args) => (
  <div style={{ backgroundColor: "#292C86" }}>
    <XDHeroImage {...args} entry={entry} />
  </div>
);
