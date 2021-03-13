<p align="center">
  <a href="https://cakraz-emlak.vercel.app">
    <img alt="Gatsby" src="src/images/logo.png" width="100" />
  </a>
</p>
<h1 align="center">
  Çakraz Emlak
</h1>

Real estate website wtih Gatsby & Strapi.

## 🚀 Setup CMS

1.  **Clone Strapi CMS**

    Clone [cakraz-emlak-cms](https://github.com/oktay/cakraz-emlak-cms) for backend and content managment. **Follow instructions in the [`cakraz-emlak-cms/README.md`](https://github.com/oktay/cakraz-emlak-cms/blob/master/README.md) file.**

    ```shell
    # clone repo
    git clone https://github.com/oktay/cakraz-emlak-cms
    cd cakraz-emlak-cms
    yarn install
    ```

2.  **Start Strapi Server**

    ```shell
    yarn develop
    ```

    Your backend/cms is now running at `http://localhost:1337`!

    \*Note: If your first time, you need create admin user, create **at least one content for each content type** and activate **`find`**, **`findone`** permissions for content types **otherwise you cant run gatsby server.\***

## 🌟 Run Frontend

When Strapi part is done and running, you can start develop frontend part.

1.  **Clone Frontend**

    ```shell
    git clone https://github.com/oktay/cakraz-emlak
    cd cakraz-emlak
    yarn install
    ```

2.  **Run server**

    ```shell
    yarn develop
    ```

    Your site is now running at `http://localhost:8000!`

    _Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the Gatsby tutorial._

    ### ❤ Icons

    When you want use new custom icon, just place svg file to `src/icons` directory and run icon script

    ```shell
    yarn icon
    ```

    This script creates new icons react component

    ```shell
    # yarn icon script output:

     $ svgr src/icons -d src/components/icons --icon --replace-attr-values "#1C1C1C=currentColor"
    src/icons/chevron-down.svg -> src/components/icons/ChevronDown.js
    src/icons/hamburger.svg -> src/components/icons/Hamburger.js
    src/icons/cakraz.svg -> src/components/icons/Cakraz.js
    src/icons/location.svg -> src/components/icons/Location.js
    src/icons/phone.svg -> src/components/icons/Phone.js
    src/icons/email.svg -> src/components/icons/Email.js
    src/icons/slider-next.svg -> src/components/icons/SliderNext.js
    src/icons/slider-previous.svg -> src/components/icons/SliderPrevious.js
    src/icons/times.svg -> src/components/icons/Times.js
    Done in 4.58s.
    ```
