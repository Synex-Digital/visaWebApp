/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                'container': '1233px',
            },
            spacing: {
                "48%": "48%",
            },
            colors: {
                primary: "#253D30",
                secondary: "#FDC24C",
                ptag: "#516358",
                faqAnsActive: "#476354",
                faqAnsNotActive: "#516358",
                studyPageBanner: "rgba(253, 194, 76, .24)",
                studyPagePtag: "#344A3E",
                courseFeeBorder: "rgba(52, 74, 62, .2)",
                courseFeeText: "rgba(52, 74, 62, .84)",

                // new colors
                primaryGreen1: '#725AE4',
                primaryGreen1shade1: 'rgba(114, 90, 228, .80)',
                primaryGreen1shade2: 'rgba(114, 90, 228, .84)',
                primaryGreen2: '#8779F7',
                primaryGreen2shade1: 'rgba(135, 121, 247, .84)',
                primaryGreen2shade2: 'rgba(135, 121, 247, .52)',
                primaryGreen3: '#EAE6FE',
                primaryGreen4: '#EBEBFF',
                primaryGreen5: '#8B91B0',
                primaryGreen6: '#ECE9FD',
                primaryGreen7: '#E8EDFE',
                secondaryYellow1: "#64FFD8",
                secondaryYellow2: "rgba(100, 255, 216, .24)",
                secondaryYellow3: "rgba(100, 255, 216, .80)",
                Black: "#110053",
                Ash1: "#ABADAC",
                Ash2: "rgba(156, 156, 156, .70)",
                Ash3: "rgba(217, 217, 217, .50)",

                BlackShade: "rgba(0, 0, 0, .4)",
            },
            fontSize: {
                '28px': '28px',
                '36px': '36px',
            },
            letterSpacing: {
                custom: '5%',
            },
            borderRadius: {
                '20px': '20px',
            },
            spacing: {
                '15px': '15px',
                '18px': '18px',
                '28px': '28px',
                '33px': '33px',
                '62': '62px',
                '160px': '160px',
                '454': '454px',
                '520': '520px',
                '553': '553px',
                '658': '658px',
                '47px': '47px',
                '61px': '61px',
                '72px': '72px',
                '55px': '55px',
                '151px': '151px',
            },
            boxShadow: {
                'sidebar': [
                    '2px 4px 4px rgba(52, 74, 62, 0.21)',
                    '-2px -2px 4px rgba(52, 74, 62, 0.21)',
                ],
                'Content': '0 0 2px rgba(52, 74, 62, 0.84)',
                'navbarDropdown': '0px 8px 16px 0px rgba(0, 0, 0, 0.1)',
            },
            dropShadow: {
                'custom': [
                    '2px 4px 4px rgba(52, 74, 62, 0.21)',
                    '-2px -2px 4px rgba(52, 74, 62, 0.21)',
                ]
            }
        },
    },
    plugins: [],
};
