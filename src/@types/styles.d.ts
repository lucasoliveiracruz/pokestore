import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;

      white: string;
      red: string;
      success: string;

      gray_dark: string;
      gray_light: string;

      inputs: string;
      background: string;
      header: string;
      shape: string;
    };
    fonts: {
      medium: string;
      regular: string;
    };
  }
}
