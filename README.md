# Content Management Client for Soy Costa Rica App

This is the Content Management Client to register and update places, articles, users, etc. for the Soy Costa Rica App (SCRApp)

## Technologies Used

- Modern React
- Typescript
- Plain CSS / CSS Modules
- Material UI
- Figma Design Tool
- React Router DOM 
- AWS SDK for JS v3 / AWS Cognito Auth
- React Hook Form / Zod Schema Validation / React Select
- React Query
- React Table
- Axios HTTP Client
- Passport JWT / Axios Interceptors
- Uppy File Uploader
- AWS SDK / S3-Client / Cloudflare R2 Object Storage
- ExifReader
- React DnD
- D3 (Data Visualization)
- Leaflet / Leaflet React

## Git Setup

```sh
git init
git add *
git commit -m "<message>"
git branch -M main
git remote add origin https://github.com/efgarro/2024-v03-SCR-CMS.git
git push -u origin main
```

#### Other commands

```sh
git remote -v
git remote set-url origin https://github.com/efgarro/2024-v03-SCR-CMApp.git // Renaming URL
```

"origin" is the shorthand for the repo's URL "https://github.com/efgarro/..."

```sh
git config --system --list
git config --global --list
git config --local --list
git config --list --show-origin
```

## CSS Naming Convention

#### Layout Containers Classes

```sh
.layout_screen
.layout_container
.layout_wrapper
.layout_box
.layout_wrapperOne, .layout_wrapperTwo, etc.
.layout_flex-row
.layout_flex-col
```

#### UI Components / Modules Classes

```sh
.header_menu, .header_logo, .header_searchBox, .header_<name>
.footer_menu, .footer_logo, .footer_searchBox, .footer_<name>
.sidebar_box, sidebar_title, sidebar_<name>
.navbar_<name>
.main-content_<name>
.caseOne_<name>, .caseTwo_<name>
.podOne_<name>, .podTwo_<name>
.restaBox_<name>
```

#### Organizing Properties

```sh
/* by Kevin Powel */
/* https://www.youtube.com/watch?v=3Y03OSNw6zo */

/* display */
/* positioning */
/* box-model */
/* typography*/
/* manipulating */
/* miscellaneous */
```

#### Breaking Points - CMApp

| Screen Type | Screen Size | Container Size |
| ----------- | ----------- | -------------- |
| Small       | >=576px     | 540px          |
| Medium      | >=768px     | 720px          |
| Large       | >=992px     | 960px          |
| X-Large     | >=1200px    | 1140px         |

## App.tsx Highlights

- Include all routes in this component

## References

- search for openstreetmap logo / icon
- govisitcostarica.com
- visitcostarica.com
- https://www.arcgis.com/apps/webappviewer/index.html?id=6379ba7935a047ca99195f5e0c3cece9#
- https://www.sinabi.go.cr/contactenos/preguntele_bibliotecaria.aspx
- https://designmodo.com/bootstrap-5-layout/
