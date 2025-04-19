/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: "#333",
            h2: {
              fontWeight: "700",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              fontWeight: "600",
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
            },
            p: {
              marginBottom: "1.25rem",
            },
            ul: {
              marginLeft: "1.5rem",
              marginBottom: "1.25rem",
            },
            ol: {
              marginLeft: "1.5rem",
              marginBottom: "1.25rem",
            },
            a: {
              color: "#6d28d9",
              textDecoration: "underline",
              "&:hover": {
                color: "#4c1d95",
              },
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
              fontFamily: "monospace",
            },
            pre: {
              backgroundColor: "#1f2937",
              color: "#f9fafb",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
              marginBottom: "1.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
