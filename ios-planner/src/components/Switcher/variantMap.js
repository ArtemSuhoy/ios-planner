const VARIANT_MAP = {
  default: {
    primary: `
        background-color: #116bff;
        color: #fff;
      `,
    danger: `background-color: #fc4732;
             color: #fff;`,
    warning: `background-color: #ff9e04;
              color: #fff;`,

    light: `background-color: #fff;
            color: #424345;
    `,
  },

  active: {
    primary: `
        color: #116bff;
        background-color: #fff;
        `,

    danger: `
      color: #fc4732;
      background-color: #fff;
      `,
    warning: `
      color: #ff9e04;
      background-color:#fff`,

    light: `
      background-color: #424345;
      color: #fffffb;
      `,
  },
}

export default VARIANT_MAP
