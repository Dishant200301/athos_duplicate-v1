import { Mail, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "/images/english.svg" },
  { code: "fr", name: "French", flag: "/images/france.svg" },
  { code: "es", name: "Spanish", flag: "/images/spanish.svg" },
  { code: "de", name: "German", flag: "/images/german.svg" },
  { code: "ru", name: "Russian", flag: "/images/russian.svg" },
  { code: "ja", name: "Japanese", flag: "/images/japanese.svg" },
  { code: "ko", name: "Korean", flag: "/images/korean.svg" },
];

const TopHeader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <header className="h-[53px] w-full bg-background border-b border-border">
      <div className="max-w-[1290px] mx-auto h-full flex items-center justify-between px-4 xl:px-4">
        {/* Email */}
        <a
          href="mailto:inquiry@athoscollagen.com"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="text-xs sm:text-sm">inquiry@athoscollagen.com</span>
        </a>

        {/* Language Selector - Hidden on mobile, shown on desktop */}
        <div
          className="relative hidden lg:block"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center gap-2 text-sm text-white transition-colors bg-[#1d7aa3] rounded-md py-2 px-2">
            <img
              src={selectedLanguage.flag}
              alt={selectedLanguage.name}
              className="w-6 h-4 object-cover rounded-sm"
            />
            <span>{selectedLanguage.name}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full bg-white border border-gray-200 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] min-w-[180px] z-[1000] overflow-hidden py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-all duration-200 ${selectedLanguage.code === language.code
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                  />
                  <span className="font-medium">{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
