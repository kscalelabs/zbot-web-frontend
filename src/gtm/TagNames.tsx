export const GTMTagNames = {
  NAV_LOGO_HOME: "nav_logo_home_btn_click",
  NAV_DISCORD: "nav_discord_btn_click",
  NAV_DOCS: "nav_docs_btn_click",

  NAV_CTA_PREORDER_BTN: "nav_preorder_btn_click",
  HEADER_CTA_PREORDER_BTN: "header_preorder_btn_click",
};

export const GTMTags = (eventName: string, label: string, action: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    category: "User Interaction",
    action: action, // Use the action parameter passed to the function
    label: label,
  });
};
