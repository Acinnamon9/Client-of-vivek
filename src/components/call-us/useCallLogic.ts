import { useState, useEffect, FormEvent } from "react";

export interface CountryInfo {
  code: string;
  label: string;
  name: string;
  flag: string; // URL to flag image
}

const FALLBACK_COUNTRIES: CountryInfo[] = [
  {
    code: "+1",
    label: "US",
    name: "United States",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    code: "+44",
    label: "GB",
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    code: "+61",
    label: "AU",
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
  },
  {
    code: "+91",
    label: "IN",
    name: "India",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    code: "+49",
    label: "DE",
    name: "Germany",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    code: "+33",
    label: "FR",
    name: "France",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    code: "+81",
    label: "JP",
    name: "Japan",
    flag: "https://flagcdn.com/jp.svg",
  },
  {
    code: "+65",
    label: "SG",
    name: "Singapore",
    flag: "https://flagcdn.com/sg.svg",
  },
];

export const useCallLogic = () => {
  const [countries, setCountries] = useState<CountryInfo[]>(FALLBACK_COUNTRIES);

  // Initialize state from localStorage if available
  const [countryCode, setCountryCode] = useState(
    () => localStorage.getItem("ravan_country_code") || "+1",
  );
  const [phoneNumber, setPhoneNumber] = useState(
    () => localStorage.getItem("ravan_phone_number") || "",
  );
  const [name, setName] = useState(
    () => localStorage.getItem("ravan_user_name") || "",
  );
  const [email, setEmail] = useState(
    () => localStorage.getItem("ravan_user_email") || "",
  );
  const [isCalling, setIsCalling] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [loadingText, setLoadingText] = useState("Initializing connection...");

  // Persist to localStorage with a debounce to prevent excessive disk writes during typing
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("ravan_country_code", countryCode);
      localStorage.setItem("ravan_phone_number", phoneNumber);
      localStorage.setItem("ravan_user_name", name);
      localStorage.setItem("ravan_user_email", email);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countryCode, phoneNumber, name, email]);

  useEffect(() => {
    const fetchCountries = async () => {
      const cached = sessionStorage.getItem("ravan_countries_cache");
      if (cached) {
        setCountries(JSON.parse(cached));
        return;
      }

      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags",
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        const formatted: CountryInfo[] = data
          .map((c: any) => {
            const root = c.idd?.root || "";
            const suffix = c.idd?.suffixes?.[0] || "";
            return {
              code: root + (c.idd?.suffixes?.length === 1 ? suffix : ""),
              label: c.cca2,
              name: c.name.common,
              flag: c.flags?.svg || c.flags?.png || "",
            };
          })
          .filter((c: CountryInfo) => c.code && c.label)
          .sort((a: CountryInfo, b: CountryInfo) =>
            a.name.localeCompare(b.name),
          );

        if (formatted.length > 0) {
          setCountries(formatted);
          sessionStorage.setItem("ravan_countries_cache", JSON.stringify(formatted));
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Auto-detect country code from IP
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country_calling_code) {
          setCountryCode(data.country_calling_code);
        }
      } catch (error) {
        console.error("Failed to detect country code:", error);
      }
    };
    detectCountry();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isCalling) {
      const texts = [
        "Encrypting handshake...",
        "Allocating AI voice node...",
        "Routing via low-latency bridge...",
        "Verifying security tokens...",
        "Establishing voice link...",
      ];
      let i = 0;
      setLoadingText(texts[0]);
      const interval = setInterval(() => {
        i = (i + 1) % texts.length;
        setLoadingText(texts[i]);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [isCalling]);

  const canMakeCall = () => {
    const today = new Date().toDateString();
    const storageKey = `daily_call_count_${today}`;
    const count = parseInt(localStorage.getItem(storageKey) || "0", 10);
    return count < 30;
  };

  const incrementCallCount = () => {
    const today = new Date().toDateString();
    const storageKey = `daily_call_count_${today}`;
    const count = parseInt(localStorage.getItem(storageKey) || "0", 10);
    localStorage.setItem(storageKey, (count + 1).toString());
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrorMsg("");
    // We keep name, email, and countryCode for persistence
    // PhoneNumber is cleared to allow a fresh entry for a new call
    setPhoneNumber("");
  };

  const handleCall = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const hp = (document.getElementById("website_hp") as HTMLInputElement)
      ?.value;
    if (hp) {
      console.warn("Bot detected.");
      return;
    }

    if (!name.trim() || !email.trim() || !phoneNumber.trim()) {
      setErrorMsg("Required details missing.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Invalid email format.");
      return;
    }

    const digitsOnly = phoneNumber.replace(/\D/g, "");
    if (digitsOnly.length < 4) {
      setErrorMsg("Invalid phone number.");
      return;
    }

    if (!canMakeCall()) {
      setErrorMsg("Daily limit reached (3/3).");
      return;
    }

    setIsCalling(true);

    let fullNumber = "";
    if (phoneNumber.trim().startsWith("+")) {
      fullNumber = phoneNumber.trim();
    } else {
      fullNumber = `${countryCode}${phoneNumber.trim()}`;
    }

    const payload = {
      email: email,
      receiver_number: fullNumber,
      name: name,
      new_agent: 172,
      access_key: "testmycall",
      calling_number: "+13364438645",
    };

    try {
      const minDelayPromise = new Promise((resolve) =>
        setTimeout(resolve, 3000),
      );
      const fetchPromise = fetch(
        "https://app.closerx.ai/api/testcall/voizerfreeaccount/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const [res] = await Promise.all([fetchPromise, minDelayPromise]);

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      await res.json();
      incrementCallCount();
      setIsCalling(false);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Speed Call Error:", err);
      let msg = "Connection failed. Retry?";
      if (err.message.includes("401") || err.message.includes("403")) {
        msg = "Auth Error.";
      } else if (err.message.includes("429")) {
        msg = "Too many requests.";
      }
      setErrorMsg(msg);
      setIsCalling(false);
    }
  };

  return {
    countries,
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    name,
    setName,
    email,
    setEmail,
    isCalling,
    isSubmitted,
    errorMsg,
    currentTime,
    loadingText,
    handleCall,
    resetForm,
  };
};
