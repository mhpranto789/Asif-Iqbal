/**
 * Central Configuration for Assets, Verified External URLs, and Contact Routing.
 * Edit this file to add approved photography, official social media handles,
 * or connect a production backend email API.
 */
export const assetConfig = {
  // Approved photography of Asif Iqbal:
  // When an approved high-res photograph is provided, set its path here (e.g., "/images/asif_iqbal.jpg").
  // If null or empty, the site displays a dignified typography-led composition with abstract shapes
  // and an architectural monogram frame. Never displays a synthetic face or broken image.
  heroPortraitUrl: null as string | null,
  secondaryPortraitUrl: null as string | null,

  // Production Domain for Canonical URLs & Social Sharing
  productionDomain: "https://asifiqbal.com",

  // Outbound Verified Links for Ventures (Leave empty if pending official verification)
  ventureLinks: {
    achieveConsulting: "", // e.g. "https://achievebd.com"
    acis: "",
    asix: "https://asixbd.com", // approved artisan craft venture
    gaanChill: "https://gaanchill.com", // GaanChill Music platform
  },

  // Approved Social Links (Only verified profiles)
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/asif-iqbal",
    youtube: "https://www.youtube.com/@GaanChillMusic",
    facebook: "",
    twitter: "",
  },

  // Contact Delivery Configuration
  // When an API endpoint is configured (e.g. "/api/contact"), the form will submit via POST.
  // Otherwise, the form runs in transparent Preview Mode with an interactive draft creator.
  contactEndpointUrl: "/api/contact",
  recipientEmail: "contact@asifiqbal.com",
};
