import { useState, useEffect } from "react";

export interface CountryInfo {
  code: string;
  label: string;
  name: string;
}

const FALLBACK_COUNTRIES: CountryInfo[] = [
  { code: "+1", label: "US", name: "United States" },
  { code: "+44", label: "GB", name: "United Kingdom" },
  { code: "+61", label: "AU", name: "Australia" },
  { code: "+91", label: "IN", name: "India" },
  { code: "+49", label: "DE", name: "Germany" },
  { code: "+33", label: "FR", name: "France" },
  { code: "+81", label: "JP", name: "Japan" },
  { code: "+65", label: "SG", name: "Singapore" },
];

export const useCallLogic = () => {
  const [countries, setCountries] = useState<CountryInfo[]>(FALLBACK_COUNTRIES);
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [loadingText, setLoadingText] = useState("Initializing connection...");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,idd,cca2",
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
            };
          })
          .filter((c: CountryInfo) => c.code && c.label)
          .sort((a: CountryInfo, b: CountryInfo) =>
            a.name.localeCompare(b.name),
          );

        if (formatted.length > 0) {
          setCountries(formatted);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
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
    setPhoneNumber("");
    setName("");
    setEmail("");
    setErrorMsg("");
  };

  const handleCall = async (e: React.FormEvent) => {
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
