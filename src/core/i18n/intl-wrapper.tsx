import { ReactElement, useEffect, useState } from "react";
import * as i18next from "i18next";

import { enTranslation } from "./messages/en-translation";

interface IntlWrapperProps {
    children: ReactElement;
}

const IntlWrapper = ({ children }: IntlWrapperProps): ReactElement | null => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        i18next
            .init({
                // TODO : Set language dynamically
                lng: "en",
                resources: {
                    // TODO : Load translations dynamically
                    en: { translation: enTranslation },
                },
            })
            .then(() => {
                setLoaded(true);
            })
            .catch(() => {
                // TODO : Handle error
            });
    }, []);

    // TODO : Add loading state
    return loaded ? children : null;
};

export { IntlWrapper };
