import * as React from "react";
import { ReactElement } from "react";
import * as i18next from "i18next";

const Example = (): ReactElement => <h1>{i18next.t("core.title")}</h1>;

export { Example };
