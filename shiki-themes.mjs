// Custom Shiki themes matching the design system's syntax palette
// (grilling/design-handoff tokens/colors.css), with colors adjusted
// where needed to meet WCAG AA contrast on the code background.

const scopes = (colors) => [
  {
    scope: ["comment", "punctuation.definition.comment"],
    settings: { foreground: colors.comment, fontStyle: "italic" },
  },
  {
    scope: ["string", "string.quoted", "string.template"],
    settings: { foreground: colors.string },
  },
  {
    scope: [
      "constant.numeric",
      "constant.language",
      "constant.character.escape",
      "entity.other.attribute-name",
    ],
    settings: { foreground: colors.number },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "keyword.operator.new",
      "storage.type",
      "storage.modifier",
      "variable.language",
    ],
    settings: { foreground: colors.keyword },
  },
  {
    scope: [
      "entity.name.function",
      "support.function",
      "meta.function-call entity.name.function",
    ],
    settings: { foreground: colors.function },
  },
  {
    scope: [
      "entity.name.tag",
      "entity.name.type",
      "support.type",
      "support.class",
    ],
    settings: { foreground: colors.keyword },
  },
  {
    scope: ["keyword.operator", "punctuation", "meta.brace"],
    settings: { foreground: colors.punct },
  },
];

export const editorialLight = {
  name: "editorial-light",
  type: "light",
  colors: {
    "editor.background": "#F7F8F5",
    "editor.foreground": "#2B2F36",
  },
  tokenColors: [
    { settings: { foreground: "#2B2F36" } },
    ...scopes({
      comment: "#6E747C",
      string: "#4E7A3E",
      number: "#8F4A22",
      keyword: "#245C9B",
      function: "#6A4A9C",
      punct: "#57606A",
    }),
  ],
};

export const editorialDark = {
  name: "editorial-dark",
  type: "dark",
  colors: {
    "editor.background": "#12161C",
    "editor.foreground": "#D4D8DE",
  },
  tokenColors: [
    { settings: { foreground: "#D4D8DE" } },
    ...scopes({
      comment: "#8A9099",
      string: "#8FBF7A",
      number: "#E0A76B",
      keyword: "#7FB2E6",
      function: "#B396DE",
      punct: "#8A9099",
    }),
  ],
};
