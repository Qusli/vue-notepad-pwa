import { createI18n } from "vue-i18n";

import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "ru",
    fallbackLocale: "ru",
    availableLocales: ["ru", "en"],
    messages: messages,
  });

export default i18n;