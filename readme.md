# GDSC USK Links Site

!["Logo"](public/logo.png)

## About

This projects is a simple website that contains links to the GDSC USK social media accounts and other useful links.

## How to run

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Open `localhost:5173` in your browser

## How to use

To use this site on your own, you need to change the `links.json` file in the [data](./data/links.json) folder. The file contains an array of objects, each object represents a link. The object has the following properties:

- `groupName`: The name of the group that the link belongs to
- `links`: An array of objects, each object represents a link. The object has the following properties:
  - `icon`: The icon that you want to use for the link.
  - `title`: The title of the link.
  - `url`: The url of the link.

Here is an example of the `links.json` file:

```json
[
  {
    "groupName": "Group Name - 1",
    "links": [
      {
        "icon": "💻",
        "title": "Your Link Title",
        "url": "https://your-link-url.com"
      },
      {
        "icon": "📚",
        "title": "Your Link Title - 2",
        "url": "https://your-link-url-2.com"
      }
    ]
  },
  {
    "groupName": "Group Name - 2",
    "links": [
      {
        "icon": "💻",
        "title": "Your Link Title",
        "url": "https://your-link-url.com"
      },
      {
        "icon": "📚",
        "title": "Your Link Title - 2",
        "url": "https://your-link-url-2.com"
      }
    ]
  }
]
```

## Tech Stack

This project uses the following technologies:

1. Vite
2. React
3. Tailwind CSS
