export interface SearchBox {
  title: string;
  inputPlaceHolder: string;
  buttonName: string;
  search: (text: string) => void;
}
