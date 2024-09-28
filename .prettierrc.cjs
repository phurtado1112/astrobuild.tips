module.exports = {
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        useTabs: true,
        plugins: [
            require("prettier-plugin-astro"), 
             require("prettier-plugin-tailwindcss"),
        ],
        overrides: [
            {
                files: "*.astro",
                options: {
                    parser: "astro"
                }
            }
        ],
        
        trailingComma: "none",
        printWidth: 100,
        pluginSearchDirs: false
};