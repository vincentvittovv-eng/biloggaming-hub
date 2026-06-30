const weapons = {
    vmp: {
        title: "VMP",
        image: "vmp.png",
        type: "SMG",
        badge: "⭐ META",
        rating: "98/100",
        style: "Fast movement • Ranked SMG",
        pros: ["Fast mobility", "Strong close range", "Good for aggressive play"],
        cons: ["Needs good aim control", "Not ideal for long range"]
    },
    tundra: {
        title: "Tundra",
        image: "tundra.png",
        type: "Sniper",
        badge: "🎯 SNIPER",
        rating: "96/100",
        style: "Long range • High accuracy",
        pros: ["Great accuracy", "Strong ranked sniper", "Clean long range pick"],
        cons: ["Needs timing", "Punishing if you miss"]
    },
    sten: {
        title: "Sten",
        image: "sten.png",
        type: "SMG",
        badge: "⚡ FAST TTK",
        rating: "92/100",
        style: "SMG • Fast kill potential",
        pros: ["Fast kill potential", "Good mobility", "Great for close fights"],
        cons: ["Needs recoil control", "Falls off at range"]
    },
    so14wildfire: {
        title: "SO14 Wildfire",
        image: "so14wildfire.png",
        type: "AR",
        badge: "🏆 RANKED",
        rating: "93/100",
        style: "AR build • Ranked setup",
        pros: ["Strong ranked build", "Good pressure", "Reliable damage"],
        cons: ["Can feel heavy", "Needs control"]
    },
    so14: {
        title: "SO14",
        image: "so14.png",
        type: "AR",
        badge: "🏆 RANKED",
        rating: "91/100",
        style: "AR build • Stable control",
        pros: ["Stable control", "Good mid range", "Ranked friendly"],
        cons: ["Not the fastest mobility", "Needs good positioning"]
    },
    switchblade: {
        title: "Switchblade",
        image: "switchblade.png",
        type: "SMG",
        badge: "💥 CLOSE RANGE",
        rating: "90/100",
        style: "SMG • All-around",
        pros: ["Easy to use", "Good close range", "Balanced SMG"],
        cons: ["Can lose to faster TTK guns", "Mid range is average"]
    },
    pdw: {
        title: "PDW",
        image: "pdw.png",
        type: "SMG",
        badge: "🔥 AGGRESSIVE",
        rating: "89/100",
        style: "SMG • Spray control",
        pros: ["Good magazine feel", "Easy spray", "Good for pressure"],
        cons: ["Not always meta", "Needs close range fights"]
    },
    msmc: {
        title: "MSMC",
        image: "msmc.png",
        type: "SMG",
        badge: "🔥 AGGRESSIVE",
        rating: "91/100",
        style: "Close range • Fast push",
        pros: ["Fast push weapon", "Strong close range", "Fun aggressive build"],
        cons: ["Harder recoil", "Weak if you overextend"]
    },
    mow: {
        title: "MOW",
        image: "mow.png",
        type: "LMG",
        badge: "🛡 HEAVY FIRE",
        rating: "88/100",
        style: "Heavy pressure",
        pros: ["Heavy firepower", "Good pressure", "Strong hold weapon"],
        cons: ["Slow movement", "Needs patience"]
    },
    locus: {
        title: "Locus",
        image: "locus.png",
        type: "Sniper",
        badge: "🎯 SNIPER",
        rating: "94/100",
        style: "Sniper • Ranked pick",
        pros: ["Classic sniper feel", "Good ranked pick", "Clean shots"],
        cons: ["Needs accuracy", "Bad close range"]
    },
    lachmann: {
        title: "Lachmann",
        image: "lachmann.png",
        type: "AR",
        badge: "✅ STABLE",
        rating: "87/100",
        style: "AR • Easy control",
        pros: ["Easy control", "Stable aim", "Good beginner-friendly AR"],
        cons: ["Not the highest damage", "Average mobility"]
    },
    krm: {
        title: "KRM",
        image: "krm.png",
        type: "Shotgun",
        badge: "🔥 AGGRESSIVE",
        rating: "90/100",
        style: "Shotgun • One shot potential",
        pros: ["One shot potential", "Scary close range", "Great for aggressive players"],
        cons: ["Very range dependent", "Miss = danger"]
    },
    dlq: {
        title: "DLQ",
        image: "dlq.png",
        type: "Sniper",
        badge: "🎯 SNIPER",
        rating: "95/100",
        style: "Sniper • Classic setup",
        pros: ["Classic CODM sniper", "Reliable feel", "Strong ranked sniper"],
        cons: ["Needs good aim", "Slow if rushed"]
    },
    ak47: {
        title: "AK47",
        image: "ak47.png",
        type: "AR",
        badge: "⭐ META",
        rating: "93/100",
        style: "AR • Strong ranked build",
        pros: ["Strong damage", "Good ranked AR", "Reliable mid range"],
        cons: ["Needs recoil control", "Can feel slower"]
    }
};

function copyText(id) {
    const text = document.getElementById(id).innerText.trim();
    const button = event.target;
    const oldText = button.innerText;

    navigator.clipboard.writeText(text).then(() => {
        button.innerText = "Copied!";
        button.style.background = "linear-gradient(135deg, #008a2e, #00c853)";

        setTimeout(() => {
            button.innerText = oldText;
            button.style.background = "";
        }, 1500);
    });
}

function filterLoadouts(category, button) {
    const loadouts = document.querySelectorAll(".loadout");

    loadouts.forEach((loadout) => {
        if (category === "all" || loadout.classList.contains(category)) {
            loadout.style.display = "block";
        } else {
            loadout.style.display = "none";
        }
    });

    document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}

function openBuild(key) {
    const weapon = weapons[key];

    if (!weapon) {
        return;
    }

    document.getElementById("popupTitle").innerText = weapon.title;
    document.getElementById("popupImage").src = weapon.image;

    document.getElementById("popupBadge").innerText = weapon.badge;
    document.getElementById("popupType").innerText = weapon.type;
    document.getElementById("popupRating").innerText = weapon.rating;
    document.getElementById("popupStyle").innerText = weapon.style;

    document.getElementById("popupPros").innerHTML = weapon.pros
        .map(item => `<li>✔ ${item}</li>`)
        .join("");

    document.getElementById("popupCons").innerHTML = weapon.cons
        .map(item => `<li>✖ ${item}</li>`)
        .join("");

    document.getElementById("buildPopup").classList.add("show");
}

function closeBuild() {
    document.getElementById("buildPopup").classList.remove("show");
}

const buildPopup = document.getElementById("buildPopup");

if (buildPopup) {
    buildPopup.addEventListener("click", function(event) {
        if (event.target === buildPopup) {
            closeBuild();
        }
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeBuild();
    }
});

const weaponSearch = document.getElementById("weaponSearch");

if (weaponSearch) {
    weaponSearch.addEventListener("input", function () {
        const searchText = weaponSearch.value.toLowerCase();
        const loadouts = document.querySelectorAll(".loadout");

        loadouts.forEach((loadout) => {
            const weaponName = loadout.querySelector("h3").innerText.toLowerCase();

            if (weaponName.includes(searchText)) {
                loadout.style.display = "block";
            } else {
                loadout.style.display = "none";
            }
        });
    });
}