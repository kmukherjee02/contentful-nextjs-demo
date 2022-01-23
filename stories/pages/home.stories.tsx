import Home, { getStaticProps } from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

const page = {
  name: "Contentful NextJs Demo",
  slug: "home",
  sections: [
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
        id: "5FJYDHVBtAnn5v0NgcU2ps",
        type: "Entry",
        createdAt: "2021-12-21T14:57:58.650Z",
        updatedAt: "2022-01-10T17:49:36.495Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 5,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdHeader",
          },
        },
        locale: "en-US",
      },
      fields: {
        name: "Home Page Header",
        logo: {
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
            id: "46yu5RuWKgY2iiKrDyphIH",
            type: "Asset",
            createdAt: "2021-12-21T14:56:18.074Z",
            updatedAt: "2021-12-21T14:56:18.074Z",
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
            title: "Techvio logo",
            description: "",
            file: {
              url: "//images.ctfassets.net/vokgf8kbpmof/46yu5RuWKgY2iiKrDyphIH/8a5670a8e60b750175e89a45e0db1dc3/logo.png",
              details: {
                size: 2005,
                image: {
                  width: 123,
                  height: 35,
                },
              },
              fileName: "logo.png",
              contentType: "image/png",
            },
          },
        },
        logoAlt: {
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
            id: "1LJbA5cifIgiBVyeVjt2s3",
            type: "Asset",
            createdAt: "2021-12-22T19:31:08.570Z",
            updatedAt: "2021-12-22T19:31:08.570Z",
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
            title: "Techvio-black",
            file: {
              url: "//images.ctfassets.net/vokgf8kbpmof/1LJbA5cifIgiBVyeVjt2s3/d9b0f58199df153f6dcc327135f920ab/logo-black.png",
              details: {
                size: 2206,
                image: {
                  width: 123,
                  height: 35,
                },
              },
              fileName: "logo-black.png",
              contentType: "image/png",
            },
          },
        },
        logoHyperlink: "/home",
        navigation: {
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
            id: "3MKN0MbZY4RSfGnthBxBMZ",
            type: "Entry",
            createdAt: "2021-12-21T14:51:37.217Z",
            updatedAt: "2021-12-22T21:26:39.409Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 3,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdNavigationMenu",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "Mega Menu",
            navigationItems: [
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
                  id: "4nSmi4QLF4xJKEPwRJDGHk",
                  type: "Entry",
                  createdAt: "2021-12-21T14:50:24.097Z",
                  updatedAt: "2022-01-04T17:41:23.883Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "Home ",
                  children: [
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
                        id: "45PPPENQhquhQkVjnHhXtR",
                        type: "Entry",
                        createdAt: "2021-12-21T14:49:43.522Z",
                        updatedAt: "2021-12-21T14:49:43.522Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Home 1",
                        slug: "home-1",
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
                        id: "2dCd2kOANuOxM3GNlYFC0p",
                        type: "Entry",
                        createdAt: "2021-12-21T14:49:51.587Z",
                        updatedAt: "2021-12-21T14:49:51.587Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Home 2",
                        slug: "home-2",
                      },
                    },
                  ],
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
                  id: "3AZZaKn6ac8BlqbUHmcYIt",
                  type: "Entry",
                  createdAt: "2021-12-21T14:44:18.848Z",
                  updatedAt: "2021-12-21T14:44:18.848Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "About Us",
                  slug: "about-us",
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
                  id: "6sCHyZBf8jRoKRTmKIsuW4",
                  type: "Entry",
                  createdAt: "2021-12-21T14:49:30.812Z",
                  updatedAt: "2021-12-21T14:49:30.812Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "Services",
                  children: [
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
                        id: "4S0hoKZdQvkrWMBkoISQ5y",
                        type: "Entry",
                        createdAt: "2021-12-21T14:48:42.950Z",
                        updatedAt: "2021-12-21T14:48:42.950Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Services",
                        slug: "services",
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
                        id: "1N9qloMYLmudTWykeRmKnH",
                        type: "Entry",
                        createdAt: "2021-12-21T14:48:58.635Z",
                        updatedAt: "2021-12-21T14:48:58.635Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Service Details",
                        slug: "service-details",
                      },
                    },
                  ],
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
                  id: "2T8EeiMz2mSQfOoSGBBzaz",
                  type: "Entry",
                  createdAt: "2021-12-21T14:47:55.420Z",
                  updatedAt: "2021-12-21T14:47:55.420Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "Projects",
                  children: [
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
                        id: "645jaDBhSfRX6Ag03hO1nU",
                        type: "Entry",
                        createdAt: "2021-12-21T14:47:04.668Z",
                        updatedAt: "2021-12-21T14:47:04.668Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Projects",
                        slug: "projects",
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
                        id: "2U2gA1KDdHElCDuXK79eeH",
                        type: "Entry",
                        createdAt: "2021-12-21T14:47:17.405Z",
                        updatedAt: "2021-12-21T14:47:17.405Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Projects Details",
                        slug: "projects-details",
                      },
                    },
                  ],
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
                  id: "6IMSK16rh6UzkBko3TLP5A",
                  type: "Entry",
                  createdAt: "2021-12-21T14:46:42.754Z",
                  updatedAt: "2022-01-14T15:02:26.871Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "Pages",
                  children: [
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
                        id: "3AZZaKn6ac8BlqbUHmcYIt",
                        type: "Entry",
                        createdAt: "2021-12-21T14:44:18.848Z",
                        updatedAt: "2021-12-21T14:44:18.848Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "About Us",
                        slug: "about-us",
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
                        id: "1KWgEDpMGhDXZg8SO7pniL",
                        type: "Entry",
                        createdAt: "2021-12-21T14:44:27.247Z",
                        updatedAt: "2021-12-21T14:44:27.247Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Team",
                        slug: "team",
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
                        id: "47aivrbwfEuSdTPUD3HEF9",
                        type: "Entry",
                        createdAt: "2022-01-14T15:02:14.979Z",
                        updatedAt: "2022-01-14T15:02:14.979Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Features",
                        slug: "features",
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
                        id: "5Ko7Gis7xrU9a7ioLg7Jqs",
                        type: "Entry",
                        createdAt: "2021-12-21T14:44:36.239Z",
                        updatedAt: "2021-12-21T14:44:36.239Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Pricing",
                        slug: "pricing",
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
                        id: "75TtkFQ8MhRSm9SfWf2Z6B",
                        type: "Entry",
                        createdAt: "2021-12-21T14:44:47.140Z",
                        updatedAt: "2021-12-21T14:44:47.140Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "404 Error",
                        slug: "404-error",
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
                        id: "2orShDSaGBPcl13UgioVtt",
                        type: "Entry",
                        createdAt: "2021-12-21T14:44:53.098Z",
                        updatedAt: "2021-12-21T14:44:53.098Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "FAQ",
                        slug: "faq",
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
                        id: "259c91DKSb9IM8xWvEicbZ",
                        type: "Entry",
                        createdAt: "2021-12-21T14:45:04.853Z",
                        updatedAt: "2021-12-21T14:45:04.853Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Coming Soon",
                        slug: "coming-soon",
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
                        id: "77Vdeg3HpekIwrJFSyDpAE",
                        type: "Entry",
                        createdAt: "2021-12-21T14:45:18.033Z",
                        updatedAt: "2021-12-21T14:45:18.033Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Terms & Conditions",
                        slug: "terms-and-conditions",
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
                        id: "2ClSm8pVTR3BKEKCvkLA2c",
                        type: "Entry",
                        createdAt: "2021-12-21T14:45:28.989Z",
                        updatedAt: "2021-12-21T14:45:28.989Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Privacy Policy",
                        slug: "privacy-policy",
                      },
                    },
                  ],
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
                  id: "6b56txqUAqgxazp66TXUt8",
                  type: "Entry",
                  createdAt: "2021-12-21T14:43:54.356Z",
                  updatedAt: "2021-12-21T14:48:20.240Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "Blog",
                  children: [
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
                        id: "l2Bqa2mn66Zqul36yC1Mu",
                        type: "Entry",
                        createdAt: "2021-12-21T14:43:08.783Z",
                        updatedAt: "2021-12-21T14:43:08.783Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Blog Grid",
                        slug: "blog-grid",
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
                        id: "9lOzWPYNlIjjvVdz3WhMu",
                        type: "Entry",
                        createdAt: "2021-12-21T14:43:26.010Z",
                        updatedAt: "2021-12-21T14:43:26.010Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Blog Right Side Bar",
                        slug: "blog-right-side-bar",
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
                        id: "6JMLltxC7yPm59nDtKU6aw",
                        type: "Entry",
                        createdAt: "2021-12-21T14:43:37.153Z",
                        updatedAt: "2021-12-21T14:43:37.153Z",
                        environment: {
                          sys: {
                            id: "master",
                            type: "Link",
                            linkType: "Environment",
                          },
                        },
                        revision: 1,
                        contentType: {
                          sys: {
                            type: "Link",
                            linkType: "ContentType",
                            id: "xdNavigationItem",
                          },
                        },
                        locale: "en-US",
                      },
                      fields: {
                        label: "Blog Details",
                        slug: "blog-details",
                      },
                    },
                  ],
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
                  id: "3HXYXhJqhB0zqW9htJ4n6X",
                  type: "Entry",
                  createdAt: "2021-12-21T14:48:31.959Z",
                  updatedAt: "2021-12-21T14:48:31.959Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdNavigationItem",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  label: "Contact",
                  slug: "contact",
                },
              },
            ],
          },
        },
        callToAction: {
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
            id: "2IgNiahRAefKkXYsIKvbjs",
            type: "Entry",
            createdAt: "2021-12-21T14:57:52.874Z",
            updatedAt: "2021-12-30T14:54:13.569Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 4,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdCallToAction",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "Get It Support",
            buttonText: "Get It Support",
            link: {
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
                id: "314WNY8NVsXEPDwgC0K0Sm",
                type: "Entry",
                createdAt: "2021-12-30T14:47:31.362Z",
                updatedAt: "2022-01-09T17:16:36.346Z",
                environment: {
                  sys: {
                    id: "master",
                    type: "Link",
                    linkType: "Environment",
                  },
                },
                revision: 10,
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
                linkName: "Get IT Support",
                label: "Get It Support",
                href: "mailto:sales@xtivia.com",
                target: "_blank",
                isExternal: false,
                displayStyle: "Button",
                theme: "primary",
              },
            },
            theme: "primary",
          },
        },
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
        id: "1EFlEgj7N7HZUcwyMi31i9",
        type: "Entry",
        createdAt: "2021-12-17T20:23:08.783Z",
        updatedAt: "2021-12-17T20:23:08.783Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 1,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdHeroImage",
          },
        },
        locale: "en-US",
      },
      fields: {
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
        id: "6BQQEnIWNuen7vMUrAYqeF",
        type: "Entry",
        createdAt: "2021-12-17T20:34:22.072Z",
        updatedAt: "2021-12-21T15:34:32.102Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 3,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdSetOfCard",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "IT Solutions",
        caption: "WHAT WE PROVIDE",
        cards: [
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
              id: "2akyyJFwcd8aDtqyH4YdHZ",
              type: "Entry",
              createdAt: "2021-12-17T20:24:16.709Z",
              updatedAt: "2021-12-20T23:19:48.335Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "IT Solution",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
              link: {
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
                  id: "5ckNZYZuDGekNtU9pz1MjF",
                  type: "Entry",
                  createdAt: "2021-12-17T20:23:56.235Z",
                  updatedAt: "2021-12-21T15:30:29.449Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
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
                  linkName: "IT Solution Read More",
                  label: "Read More",
                  href: "#",
                  target: "_blank",
                  isExternal: false,
                  displayStyle: "Link",
                  theme: "secondary",
                },
              },
              icon: {
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
                  id: "3BUjdxerlnbWJeL28ORt1T",
                  type: "Entry",
                  createdAt: "2021-12-20T23:14:45.515Z",
                  updatedAt: "2021-12-30T18:11:32.552Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdIcon",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Light Bulb Icon",
                  iconName: "LightBulbIcon",
                },
              },
              alignment: "left",
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
              id: "5lbb8qjjTy0IKuWIsoXJLS",
              type: "Entry",
              createdAt: "2021-12-17T20:24:57.207Z",
              updatedAt: "2021-12-30T18:19:34.598Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 3,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Web Development",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
              link: {
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
                  id: "5ckNZYZuDGekNtU9pz1MjF",
                  type: "Entry",
                  createdAt: "2021-12-17T20:23:56.235Z",
                  updatedAt: "2021-12-21T15:30:29.449Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
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
                  linkName: "IT Solution Read More",
                  label: "Read More",
                  href: "#",
                  target: "_blank",
                  isExternal: false,
                  displayStyle: "Link",
                  theme: "secondary",
                },
              },
              icon: {
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
                  id: "2J5aCDwMtMcI8XgAl6F4Jf",
                  type: "Entry",
                  createdAt: "2021-12-20T23:15:03.201Z",
                  updatedAt: "2021-12-30T18:18:10.482Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdIcon",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Terminal Icon",
                  iconName: "TerminalIcon",
                },
              },
              alignment: "left",
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
              id: "2GLaV629bDYXnbP0DDjJ1T",
              type: "Entry",
              createdAt: "2021-12-17T20:25:23.937Z",
              updatedAt: "2021-12-30T18:37:30.457Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 3,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Networking Services",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
              link: {
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
                  id: "5ckNZYZuDGekNtU9pz1MjF",
                  type: "Entry",
                  createdAt: "2021-12-17T20:23:56.235Z",
                  updatedAt: "2021-12-21T15:30:29.449Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
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
                  linkName: "IT Solution Read More",
                  label: "Read More",
                  href: "#",
                  target: "_blank",
                  isExternal: false,
                  displayStyle: "Link",
                  theme: "secondary",
                },
              },
              icon: {
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
                  id: "1IQ47mMYfBYW5dWkzaHvQL",
                  type: "Entry",
                  createdAt: "2021-12-20T23:15:24.765Z",
                  updatedAt: "2021-12-30T18:12:31.702Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdIcon",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Chip Icon",
                  iconName: "ChipIcon",
                },
              },
              alignment: "left",
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
              id: "2EtRTNmNHAnQK4Rwv0Zsst",
              type: "Entry",
              createdAt: "2021-12-17T20:25:58.581Z",
              updatedAt: "2021-12-20T23:18:50.362Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "SEO Optimization",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
              link: {
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
                  id: "5ckNZYZuDGekNtU9pz1MjF",
                  type: "Entry",
                  createdAt: "2021-12-17T20:23:56.235Z",
                  updatedAt: "2021-12-21T15:30:29.449Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
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
                  linkName: "IT Solution Read More",
                  label: "Read More",
                  href: "#",
                  target: "_blank",
                  isExternal: false,
                  displayStyle: "Link",
                  theme: "secondary",
                },
              },
              icon: {
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
                  id: "3jDslmCwV9y3PmasntKQuR",
                  type: "Entry",
                  createdAt: "2021-12-20T23:15:40.258Z",
                  updatedAt: "2021-12-30T18:12:56.889Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdIcon",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Cog Icon",
                  iconName: "Cog Icon",
                },
              },
              alignment: "left",
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
              id: "1XrXjxMJQviHMGpI3LRnVh",
              type: "Entry",
              createdAt: "2021-12-17T20:26:59.722Z",
              updatedAt: "2021-12-20T23:18:27.713Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "App Optimization",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
              link: {
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
                  id: "5ckNZYZuDGekNtU9pz1MjF",
                  type: "Entry",
                  createdAt: "2021-12-17T20:23:56.235Z",
                  updatedAt: "2021-12-21T15:30:29.449Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
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
                  linkName: "IT Solution Read More",
                  label: "Read More",
                  href: "#",
                  target: "_blank",
                  isExternal: false,
                  displayStyle: "Link",
                  theme: "secondary",
                },
              },
              icon: {
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
                  id: "3yagKjSbaeaRLTMoJUHeCD",
                  type: "Entry",
                  createdAt: "2021-12-20T23:16:02.655Z",
                  updatedAt: "2021-12-30T18:14:56.552Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdIcon",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Adjustments Icon",
                  iconName: "AdjustmentsIcon",
                },
              },
              alignment: "left",
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
              id: "DmoIRqV5ggPn5tYG54zcn",
              type: "Entry",
              createdAt: "2021-12-17T20:27:23.584Z",
              updatedAt: "2021-12-30T18:37:13.594Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 3,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Data Recovery",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua",
              link: {
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
                  id: "5ckNZYZuDGekNtU9pz1MjF",
                  type: "Entry",
                  createdAt: "2021-12-17T20:23:56.235Z",
                  updatedAt: "2021-12-21T15:30:29.449Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
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
                  linkName: "IT Solution Read More",
                  label: "Read More",
                  href: "#",
                  target: "_blank",
                  isExternal: false,
                  displayStyle: "Link",
                  theme: "secondary",
                },
              },
              icon: {
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
                  id: "3dfWH8GtBn2cn6exAg0IIC",
                  type: "Entry",
                  createdAt: "2021-12-20T23:16:26.427Z",
                  updatedAt: "2021-12-30T18:15:34.659Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdIcon",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Cloud Download Icon",
                  iconName: "CloudDownloadIcon",
                },
              },
              alignment: "left",
            },
          },
        ],
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
        id: "GEtm6gyFHO7BjYwc9pZNn",
        type: "Entry",
        createdAt: "2021-12-19T16:07:56.675Z",
        updatedAt: "2022-01-03T16:21:49.634Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 3,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdSectionWithImage",
          },
        },
        locale: "en-US",
      },
      fields: {
        title:
          "Providing your business with a quality IT service is our passion.",
        caption: "ABOUT OUR COMPANY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud",
        imageWithText: {
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
            id: "58Dq6iyBIoCj7XYczCFPVQ",
            type: "Entry",
            createdAt: "2021-12-17T21:23:11.082Z",
            updatedAt: "2022-01-03T20:05:13.216Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 3,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdImageWithText",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "About our Company",
            imageText: "27 YEARS EXPERIENCE",
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
                id: "5dXzXFa9CQPQO3u10G3J3U",
                type: "Asset",
                createdAt: "2021-12-17T21:22:33.091Z",
                updatedAt: "2021-12-17T21:22:33.091Z",
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
                title: "About Us",
                description: "",
                file: {
                  url: "//images.ctfassets.net/vokgf8kbpmof/5dXzXFa9CQPQO3u10G3J3U/5da6a446091477e017a8552c5bdf866d/about.jpg",
                  details: {
                    size: 99715,
                    image: {
                      width: 600,
                      height: 665,
                    },
                  },
                  fileName: "about.jpg",
                  contentType: "image/jpeg",
                },
              },
            },
            imageTextPosition: "bottom",
            imageTextAlignment: "left",
          },
        },
        imageWithTextAlignment: "right",
        detail: {
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
            id: "1zY7zA88Fu0ey9svTnKwsG",
            type: "Entry",
            createdAt: "2021-12-19T15:54:38.449Z",
            updatedAt: "2021-12-19T15:54:38.449Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdSetOfProgressBar",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "About Our Company Set",
            progressBars: [
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
                  id: "5t86qJ50vEb02kDYxGA7hh",
                  type: "Entry",
                  createdAt: "2021-12-17T21:00:26.131Z",
                  updatedAt: "2022-01-04T16:29:21.496Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdProgressBar",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  title: "IT Consulting",
                  progressAmount: 90,
                  progressUnit: "%",
                  theme: "primary",
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
                  id: "51PjbtnQARnzeDYuruRegi",
                  type: "Entry",
                  createdAt: "2021-12-17T21:01:16.614Z",
                  updatedAt: "2021-12-17T21:01:16.614Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdProgressBar",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  title: "Managed IT Service",
                  progressAmount: 80,
                  progressUnit: "%",
                  theme: "primary",
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
                  id: "3n5dGFe10O7PUyTHSje94M",
                  type: "Entry",
                  createdAt: "2021-12-17T21:00:52.263Z",
                  updatedAt: "2021-12-17T21:00:52.263Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdProgressBar",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  title: "Virtual Workstation",
                  progressAmount: 75,
                  progressUnit: "%",
                  theme: "primary",
                },
              },
            ],
          },
        },
        button: {
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
            id: "2lcYxRZgiGHLxGOnNxuEVV",
            type: "Entry",
            createdAt: "2021-12-19T16:07:47.787Z",
            updatedAt: "2022-01-03T17:31:35.469Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 2,
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
            linkName: "About Our Company Button",
            label: "Learn More",
            href: "#",
            target: "_self",
            isExternal: false,
            displayStyle: "Button",
            theme: "primary",
          },
        },
        theme: "primary",
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
        id: "1vpE2SqFLm6eDKtGSgPNll",
        type: "Entry",
        createdAt: "2021-12-19T16:09:00.987Z",
        updatedAt: "2022-01-03T16:22:27.786Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 3,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdSectionWithImage",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "Safeguard your brand with Cyber-Security & IT Solutions",
        caption: "WHY CHOOSE US?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageWithText: {
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
            id: "4BjzzSpEOu1VY0IOmmDFtz",
            type: "Entry",
            createdAt: "2021-12-19T15:28:47.508Z",
            updatedAt: "2021-12-19T15:28:47.508Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdImageWithText",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "Choose-1",
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
                id: "2Lrun0GD49Ny2lGd9FwYXZ",
                type: "Asset",
                createdAt: "2021-12-19T15:28:41.014Z",
                updatedAt: "2021-12-19T15:28:41.014Z",
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
                title: "choose-1",
                description: "",
                file: {
                  url: "//images.ctfassets.net/vokgf8kbpmof/2Lrun0GD49Ny2lGd9FwYXZ/cf5101d9d53e6765a3cd4eeae62fbe75/choose-1.jpg",
                  details: {
                    size: 55737,
                    image: {
                      width: 635,
                      height: 575,
                    },
                  },
                  fileName: "choose-1.jpg",
                  contentType: "image/jpeg",
                },
              },
            },
          },
        },
        imageWithTextAlignment: "left",
        detail: {
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
            id: "Yb8fQPK9QGUKTaz3rFoM9",
            type: "Entry",
            createdAt: "2021-12-19T16:00:15.383Z",
            updatedAt: "2021-12-19T16:00:15.383Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdSetOfCallToAction",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "Safeguard Section",
            setOfCta: [
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
                  id: "64jM8fu34Mrg0A4rr8W8Yc",
                  type: "Entry",
                  createdAt: "2021-12-19T15:25:16.117Z",
                  updatedAt: "2021-12-29T21:30:04.191Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Remote It Assitance",
                  buttonText: "Remote It Assistance",
                  theme: "tertiary",
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
                  id: "Te64C4INVWN4E5Cl4dJSC",
                  type: "Entry",
                  createdAt: "2021-12-19T15:25:38.909Z",
                  updatedAt: "2021-12-29T22:28:53.441Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Solving IT Problems",
                  buttonText: "Solving IT Problems",
                  theme: "tertiary",
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
                  id: "mLpeTbobBxCtXBUnIBDYD",
                  type: "Entry",
                  createdAt: "2021-12-19T15:26:07.453Z",
                  updatedAt: "2021-12-29T22:29:19.143Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Practice IT Management",
                  buttonText: "Practice IT Management",
                  theme: "tertiary",
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
                  id: "4POLuJXeMSGrcZgLkEyRGt",
                  type: "Entry",
                  createdAt: "2021-12-19T15:26:43.347Z",
                  updatedAt: "2021-12-29T22:29:28.064Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "IT Security Services",
                  buttonText: "IT Security Services",
                  theme: "tertiary",
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
                  id: "7kY0VOrCiqyrxfwNppu7pC",
                  type: "Entry",
                  createdAt: "2021-12-19T15:27:06.887Z",
                  updatedAt: "2021-12-29T22:29:35.080Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Managed IT Service",
                  buttonText: "Managed IT Service",
                  theme: "tertiary",
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
                  id: "4YGLtOH4oTaZFWv9PXEg5r",
                  type: "Entry",
                  createdAt: "2021-12-19T15:27:25.435Z",
                  updatedAt: "2021-12-29T22:29:44.501Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Cloud Services",
                  buttonText: "Cloud Services",
                  theme: "tertiary",
                },
              },
            ],
          },
        },
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
        id: "7mb9juQVDdIkoeinTgvQLS",
        type: "Entry",
        createdAt: "2021-12-19T16:09:57.244Z",
        updatedAt: "2021-12-23T16:02:36.107Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 4,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdSectionWithImage",
          },
        },
        locale: "en-US",
      },
      fields: {
        title:
          "Achieve digital transformation for your retail business services",
        caption: "WHY TRUST US ?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imageWithText: {
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
            id: "HyZqpOMl9HwKxnC2rboim",
            type: "Entry",
            createdAt: "2021-12-19T15:29:20.495Z",
            updatedAt: "2021-12-19T15:29:20.495Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdImageWithText",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "Choose-2",
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
                id: "4y99YJJPWmbwIx4bacTG7U",
                type: "Asset",
                createdAt: "2021-12-19T15:29:14.246Z",
                updatedAt: "2021-12-19T15:29:14.246Z",
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
                title: "choose-2",
                description: "",
                file: {
                  url: "//images.ctfassets.net/vokgf8kbpmof/4y99YJJPWmbwIx4bacTG7U/b0a101a8a5f1b4da342f60e3388085e2/choose-2.jpg",
                  details: {
                    size: 50573,
                    image: {
                      width: 635,
                      height: 575,
                    },
                  },
                  fileName: "choose-2.jpg",
                  contentType: "image/jpeg",
                },
              },
            },
          },
        },
        imageWithTextAlignment: "right",
        detail: {
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
            id: "7eX2kG1iupBrvCIk6OXKPY",
            type: "Entry",
            createdAt: "2021-12-19T16:01:25.344Z",
            updatedAt: "2021-12-19T16:01:25.344Z",
            environment: {
              sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
              },
            },
            revision: 1,
            contentType: {
              sys: {
                type: "Link",
                linkType: "ContentType",
                id: "xdSetOfCallToAction",
              },
            },
            locale: "en-US",
          },
          fields: {
            name: "Achieve Digital Transformation Section",
            setOfCta: [
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
                  id: "K9YWrNgj1fw74tkEqLFO5",
                  type: "Entry",
                  createdAt: "2021-12-19T15:32:07.013Z",
                  updatedAt: "2021-12-29T22:29:53.393Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Protect your Business ",
                  buttonText: "Protect your Business ",
                  theme: "tertiary",
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
                  id: "4kV4Cf50jWooZWsExk6FtZ",
                  type: "Entry",
                  createdAt: "2021-12-19T15:32:36.643Z",
                  updatedAt: "2021-12-29T22:30:01.861Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Network Security",
                  buttonText: "Network Security",
                  theme: "tertiary",
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
                  id: "30NOCli2RVTntAOkSbuHNZ",
                  type: "Entry",
                  createdAt: "2021-12-19T15:32:50.016Z",
                  updatedAt: "2021-12-29T22:30:13.331Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Data Security",
                  buttonText: "Data Security",
                  theme: "tertiary",
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
                  id: "1VNEjM6GEJwnQtVWyyDhVt",
                  type: "Entry",
                  createdAt: "2021-12-19T15:33:12.606Z",
                  updatedAt: "2021-12-29T22:30:20.090Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 2,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Small Business Owners",
                  buttonText: "Small Business Owners",
                  theme: "tertiary",
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
                  id: "2G1vaRIEitHxrL5lUbggXh",
                  type: "Entry",
                  createdAt: "2021-12-19T15:33:35.110Z",
                  updatedAt: "2021-12-29T22:30:26.687Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 3,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Running your Business",
                  buttonText: "Running your Business",
                  theme: "tertiary",
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
                  id: "4y4qZHItxa2uUjAPMIJT3T",
                  type: "Entry",
                  createdAt: "2021-12-19T15:34:21.466Z",
                  updatedAt: "2021-12-29T22:30:35.461Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 4,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdCallToAction",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Network Monitoring CTA",
                  buttonText: "Network Monitoring",
                  theme: "tertiary",
                },
              },
            ],
          },
        },
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
        id: "1RmwuIdETXIxDf67Fdw6Pf",
        type: "Entry",
        createdAt: "2021-12-19T21:20:50.257Z",
        updatedAt: "2021-12-19T21:20:50.257Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 1,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdBanner",
          },
        },
        locale: "en-US",
      },
      fields: {
        name: "Home Page Banner",
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
            id: "eD7qmb7AOupyNthxuFyAL",
            type: "Asset",
            createdAt: "2021-12-19T21:19:41.595Z",
            updatedAt: "2021-12-19T21:19:41.595Z",
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
            title: "banner-bg",
            description: "",
            file: {
              url: "//images.ctfassets.net/vokgf8kbpmof/eD7qmb7AOupyNthxuFyAL/591ba2c6c5506fe5ec9bdb9474e32e45/banner-bg.jpg",
              details: {
                size: 596566,
                image: {
                  width: 1920,
                  height: 1280,
                },
              },
              fileName: "banner-bg.jpg",
              contentType: "image/jpeg",
            },
          },
        },
        counter: [
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
              id: "18MIctV5c4lkrFxHhGESlw",
              type: "Entry",
              createdAt: "2021-12-19T21:17:50.510Z",
              updatedAt: "2021-12-20T23:21:34.987Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCounter",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Home Page Banner Helping Business",
              quantity: 27,
              suffix: "+",
              description: "Years Helping Business",
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
              id: "7zfNCsIGF4uDegEQTatk7b",
              type: "Entry",
              createdAt: "2021-12-19T21:18:21.274Z",
              updatedAt: "2021-12-20T23:22:03.738Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCounter",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Home Page Employee Counter",
              quantity: 500,
              suffix: "+",
              description: "Employees",
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
              id: "1b4H02fUqhqORS865onoqa",
              type: "Entry",
              createdAt: "2021-12-19T21:18:46.936Z",
              updatedAt: "2021-12-19T21:18:46.936Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCounter",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Home Complete Project",
              quantity: 30,
              suffix: "M",
              description: "Complete Project",
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
              id: "DkNSfbzJ100gydZjSyyQY",
              type: "Entry",
              createdAt: "2021-12-19T21:19:17.895Z",
              updatedAt: "2021-12-20T23:21:47.641Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCounter",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Home Page 5 Star Rating",
              quantity: 90,
              suffix: "K+",
              description: "5 Star Rating",
            },
          },
        ],
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
        id: "D3syRgywAUVgJsm3B7ekK",
        type: "Entry",
        createdAt: "2021-12-19T21:43:17.713Z",
        updatedAt: "2022-01-12T21:41:33.399Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 5,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdSetOfTestimonialCards",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "What Our Clients Say",
        caption: "Testimonial",
        testimonialCards: [
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
              id: "1qWMWIIHOrdcVVnPWxAjFK",
              type: "Entry",
              createdAt: "2021-12-19T21:40:58.082Z",
              updatedAt: "2021-12-19T21:40:58.082Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdTestimonialCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Saabir al-Obeid Testimonial",
              rating: 4.5,
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
              receivedFrom: {
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
                  id: "4sSj6FaD6xNE3cKwMYR65A",
                  type: "Entry",
                  createdAt: "2021-12-19T21:34:04.837Z",
                  updatedAt: "2021-12-19T21:34:04.837Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdPerson",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Saabit al-Obied",
                  designation: "Business Man",
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
                      id: "5dG4V9zfFPOsZraHGi5pxy",
                      type: "Asset",
                      createdAt: "2021-12-19T21:33:58.268Z",
                      updatedAt: "2021-12-19T21:33:58.268Z",
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
                      title: "Saabir al-Obeid",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/vokgf8kbpmof/5dG4V9zfFPOsZraHGi5pxy/940e0de594a468cd4e1934177b3648bc/testimonial-1.jpg",
                        details: {
                          size: 6675,
                          image: {
                            width: 80,
                            height: 80,
                          },
                        },
                        fileName: "testimonial-1.jpg",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                },
              },
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
              id: "5wHOoq2ih9xpvPqgtccBE7",
              type: "Entry",
              createdAt: "2021-12-19T21:42:05.577Z",
              updatedAt: "2021-12-19T21:42:05.577Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdTestimonialCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Zahra Burnett Testimonial  ",
              rating: 5,
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
              receivedFrom: {
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
                  id: "1cCQFO8TXPszLLdFbgPOf3",
                  type: "Entry",
                  createdAt: "2021-12-19T21:34:47.578Z",
                  updatedAt: "2021-12-19T21:34:47.578Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdPerson",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Zahra Burnett",
                  designation: "Business Man",
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
                      id: "3Har5sdl1TdqVwMVYbZ2o1",
                      type: "Asset",
                      createdAt: "2021-12-19T21:34:43.694Z",
                      updatedAt: "2021-12-19T21:34:43.694Z",
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
                      title: "testimonial-2",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/vokgf8kbpmof/3Har5sdl1TdqVwMVYbZ2o1/24979f51d7812d9ca98d5318acfed86b/testimonial-2.jpg",
                        details: {
                          size: 9750,
                          image: {
                            width: 80,
                            height: 80,
                          },
                        },
                        fileName: "testimonial-2.jpg",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                },
              },
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
              id: "8EQuw6ph7BPDxNOdwu4XR",
              type: "Entry",
              createdAt: "2021-12-19T21:42:34.520Z",
              updatedAt: "2022-01-05T20:59:29.493Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 12,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdTestimonialCard",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Stevie Wills Testimonial",
              rating: 4,
              testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.",
              receivedFrom: {
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
                  id: "7iDvFarSMGdInOcMZqHu3L",
                  type: "Entry",
                  createdAt: "2021-12-19T21:35:22.091Z",
                  updatedAt: "2021-12-19T21:35:22.091Z",
                  environment: {
                    sys: {
                      id: "master",
                      type: "Link",
                      linkType: "Environment",
                    },
                  },
                  revision: 1,
                  contentType: {
                    sys: {
                      type: "Link",
                      linkType: "ContentType",
                      id: "xdPerson",
                    },
                  },
                  locale: "en-US",
                },
                fields: {
                  name: "Stevie Wills",
                  designation: "Business Man",
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
                      id: "XwLSgjLlZMc4xPa1XHgjX",
                      type: "Asset",
                      createdAt: "2021-12-19T21:35:17.746Z",
                      updatedAt: "2021-12-19T21:35:17.746Z",
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
                      title: "testimonial-3",
                      description: "",
                      file: {
                        url: "//images.ctfassets.net/vokgf8kbpmof/XwLSgjLlZMc4xPa1XHgjX/79be38d92150a478cf082b0bc10eaf5b/testimonial-3.jpg",
                        details: {
                          size: 6121,
                          image: {
                            width: 80,
                            height: 80,
                          },
                        },
                        fileName: "testimonial-3.jpg",
                        contentType: "image/jpeg",
                      },
                    },
                  },
                },
              },
            },
          },
        ],
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
        id: "6FKlSZzdr7buJHJv6Ej2q3",
        type: "Entry",
        createdAt: "2021-12-20T23:23:48.445Z",
        updatedAt: "2021-12-21T15:06:58.968Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 2,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdSetOfTeamMembers",
          },
        },
        locale: "en-US",
      },
      fields: {
        title: "Team Member",
        caption: "Expert Team",
        teamMembers: [
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
              id: "uEcz0OsTNmkwvOJHnzalj",
              type: "Entry",
              createdAt: "2021-12-19T21:29:32.611Z",
              updatedAt: "2021-12-19T21:29:32.611Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdPerson",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Ava Farrington",
              designation: "Founder, ceo",
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
                  id: "1CnGToN8iNaVqCqCen7ONQ",
                  type: "Asset",
                  createdAt: "2021-12-19T21:29:01.927Z",
                  updatedAt: "2021-12-19T21:29:01.927Z",
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
                  title: "team-1",
                  description: "",
                  file: {
                    url: "//images.ctfassets.net/vokgf8kbpmof/1CnGToN8iNaVqCqCen7ONQ/83c665b7c23b90a7c6e2cfcce743b746/team-1.jpg",
                    details: {
                      size: 43088,
                      image: {
                        width: 400,
                        height: 450,
                      },
                    },
                    fileName: "team-1.jpg",
                    contentType: "image/jpeg",
                  },
                },
              },
              facebookProfileLink: "https://www.facebook.com",
              twitterProfileLink: "https://www.twitter.com",
              linkedInProfileLink: "https://www.linkedin.com",
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
              id: "XFw5xmTVMWb7PGx8anllM",
              type: "Entry",
              createdAt: "2021-12-19T21:30:37.478Z",
              updatedAt: "2021-12-19T21:30:37.478Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdPerson",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Kevin Haley",
              designation: "Co-founder, cto",
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
                  id: "6MKkuo4OE8qwgMT3jOVqfz",
                  type: "Asset",
                  createdAt: "2021-12-19T21:29:59.108Z",
                  updatedAt: "2021-12-19T21:29:59.108Z",
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
                  title: "team-2",
                  description: "",
                  file: {
                    url: "//images.ctfassets.net/vokgf8kbpmof/6MKkuo4OE8qwgMT3jOVqfz/52be544371e4bee36915b13b9280fe90/team-2.jpg",
                    details: {
                      size: 24194,
                      image: {
                        width: 400,
                        height: 450,
                      },
                    },
                    fileName: "team-2.jpg",
                    contentType: "image/jpeg",
                  },
                },
              },
              facebookProfileLink: "https://www.facebook.com",
              twitterProfileLink: "https://www.twitter.com",
              linkedInProfileLink: "https://www.linkedin.com",
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
              id: "4GxF9gNuuH0gfDMxQwWzTi",
              type: "Entry",
              createdAt: "2021-12-19T21:31:16.642Z",
              updatedAt: "2022-01-11T22:41:54.255Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdPerson",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Alishia Fulton",
              designation: "Chief Creative officer",
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
                  id: "7yDnbpA1bvbuCiAkXEl0PR",
                  type: "Asset",
                  createdAt: "2021-12-19T21:31:08.606Z",
                  updatedAt: "2021-12-19T21:31:08.606Z",
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
                  title: "team-3",
                  description: "",
                  file: {
                    url: "//images.ctfassets.net/vokgf8kbpmof/7yDnbpA1bvbuCiAkXEl0PR/e92d644008233a09c7fced90045b728f/team-3.jpg",
                    details: {
                      size: 21779,
                      image: {
                        width: 400,
                        height: 450,
                      },
                    },
                    fileName: "team-3.jpg",
                    contentType: "image/jpeg",
                  },
                },
              },
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
              id: "40dFU6K0vCQzsF7aiYKarq",
              type: "Entry",
              createdAt: "2021-12-19T21:34:10.847Z",
              updatedAt: "2021-12-19T21:34:10.847Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdPerson",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Lucas Martinez",
              designation: "Project Manager",
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
                  id: "7qF4TpMLBc7qdQ7uJcjrWz",
                  type: "Asset",
                  createdAt: "2021-12-19T21:31:44.065Z",
                  updatedAt: "2021-12-19T21:31:44.065Z",
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
                  title: "team-4",
                  description: "",
                  file: {
                    url: "//images.ctfassets.net/vokgf8kbpmof/7qF4TpMLBc7qdQ7uJcjrWz/6791e554ee61c4db4b5fe7ecd7ea709a/team-4.jpg",
                    details: {
                      size: 22180,
                      image: {
                        width: 400,
                        height: 450,
                      },
                    },
                    fileName: "team-4.jpg",
                    contentType: "image/jpeg",
                  },
                },
              },
            },
          },
        ],
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
        id: "76FPNeDq1O3iZ61x0OdB7L",
        type: "Entry",
        createdAt: "2021-12-19T21:52:32.382Z",
        updatedAt: "2022-01-09T17:04:50.201Z",
        environment: {
          sys: {
            id: "master",
            type: "Link",
            linkType: "Environment",
          },
        },
        revision: 3,
        contentType: {
          sys: {
            type: "Link",
            linkType: "ContentType",
            id: "xdBanner",
          },
        },
        locale: "en-US",
      },
      fields: {
        name: "Home Page Banner 2",
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
            id: "eD7qmb7AOupyNthxuFyAL",
            type: "Asset",
            createdAt: "2021-12-19T21:19:41.595Z",
            updatedAt: "2021-12-19T21:19:41.595Z",
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
            title: "banner-bg",
            description: "",
            file: {
              url: "//images.ctfassets.net/vokgf8kbpmof/eD7qmb7AOupyNthxuFyAL/591ba2c6c5506fe5ec9bdb9474e32e45/banner-bg.jpg",
              details: {
                size: 596566,
                image: {
                  width: 1920,
                  height: 1280,
                },
              },
              fileName: "banner-bg.jpg",
              contentType: "image/jpeg",
            },
          },
        },
        description: {
          nodeType: "document",
          data: {},
          content: [
            {
              nodeType: "heading-6",
              content: [
                {
                  nodeType: "text",
                  value: "Want to work with us? ",
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
            {
              nodeType: "heading-2",
              content: [
                {
                  nodeType: "text",
                  value: "Digitally transform and grow your business!",
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "text",
                  value:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur voluptatem accusantium doloremque adipiscing elit.",
                  marks: [],
                  data: {},
                },
              ],
              data: {},
            },
          ],
        },
        cta: [
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
              id: "6vRkM31wes0K1FyvhWWz1t",
              type: "Entry",
              createdAt: "2021-12-19T21:53:02.786Z",
              updatedAt: "2021-12-19T21:53:02.786Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCallToAction",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Call Now CTA",
              buttonText: "Call Now",
              theme: "primary",
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
              id: "3KMskmAdh7Fl0awbPd7UC8",
              type: "Entry",
              createdAt: "2021-12-19T21:53:28.903Z",
              updatedAt: "2022-01-09T17:04:44.755Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "xdCallToAction",
                },
              },
              locale: "en-US",
            },
            fields: {
              name: "Contact US CTA",
              buttonText: "Contact Us",
              link: {
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
              theme: "secondary",
            },
          },
        ],
      },
    },
  ],
};

export const HomePage = (args) => {
  return <Home {...{ ...args, page }} />;
};
HomePage.loaders = [
  async () => {
    const staticProps = await getStaticProps({});
    console.log("loaded props", { props: (staticProps as any).props });
    return {
      thisIs: "a",
    };
  },
];
