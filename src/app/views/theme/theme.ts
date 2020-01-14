export interface Theme {
  name: string;
  properties: any;
}

export const orange: Theme = {
  name: "orange",
  properties: {
    "--foreground-default": "#ca8404",
    "--foreground-secondary": "#c58818",
    "--foreground-tertiary": "#d0a65a",
    "--foreground-quaternary": "#b7a27c",
    "--foreground-light": "#f9deae",

    "--background-default": "#ffa500",
    "--background-secondary": "#f9b73e",
    "--background-tertiary": "#f7c66c",
    "--background-light": "#f7e8cd",

    "--primary-default": "#c3881c",
    "--primary-dark": "#5a3c05",
    "--primary-light": "#f9c668",

    "--error-default": "#f7613e",
    "--error-dark": "#a03c25",
    "--error-light": "#f37788",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(199, 67, 36, 0.5)"
  }
};

export const yellow: Theme = {
  name: "yellow",
  properties: {
    "--foreground-default": "#efb919",
    "--foreground-secondary": "#e4bb3f",
    "--foreground-tertiary": "#b3994b",
    "--foreground-quaternary": "#d2b664",
    "--foreground-light": "#f9e9bb",

    "--background-default": "#fc3",
    "--background-secondary": "#f7cf59",
    "--background-tertiary": "#cead4c",
    "--background-light": "#f3dc98",

    "--primary-default": "#f7c225",
    "--primary-dark": "#7d600a",
    "--primary-light": "#ffe599",

    "--error-default": "#ec8024",
    "--error-dark": "#965014",
    "--error-light": "#f1ba8b",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(255, 204, 51, 0.5)"
  }
};

export const purple: Theme = {
  name: "purple",
  properties: {
    "--foreground-default": "#410056",
    "--foreground-secondary": "#5c1673",
    "--foreground-tertiary": "#6c5d71",
    "--foreground-quaternary": "#d9cbde",
    "--foreground-light": "#f3eff5",

    "--background-default": "#c89ce4",
    "--background-secondary": "#dfa8e4",
    "--background-tertiary": "#c27ac0",
    "--background-light": "#efc5f3",

    "--primary-default": "#9809f1",
    "--primary-dark": "#490673",
    "--primary-light": "#ddbaf3",

    "--error-default": "#e20a5a",
    "--error-dark": "#a2053f",
    "--error-light": "#f37788",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(245, 31, 60, 0.5)"
  }
};

export const light: Theme = {
  name: "light",
  properties: {
    "--foreground-default": "#08090A",
    "--foreground-secondary": "#41474D",
    "--foreground-tertiary": "#797C80",
    "--foreground-quaternary": "#F4FAFF",
    "--foreground-light": "#41474D",

    "--background-default": "#5C7D99",
    "--background-secondary": "#A3B9CC",
    "--background-tertiary": "#5C7D99",
    "--background-light": "#FFFFFF",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#B2FFE7",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(92, 125, 153, 0.5)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--foreground-default": "#5C7D99",
    "--foreground-secondary": "#A3B9CC",
    "--foreground-tertiary": "#F4FAFF",
    "--foreground-quaternary": "#E5E5E5",
    "--foreground-light": "#FFFFFF",

    "--background-default": "#797C80",
    "--background-secondary": "#41474D",
    "--background-tertiary": "#08090A",
    "--background-light": "#41474D",

    "--primary-default": "#5DFDCB",
    "--primary-dark": "#24B286",
    "--primary-light": "#ffffff",

    "--error-default": "#EF3E36",
    "--error-dark": "#800600",
    "--error-light": "#FFCECC",

    "--background-tertiary-shadow": "0 1px 3px 0 rgba(8, 9, 10, 0.5)"
  }
};