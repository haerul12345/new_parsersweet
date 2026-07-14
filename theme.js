const themes = {

    candy: {
        sweet: {
            "--bg-start": "#fff5fa",
            "--bg-end": "#eef4ff",
            "--card": "#ffffff",
            "--primary": "#ff4d8d",
            "--secondary": "#a855f7",
            "--accent": "#22c55e",
            "--text": "#31243f"
        },
        bitter: {
            "--bg-start": "#1b1224",
            "--bg-end": "#0f0b17",
            "--card": "#251932",
            "--primary": "#ff5b99",
            "--secondary": "#c084fc",
            "--accent": "#4ade80",
            "--text": "#f4ecff"
        }
    },

    blueberry: {
        sweet: {
            "--bg-start": "#eff6ff",
            "--bg-end": "#ede9fe",
            "--card": "#ffffff",
            "--primary": "#6366f1",
            "--secondary": "#a855f7",
            "--accent": "#38bdf8",
            "--text": "#2d3250"
        },
        bitter: {
            "--bg-start": "#111827",
            "--bg-end": "#1e1b4b",
            "--card": "#1f2937",
            "--primary": "#818cf8",
            "--secondary": "#c084fc",
            "--accent": "#38bdf8",
            "--text": "#eef2ff"
        }
    },

    cottoncandy: {
        sweet: {
            "--bg-start": "#eefcff",
            "--bg-end": "#f3e8ff",
            "--card": "#ffffff",
            "--primary": "#8b5cf6",
            "--secondary": "#06b6d4",
            "--accent": "#22c55e",
            "--text": "#25384a"
        },
        bitter: {
            "--bg-start": "#0c1520",
            "--bg-end": "#08100f",
            "--card": "#16212e",
            "--primary": "#a78bfa",
            "--secondary": "#22d3ee",
            "--accent": "#4ade80",
            "--text": "#efffff"
        }
    },

    mango: {
        sweet: {
            "--bg-start": "#fff7ed",
            "--bg-end": "#ffe4e6",
            "--card": "#ffffff",
            "--primary": "#f97316",
            "--secondary": "#ec4899",
            "--accent": "#a855f7",
            "--text": "#4a2f2a"
        },
        bitter: {
            "--bg-start": "#22110d",
            "--bg-end": "#140a0a",
            "--card": "#2d1914",
            "--primary": "#fb923c",
            "--secondary": "#f472b6",
            "--accent": "#c084fc",
            "--text": "#fff1eb"
        }
    },

    blueicecream: {
        sweet: {
            "--bg-start": "#f8fdff",
            "--bg-end": "#eaf4ff",
            "--card": "#ffffff",
            "--primary": "#60a5fa",
            "--secondary": "#38bdf8",
            "--accent": "#a78bfa",
            "--text": "#30415a"
        },
        bitter: {
            "--bg-start": "#101827",
            "--bg-end": "#0b1220",
            "--card": "#182233",
            "--primary": "#93c5fd",
            "--secondary": "#60a5fa",
            "--accent": "#c4b5fd",
            "--text": "#f0f7ff"
        }
    },

    grape: {
        sweet: {
            "--bg-start": "#f7f0ff",
            "--bg-end": "#ede9fe",
            "--card": "#ffffff",
            "--primary": "#8b5cf6",
            "--secondary": "#d946ef",
            "--accent": "#c084fc",
            "--text": "#35254a"
        },
        bitter: {
            "--bg-start": "#171023",
            "--bg-end": "#0f0a18",
            "--card": "#221731",
            "--primary": "#a78bfa",
            "--secondary": "#e879f9",
            "--accent": "#c084fc",
            "--text": "#f3efff"
        }
    },

    matcha: {
        sweet: {
            "--bg-start": "#f4fff1",
            "--bg-end": "#e8f5d4",
            "--card": "#ffffff",
            "--primary": "#6db33f",
            "--secondary": "#84cc16",
            "--accent": "#facc15",
            "--text": "#2f3e2f"
        },
        bitter: {
            "--bg-start": "#111813",
            "--bg-end": "#0a0f0d",
            "--card": "#17201a",
            "--primary": "#7ddc55",
            "--secondary": "#a3e635",
            "--accent": "#facc15",
            "--text": "#e8ffe8"
        }
    },

    mint: {
        sweet: {
            "--bg-start": "#ecfdf5",
            "--bg-end": "#d1fae5",
            "--card": "#ffffff",
            "--primary": "#10b981",
            "--secondary": "#22c55e",
            "--accent": "#38bdf8",
            "--text": "#234239"
        },
        bitter: {
            "--bg-start": "#0d1814",
            "--bg-end": "#08100d",
            "--card": "#17241d",
            "--primary": "#34d399",
            "--secondary": "#4ade80",
            "--accent": "#38bdf8",
            "--text": "#ecfdf5"
        }
    },

    strawberry: {
        sweet: {
            "--bg-start": "#fff1f5",
            "--bg-end": "#fce7f3",
            "--card": "#ffffff",
            "--primary": "#ec4899",
            "--secondary": "#c026d3",
            "--accent": "#fb7185",
            "--text": "#4a2c3f"
        },
        bitter: {
            "--bg-start": "#22111e",
            "--bg-end": "#140c18",
            "--card": "#2a1630",
            "--primary": "#ff5ea8",
            "--secondary": "#d946ef",
            "--accent": "#fb7185",
            "--text": "#f5e6ef"
        }
    },

    citrus: {
        sweet: {
            "--bg-start": "#fffef0",
            "--bg-end": "#ecfccb",
            "--card": "#ffffff",
            "--primary": "#eab308",
            "--secondary": "#84cc16",
            "--accent": "#22c55e",
            "--text": "#3d3b22"
        },
        bitter: {
            "--bg-start": "#18170a",
            "--bg-end": "#0f1207",
            "--card": "#232112",
            "--primary": "#facc15",
            "--secondary": "#a3e635",
            "--accent": "#4ade80",
            "--text": "#fefce8"
        }
    }
};

(() => {

    const THEME_KEY = "parserTheme";
    const MODE_KEY = "parserMode";

    let mode =
        localStorage.getItem(MODE_KEY) || "sweet";

    const selector =
        document.getElementById("themeSelector");


    if (
        selector &&
        window.location.pathname.endsWith("new_json.html")
    ) {
        //selector.disabled = true;
    }


    const btn =
        document.getElementById("themeBtn");

    const icon =
        document.getElementById("themeIcon");

    const text =
        document.getElementById("themeText");

    function applyTheme() {

        const theme =
            localStorage.getItem(THEME_KEY) || "candy";

        if (selector) {
            selector.value = theme;
        }

        const selected =
            themes[theme][mode];

        Object.entries(selected).forEach(
            ([key, value]) => {
                document.documentElement
                    .style
                    .setProperty(key, value);
            }
        );


        // Always expose SWEET colors
        const sweetTheme = themes[theme].sweet;

        document.documentElement.style.setProperty(
            "--sweet-primary",
            sweetTheme["--primary"]
        );

        document.documentElement.style.setProperty(
            "--sweet-secondary",
            sweetTheme["--secondary"]
        );


        document.documentElement.style.setProperty(
            "--sweet-bg-start",
            sweetTheme["--bg-start"]
        );

        document.documentElement.style.setProperty(
            "--sweet-bg-end",
            sweetTheme["--bg-end"]
        );



        if (icon) {
            icon.textContent =
                mode === "sweet"
                    ? "🍫"
                    : "🧁";
        }

        if (text) {
            text.textContent =
                mode === "sweet"
                    ? "Switch to Bitter Mode"
                    : "Switch to Sweet Mode";
        }
    }

    // ==========================
    // DROPDOWN EVENT
    // ==========================
    if (selector) {

        const savedTheme =
            localStorage.getItem(THEME_KEY);

        if (
            savedTheme &&
            themes[savedTheme]
        ) {
            selector.value = savedTheme;
        }

        selector.addEventListener(
            "change",
            () => {

                localStorage.setItem(
                    THEME_KEY,
                    selector.value
                );

                applyTheme();
            }
        );
    }


    console.log(
        "Saved theme:",
        localStorage.getItem(THEME_KEY)
    );

    console.log(
        "Selector value:",
        selector?.value
    );


    // ==========================
    // TOGGLE EVENT
    // ==========================
    if (btn) {

        btn.addEventListener(
            "click",
            () => {

                mode =
                    mode === "sweet"
                        ? "bitter"
                        : "sweet";

                localStorage.setItem(
                    MODE_KEY,
                    mode
                );

                applyTheme();
            }
        );
    }

    window.addEventListener("pageshow", () => {
        applyTheme();
    });

    // ==========================
    // INITIAL LOAD
    // ==========================
    applyTheme();


})();

