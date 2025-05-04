export type Directive = {
  cargo: string;
  nombre: string;
};

export interface DirectivesData {
  consejoDirectivo: Directive[];
  consejeros: Directive[];
  consejerosSuplentes: Directive[];
  sindicos: Directive[];
}
