import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof messages

// we need to add option to change language dynamically,
// so we need improve this block in future
const i18n = createI18n<[MessageSchema], 'en' | 'fa'>({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
});

export default i18n;
