import { createContext } from "solid-js";
import { type SetStoreFunction } from "solid-js/store";

// types for config (only color mode for now)
export type ColorMode = "light" | "dark" | "none";

export type Config = {
  colorMode: ColorMode;
};

// context for config store
export const ConfigContext = createContext<[config: Config, setConfig: SetStoreFunction<Config>]>();