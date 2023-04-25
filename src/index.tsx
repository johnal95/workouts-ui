import * as React from "react";
import { createRoot } from "react-dom/client";

import { App } from "src/core/app";

const ROOT_ID = "app";

const container = document.getElementById(ROOT_ID);

if (!container) {
    throw new Error(`Failed to get root element by id: ${ROOT_ID}`);
}

const root = createRoot(container);

root.render(<App />);
