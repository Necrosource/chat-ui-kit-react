import type {ReactElement} from "react";
import type {ChatComponentPropsRef} from "../../types";

export interface SearchProps {
  id?:string;
  placeholder?:string;
  value?:string;
  onChange?:(value:string) => void;
  onClearClick?:() => void;
  disabled?:boolean;
}

export declare const Search: (props:ChatComponentPropsRef<SearchProps,"div">) => ReactElement;

export default Search;