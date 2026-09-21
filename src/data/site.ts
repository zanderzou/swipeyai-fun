export const site = {
  name: "Swipey AI Guide",
  domain: "swipeyai.fun",
  url: "https://swipeyai.fun",
  description: "An independent Swipey AI guide to AI girlfriend creation, chat, voice calls, images, video, the discovery feed, Fanclub, privacy, pricing, and alternatives.",
  author: "Swipey AI Guide editorial team",
  officialUrl: "https://swipey.ai/",
};
export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-US", { year:"numeric", month:"long", day:"numeric", timeZone:"UTC" }).format(date);
export const toIsoDate = (date: Date) => date.toISOString().slice(0,10);
