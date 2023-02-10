import * as React from "react";
import { createRoot } from "react-dom/client";

import { App } from "src/core/app";

const rootId = "app";

const container = document.getElementById(rootId);

if (!container) {
    throw new Error(`Failed to get root element by id: ${rootId}`);
}

const root = createRoot(container);

root.render(<App />);
