import * as React from "react";
import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import { Example } from "src/modules/example";

const AppRoutes = (): ReactElement => (
    <Routes>
        <Route element={<Example />} path="/" />
    </Routes>
);

export { AppRoutes };
