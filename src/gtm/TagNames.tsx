export const GTMTagNames = {
  NAV_LOGO_HOME: "nav_logo_home",
  NAV_DISCORD: "nav_discord",
  NAV_DOCS: "nav_docs",

  NAV_CTA_PREORDER_BTN: "nav_preorder",
  HEADER_CTA_PREORDER_BTN: "header_preorder",
};

export const GTMActions = {
  CLICK: "Click",
  HOVER: "Hover",
  DRAG: "Drag",
};

export const GTMEvents = {
  BTN_CLICK: "btn_click",
  BTN_HOVER: "btn_hover",
  NAV_BTN_CLICK: "nav_btn_click",
  NAV_BTN_HOVER: "nav_btn_hover",
};

export const GTMTags = (eventName: string, label: string, action: string) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    category: "User Interaction",
    action: action,
    label: label,
  });
};
