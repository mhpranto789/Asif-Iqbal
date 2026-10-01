/**
 * Central Configuration for Assets, Verified External URLs, and Contact Routing.
 * Edit this file to add approved photography, official social media handles,
 * or connect a production backend email API.
 */
export const assetConfig = {
  // Approved photography of Asif Iqbal (set when official portraits are provided):
  heroPortraitUrl: null as string | null,
  secondaryPortraitUrl: null as string | null,
  heroVideoUrl: "/videos/asif-hero.mp4",
  // Official Hero YouTube Video Link & ID
  heroYouTubeUrl: "https://www.youtube.com/watch?v=_IllSacStyc",
  heroYouTubeId: "_IllSacStyc",
  // Google Drive Media Resource Folder
  mediaDriveFolderUrl: "https://drive.google.com/drive/folders/1vjm9uBb4IMYhtgUeLa1ifDIY7OrSYD8N",

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
  contactEndpointUrl: "/api/contact",
  recipientEmail: "contact@asifiqbal.com",
};
