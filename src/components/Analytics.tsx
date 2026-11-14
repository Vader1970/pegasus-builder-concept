import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { gaMeasurementId } from "@/lib/analytics";

/**
 * Loads GA4 once via the official Next.js third-parties integration.
 *
 * Page views, scrolls (90%), and outbound clicks come from GA4 Enhanced
 * Measurement — do not add a second gtag/GTM snippet or manual page_view
 * calls, or events will duplicate.
 *
 * No consent banner exists on this site; Consent Mode defaults deny ads
 * storage and allow analytics_storage. If a consent UI is added later,
 * update these defaults and call gtag('consent', 'update', …) from it.
 *
 * Never send enquiry form field values (name, email, message) to Analytics.
 */
export function Analytics() {
  const gaId = gaMeasurementId();
  if (!gaId) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
        `}
      </Script>
      <GoogleAnalytics gaId={gaId} />
    </>
  );
}
