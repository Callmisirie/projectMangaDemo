import {
  discordBlack,
  facebook,
  scrollDocumentStory,
  magicWand,
  palette,
  graphicStyle,
  instagram,
  notification2,
  notification3,
  notification4,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Manga",
    url: "/manga",
  },
];

export const heroIcons = [
  scrollDocumentStory,
  magicWand,
  palette,
  graphicStyle,
];

export const notificationImages = [notification4, notification3, notification2];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
