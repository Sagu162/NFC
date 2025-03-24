/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            // 📁 Primary Colors
            colors: {
                primary: {
                    DEFAULT: "#4F46E5",
                    light: "#6C63FF",
                    dark: "#3A3BB2",
                },
                secondary: {
                    DEFAULT: "#10B981",
                    light: "#34D399",
                    dark: "#059669",
                },
                accent: {
                    DEFAULT: "#F59E0B",
                    light: "#FBBF24",
                    dark: "#D97706",
                },
            },

            // 📁 Background Colors
            backgroundColor: {
                landing: "#F3F4F6",
                dashboard: "#F9FAFB",
                widget: "#FFFFFF",
                modal: "#1F2937",
            },

            // 📁 Text Colors
            textColor: {
                primary: "#111827",
                secondary: "#6B7280",
                muted: "#9CA3AF",
                disabled: "#D1D5DB",
                heading: "#1F2937",
            },

            // 📁 Border Colors
            borderColor: {
                DEFAULT: "#E5E7EB",
                dark: "#9CA3AF",
                active: "#4F46E5",
                error: "#EF4444",
                success: "#34D399",
            },

            // 📁 Font Families
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                heading: ["Poppins", "sans-serif"],
                mono: ["Fira Code", "monospace"],
            },

            // 📁 Box Shadows
            boxShadow: {
                card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                widget: "0 4px 20px rgba(0, 0, 0, 0.1)",
                modal: "0 8px 30px rgba(0, 0, 0, 0.15)",
                button: "0 2px 5px rgba(0, 0, 0, 0.1)",
            },

            // 📁 Spacing
            spacing: {
                72: "18rem",
                84: "21rem",
                96: "24rem",
                128: "32rem",
            },

            // 📁 Border Radius
            borderRadius: {
                lg: "0.75rem",
                xl: "1.25rem",
                '2xl': "1.5rem",
                '3xl': "2rem",
                round: "50%",
            },

            // 📁 Animations
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
                slideUp: "slideUp 0.4s ease-in-out",
                pulse: "pulse 1s infinite",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
                pulse: {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                },
            },

            // 📁 Components and Widgets
            widget: {
                card: "bg-widget p-4 rounded-xl shadow-card",
                header: "bg-primary text-white p-4 rounded-t-xl",
                body: "text-secondary p-4",
            },

            // 📁 Buttons
            button: {
                primary: "bg-primary text-white px-4 py-2 rounded-lg shadow-button hover:bg-primary-dark",
                secondary: "bg-secondary text-white px-4 py-2 rounded-lg shadow-button hover:bg-secondary-dark",
                accent: "bg-accent text-white px-4 py-2 rounded-lg shadow-button hover:bg-accent-dark",
                disabled: "bg-muted text-disabled px-4 py-2 rounded-lg cursor-not-allowed",
            },

            // 📁 Charts
            chart: {
                bar: {
                    backgroundColor: "#4F46E5",
                    borderColor: "#3A3BB2",
                },
                line: {
                    backgroundColor: "rgba(16, 185, 129, 0.2)",
                    borderColor: "#10B981",
                },
                pie: {
                    backgroundColor: ["#F59E0B", "#10B981", "#4F46E5"],
                    borderColor: "#FFFFFF",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};