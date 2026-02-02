export const Schema = {
  "navbar": {
    "title": "Navbar",
    "type": "object",
    "description": "A Navigation Bar for a website",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Navbar",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "links": {
        "type": "array",
        "default": []
      }
    }
  },
  "card": {
    "title": "Card",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Card",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "id": {
        "type": "string",
        "default": null
      },
      "headline": {
        "type": "string",
        "default": null
      },
      "text": {
        "type": "string",
        "default": null
      },
      "imgSrc": {
        "type": "string",
        "default": null
      },
      "imgAlt": {
        "type": "string",
        "default": null
      },
      "icon": {
        "type": "string",
        "default": null
      },
      "chart": {
        "type": "string",
        "default": null
      },
      "code": {
        "type": "string",
        "default": null
      }
    }
  },
  "seo": {
    "title": "SEO",
    "type": "object",
    "description": "A head management component that dynamically injects SEO meta tags, Open Graph, and Twitter card data based on the provided `meta` properties.",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "SEO",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes.",
        "required": true
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "title": {
        "type": "string",
        "description": "The page or site title.",
        "default": "",
        "x-generator": "llm"
      },
      "author": {
        "type": "string",
        "description": "The author name for meta tags.",
        "default": null
      },
      "keywords": {
        "type": "string",
        "description": "Meta keywords",
        "default": null,
        "x-generator": "llm"
      },
      "description": {
        "type": "string",
        "description": "Short description for SEO and social previews.",
        "default": "A backpacker’s journal of slow travel, mountain trails, and offbeat adventures around the world. Tips, stories, and inspiration for life on the move.\n"
      },
      "image": {
        "type": "string",
        "format": "uri",
        "description": "URL of the preview image used in Open Graph and Twitter cards.",
        "x-generator": "vector",
        "default": ""
      },
      "iso_language": {
        "type": "string",
        "default": "en",
        "x-generator": "default"
      },
      "iso_country": {
        "type": "string",
        "default": "US",
        "x-generator": "default"
      },
      "card": {
        "type": "string",
        "enum": [
          "summary",
          "summary_large_image",
          "app",
          "player"
        ],
        "description": "The Twitter card type.",
        "default": "summary_large_image"
      },
      "url": {
        "type": "string",
        "format": "uri",
        "description": "The canonical URL of the page.",
        "default": ""
      },
      "type": {
        "type": "string",
        "description": "Open Graph type (e.g., website, article, profile).",
        "default": "website"
      },
      "social": {
        "type": "object",
        "default": {},
        "properties": {
          "twitter": {
            "type": "string",
            "description": "Twitter handle (with @) for attribution.",
            "default": ""
          }
        }
      },
      "robots": {
        "type": "string",
        "description": "Robots meta tag content.",
        "default": "index, follow"
      },
      "fbAppId": {
        "type": "string",
        "description": "Facebook App ID for Open Graph integration.",
        "default": ""
      },
      "latitude": {
        "type": "string",
        "description": "Optional latitude for geotagging.",
        "default": ""
      },
      "longitude": {
        "type": "string",
        "description": "Optional longitude for geotagging.",
        "default": ""
      },
      "icon": {
        "type": "object",
        "description": "Icon and favicon configuration.",
        "default": {},
        "properties": {
          "main": {
            "type": "string",
            "default": "/favicon.svg"
          },
          "legacy": {
            "type": "string",
            "default": "/favicon.ico"
          },
          "small": {
            "type": "string",
            "default": "/favicon.svg"
          },
          "large": {
            "type": "string",
            "default": "/favicon.svg"
          }
        }
      }
    }
  },
  "cardGrid": {
    "title": "CardGrid",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "CardGrid",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "headline": {
        "type": "string",
        "default": ""
      },
      "cards": {
        "type": "array",
        "default": "[]",
        "items": {
          "type": "object",
          "properties": {
            "headline": {
              "type": "string"
            },
            "subheadline": {
              "type": "string"
            },
            "text": {
              "type": "string"
            },
            "icon": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "quote": {
    "title": "Quote",
    "type": "object",
    "description": "A <blockquote>, using text and cite, with large quote icons",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Quote",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "text": {
        "type": "string",
        "default": ""
      },
      "cite": {
        "type": "string",
        "default": ""
      },
      "iconOpen": {
        "type": "string",
        "description": "Iconify icon identifier for opening quote"
      },
      "iconClose": {
        "type": "string",
        "description": "Iconify icon identifier for closing quote"
      }
    },
    "examples": [
      {
        "cite": "Ralph Waldo Emerson",
        "text": "The creation of a thousand forests is in one acorn."
      }
    ]
  },
  "pullQuote": {
    "title": "PullQuote",
    "type": "object",
    "description": "A Pullquote is for an internal source, a blockquote for external, see https://heydonworks.com/article/the-blockquote-element",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "PullQuote",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes.",
        "required": true
      },
      "block": {
        "description": "Whether this is a block component or not",
        "default": false,
        "type": "boolean"
      },
      "cite": {
        "type": "string",
        "default": ""
      },
      "text": {
        "type": "string",
        "default": ""
      }
    },
    "examples": [
      {
        "cite": "Fern Willow",
        "text": "Grow wild, stay grounded, and keep branching out."
      }
    ]
  },
  "socialButton": {
    "name": "SocialButton",
    "title": "Social Button",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "description": "Specify an id attribute for the component",
        "default": null
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "network": {
        "type": "string",
        "default": ""
      },
      "handle": {
        "type": "string",
        "default": ""
      },
      "icon": {
        "type": "string",
        "default": ""
      },
      "headline": {
        "type": "string",
        "description": "A header for this component"
      },
      "subheadline": {
        "type": "string",
        "description": "A subheadline for this component"
      }
    }
  },
  "field": {
    "title": "Field",
    "type": "object",
    "description": "The **Field** component dynamically renders any HTML `<input>` or `<select>` element based on a simple schema, allowing you to build flexible, data-driven form fields without manually writing individual controls.",
    "required": [
      "type",
      "component",
      "block"
    ],
    "additionalProperties": false,
    "properties": {
      "component": {
        "type": "string",
        "default": "Field",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "type": {
        "type": "string",
        "description": "Base field type (e.g., text, number, date)"
      },
      "format": {
        "type": "string",
        "description": "Optional field format (e.g., email, uri, date-time)"
      },
      "name": {
        "type": "string",
        "description": "Form field name attribute"
      },
      "placeholder": {
        "type": "string",
        "description": "Placeholder text shown inside the input"
      },
      "label": {
        "type": "string",
        "description": "Human-readable label for the field"
      },
      "min": {
        "type": "number",
        "description": "Minimum allowed value (for numeric fields)"
      },
      "max": {
        "type": "number",
        "description": "Maximum allowed value (for numeric fields)"
      }
    }
  },
  "hero": {
    "title": "Hero",
    "type": "object",
    "description": "Hero component with headline, subheadline, call-to-actions, image, and styling options.\n",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "title": "Component Identifier",
        "type": "string",
        "default": "Hero",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "title": "Is a Block",
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "headline": {
        "title": "Headline",
        "type": "string",
        "default": "<What do you do?>",
        "description": "Primary headline text"
      },
      "subheadline": {
        "title": "Subheadline",
        "type": "string",
        "default": "<Why Does that matter?>",
        "description": "Secondary headline text"
      },
      "ctaPrimaryText": {
        "title": "CTA Primary Text",
        "type": "string",
        "default": "<Get Now>",
        "description": "Primary call to action text"
      },
      "ctaPrimaryAction": {
        "title": "CTA Primary Action",
        "type": "string",
        "default": "tel:123",
        "description": "Primary call to action"
      },
      "ctaPrimaryIcon": {
        "title": "CTA Primary Icon",
        "type": "string",
        "default": "",
        "description": "Iconify icon identifier"
      },
      "ctaSecondaryText": {
        "title": "CTA Secondary Text",
        "type": "string",
        "default": "<Convince me first>",
        "description": "Secondary call to action text. \"Convince Me First\""
      },
      "ctaSecondaryAction": {
        "title": "CTA Secondary Action",
        "type": "string",
        "default": "#about",
        "description": "Secondary call to action"
      },
      "ctaSecondaryIcon": {
        "title": "CTA Secondary Icon",
        "type": "string",
        "default": "",
        "description": "Iconify icon identifier"
      },
      "googleReviewLink": {
        "title": "Google Review Link",
        "type": "string",
        "default": "",
        "description": "Link to Google review"
      },
      "imgSrc": {
        "title": "Image Url",
        "type": "string",
        "default": "",
        "description": "Image source URL"
      },
      "imgAlt": {
        "title": "Image Description",
        "type": "string",
        "default": "",
        "description": "Image alt text for screenreaders."
      },
      "style": {
        "title": "Custom CSS",
        "type": "string",
        "default": "",
        "description": "Additional styles"
      },
      "imgOpacity": {
        "title": "Image Opacity",
        "type": "string",
        "default": ".4",
        "description": "Opacity for the image"
      },
      "backgroundColor": {
        "title": "Image Overlay Color",
        "type": "string",
        "default": "black",
        "description": "Background color"
      },
      "height": {
        "title": "Hero Height",
        "type": "string",
        "default": "70vh",
        "description": "Height of the component"
      }
    }
  },
  "fullPageTitle": {
    "title": "FullPageTitle",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "description": "Specify an id attribute for the component",
        "default": null
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "background": {
        "type": "string",
        "default": ""
      },
      "color": {
        "type": "string",
        "default": ""
      },
      "font": {
        "type": "string",
        "default": ""
      },
      "headline": {
        "type": "string",
        "description": "A header for this component"
      },
      "subheadline": {
        "type": "string",
        "description": "A subheadline for this component"
      }
    }
  },
  "openingHours": {
    "title": "OpeningHours",
    "type": "object",
    "description": "OpeningHours component accepts an object containing an array of daily opening-hour entries, each specifying the day of the week and optional opening and closing times.",
    "required": [
      "hours",
      "component",
      "block"
    ],
    "additionalProperties": false,
    "properties": {
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "component": {
        "type": "string",
        "default": "OpeningHours",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes.",
        "required": true
      },
      "hours": {
        "type": "array",
        "description": "A list of opening-hour entries for each day of the week.",
        "items": {
          "type": "object",
          "required": [
            "dayOfWeek"
          ],
          "additionalProperties": false,
          "properties": {
            "dayOfWeek": {
              "type": "string",
              "description": "The day of the week.",
              "enum": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ]
            },
            "opens": {
              "type": "string",
              "format": "time",
              "description": "Opening time in HH:MM format."
            },
            "closes": {
              "type": "string",
              "format": "time",
              "description": "Closing time in HH:MM format."
            }
          }
        }
      }
    }
  },
  "link": {
    "title": "Link",
    "type": "object",
    "required": [
      "text",
      "href",
      "component",
      "block"
    ],
    "additionalProperties": false,
    "properties": {
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "component": {
        "type": "string",
        "default": "Link",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "text": {
        "type": "string",
        "description": "The visible text of the link."
      },
      "href": {
        "type": "string",
        "format": "uri",
        "description": "The destination URL of the link."
      }
    }
  },
  "markdown": {
    "title": "Markdown",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Markdown",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "id": {
        "type": "string",
        "default": ""
      },
      "text": {
        "type": "string",
        "default": ""
      },
      "variables": {
        "type": "object",
        "description": "Variables to interplate the markdown.",
        "default": {}
      },
      "rules": {
        "enum": [
          "gfm",
          "inline"
        ],
        "description": "Which ruleset will be used for the markdown.",
        "default": "gfm"
      },
      "components": {
        "type": "array",
        "description": "What components to allow in the markdown."
      }
    }
  },
  "button": {
    "title": "Button",
    "$id": "./config.yaml",
    "type": "object",
    "description": "",
    "required": [
      "text",
      "component",
      "block"
    ],
    "additionalProperties": false,
    "properties": {
      "component": {
        "type": "string",
        "default": "Button",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "text": {
        "type": "string",
        "default": null
      },
      "action": {
        "type": "string",
        "default": null
      },
      "actionType": {
        "type": "string",
        "default": "button",
        "enum": [
          "button",
          "ahref"
        ]
      },
      "class": {
        "type": "string",
        "default": null
      }
    }
  },
  "footer": {
    "title": "Footer",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Footer",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "headline": {
        "type": "string",
        "default": ""
      }
    }
  },
  "style": {
    "title": "Style",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block",
      "font",
      "palette"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Style",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes.",
        "required": true
      },
      "id": {
        "type": "string",
        "description": "Specify an id attribute for the component",
        "default": null
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "font": {
        "description": "The Fonts for the site's theme",
        "type": "array",
        "additionalProperties": false,
        "default": [
          {
            "function": "heading",
            "family": "Inter",
            "line-height": "1.618rem"
          },
          {
            "function": "body",
            "family": "ClassicalHumanist",
            "line-height": "1.618rem"
          }
        ],
        "items": {
          "type": "object",
          "properties": {
            "function": {
              "type": "string"
            },
            "family": {
              "type": "string"
            },
            "line-height": {
              "type": "string"
            }
          }
        }
      },
      "palette": {
        "type": "object",
        "description": "Core color system for the site's theme.",
        "default": {
          "base": "fcfcfc",
          "surface": "#f1ebe1",
          "accent-1": "#111",
          "accent-2": "#222",
          "accent-3": "#333"
        },
        "properties": {
          "base": {
            "type": "string",
            "description": "The Base color is used as the primary background of the page",
            "default": "fcfcfc"
          },
          "surface": {
            "type": "string",
            "description": "The Surface color is used for background colors of large sections which are above the base",
            "default": "#f1ebe1"
          },
          "accent-1": {
            "type": "string",
            "description": "The Accent color is used for brand items, secondary buttons, and UI",
            "default": "#c0cfb2"
          },
          "accent-2": {
            "type": "string",
            "description": "This is used for more important, primary buttons, like a cta",
            "default": "#44624a"
          },
          "accent-3": {
            "type": "string",
            "description": "Additional Highlights and blends",
            "default": "#8ba888"
          }
        }
      },
      "revenge": {
        "type": "boolean",
        "description": "Include What Revenge css warnings.",
        "default": false
      }
    }
  },
  "accordion": {
    "title": "Accordion",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Accordion",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "id": {
        "type": "string",
        "default": ""
      },
      "summary": {
        "type": "string",
        "default": ""
      },
      "details": {
        "type": "string",
        "default": ""
      }
    }
  },
  "progress": {
    "title": "Progress",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "description": "Specify an id attribute for the component",
        "default": null
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "headline": {
        "type": "string",
        "description": "A header for this component"
      },
      "subheadline": {
        "type": "string",
        "description": "A subheadline for this component"
      }
    }
  },
  "mediaText": {
    "title": "MediaText",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "description": "Specify an id attribute for the component",
        "default": null
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "img": {
        "type": "string",
        "default": ""
      },
      "text": {
        "type": "string",
        "default": ""
      },
      "headline": {
        "type": "string",
        "description": "A header for this component"
      },
      "subheadline": {
        "type": "string",
        "description": "A subheadline for this component"
      },
      "action": {
        "type": "string",
        "default": ""
      },
      "actionText": {
        "type": "string",
        "default": ""
      },
      "actionIcon": {
        "type": "string",
        "default": ""
      }
    }
  },
  "meter": {
    "title": "Meter",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "description": "Specify an id attribute for the component",
        "default": null
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "headline": {
        "type": "string",
        "description": "A header for this component"
      },
      "subheadline": {
        "type": "string",
        "description": "A subheadline for this component"
      },
      "min": {
        "type": "integer",
        "description": "The lower numeric bound of the measured range. This must be less than the maximum value (max attribute), if specified. If unspecified, the minimum value is 0."
      },
      "max": {
        "type": "integer",
        "description": "The upper numeric bound of the measured range. This must be greater than the minimum value (min attribute), if specified. If unspecified, the maximum value is 1."
      },
      "low": {
        "type": "integer",
        "description": "The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (min attribute), and it also must be less than the high value and maximum value (high attribute and max attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the low value is equal to the minimum value."
      },
      "high": {
        "type": "integer",
        "description": "The lower numeric bound of the high end of the measured range. This must be less than the maximum value (max attribute), and it also must be greater than the low value and minimum value (low attribute and min attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the high value is equal to the maximum value."
      },
      "optimum": {
        "type": "integer",
        "description": "This attribute indicates the optimal numeric value. It must be within the range (as defined by the min attribute and max attribute). When used with the low attribute and high attribute, it gives an indication where along the range is considered preferable. For example, if it is between the min attribute and the low attribute, then the lower range is considered preferred. The browser may color the meter's bar differently depending on whether the value is less than or equal to the optimum value."
      },
      "value": {
        "type": "integer",
        "description": "The current numeric value. This must be between the minimum and maximum values (min attribute and max attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the min attribute and max attribute, the value is equal to the nearest end of the range."
      }
    }
  },
  "map": {
    "title": "Map",
    "type": "object",
    "description": "A Svelte Map component made with Leaflet",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Map",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "markers": {
        "type": "array",
        "default": [],
        "items": {
          "type": "object",
          "properties": {
            "latitude": {
              "type": "number",
              "default": 40.73061
            },
            "longitude": {
              "type": "number",
              "default": -73.935242
            }
          }
        }
      },
      "latitude": {
        "type": "number",
        "default": 40.73061
      },
      "longitude": {
        "type": "number",
        "default": -73.935242
      },
      "center": {
        "type": "object",
        "default": {
          "latitude": 40.73061,
          "longitude": -73.935242
        },
        "properties": {
          "latitude": {
            "type": "number",
            "default": 40.73061
          },
          "longitude": {
            "type": "number",
            "default": -73.935242
          }
        }
      },
      "zoom": {
        "type": "integer",
        "default": 12
      },
      "height": {
        "type": "number",
        "default": "20rem"
      },
      "width": {
        "type": "string",
        "default": "100%"
      },
      "sensitivity": {
        "type": "integer",
        "default": 500
      }
    }
  },
  "figure": {
    "title": "Figure",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Figure",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "id": {
        "type": "string",
        "default": null
      },
      "code": {
        "type": "string",
        "default": null
      },
      "imgSrc": {
        "type": "string",
        "default": null
      },
      "icon": {
        "type": "string",
        "default": null
      },
      "figcaption": {
        "type": "string",
        "default": ""
      }
    }
  },
  "review": {
    "title": "Review",
    "type": "object",
    "description": "Review component displays a user review with a title, reviewer name, date, rating (within minimum and maximum bounds), and the review body text.",
    "required": [
      "component",
      "block",
      "name",
      "date",
      "title",
      "body",
      "rating"
    ],
    "additionalProperties": false,
    "properties": {
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": false
      },
      "component": {
        "type": "string",
        "default": "Review",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes.",
        "required": true
      },
      "name": {
        "type": "string",
        "description": "Name of the reviewer."
      },
      "date": {
        "type": "string",
        "format": "date",
        "description": "Date of the review in ISO format."
      },
      "title": {
        "type": "string",
        "description": "Title of the review."
      },
      "body": {
        "type": "string",
        "description": "Text content of the review."
      },
      "rating": {
        "type": "number",
        "description": "Numeric rating given by the reviewer"
      }
    }
  },
  "column": {
    "title": "Column",
    "type": "object",
    "description": "",
    "additionalProperties": false,
    "required": [
      "component",
      "block"
    ],
    "properties": {
      "component": {
        "type": "string",
        "default": "Column",
        "description": "This specifies which component and schema is being used. It's mostly for internal purposes."
      },
      "block": {
        "type": "boolean",
        "description": "Whether this is a block component or not",
        "default": true
      },
      "background": {
        "type": "string",
        "default": ""
      },
      "text": {
        "type": "string",
        "default": ""
      },
      "heading": {
        "type": "string",
        "default": ""
      }
    }
  }
};
