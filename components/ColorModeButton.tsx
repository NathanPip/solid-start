import { createSignal, Show, useContext } from "solid-js";
import { ConfigContext } from "./ConfigContext";

export function ColorModeButton() {

    const [config, setConfig] = useContext(ConfigContext)
    const [count, setCount] = createSignal(1);

    return (<>
        <button onClick={(e) => setCount(count() + 1)}>{count()}</button>
        <button
          type="button"
          aria-label={`Use ${config.colorMode === "dark" ? "light" : "dark"} mode`}
          onClick={() => {
            setConfig((cfg) => ({
              ...cfg,
              mode: config.colorMode === "dark" ? "light" : "dark",
            }));
            console.log("clicked", config.colorMode)
          }}
        >
          <Show
            when={config.colorMode === "dark"}
            fallback={<p class="w-6 h-6">Dark</p>}
          >
            <p class="w-6 h-6">Light</p>
          </Show>
        </button>
        </>
    )
}