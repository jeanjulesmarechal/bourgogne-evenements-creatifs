import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Palette } from "lucide-react";

interface VersionToggleProps {
  isV2: boolean;
  onToggle: () => void;
  variant?: 'fixed' | 'inline';
  darkMode?: boolean; // Pour HeaderV2 (fond rouge)
}

const VersionToggle = ({ isV2, onToggle, variant = 'fixed', darkMode = false }: VersionToggleProps) => {
  if (variant === 'fixed') {
    return (
      <div className="fixed top-4 left-4 z-[100] bg-white/95 hover:bg-white border-2 border-gray-200 shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 font-montserrat">
        <Palette className="w-5 h-5 text-gray-600" />
        <div className="flex items-center gap-2">
          <Label htmlFor="version-toggle" className="text-sm font-semibold text-gray-700 cursor-pointer">
            V1
          </Label>
          <Switch
            id="version-toggle"
            checked={isV2}
            onCheckedChange={onToggle}
            className="data-[state=checked]:bg-[#611427]"
          />
          <Label htmlFor="version-toggle" className="text-sm font-semibold text-gray-700 cursor-pointer">
            V2
          </Label>
        </div>
      </div>
    );
  }

  // Version inline pour la navbar
  const textColor = darkMode ? 'text-white/80' : 'text-gray-700';
  const iconColor = darkMode ? 'text-white/80' : 'text-gray-600';
  
  return (
    <div className="flex items-center gap-2 font-montserrat">
      <Palette className={`w-4 h-4 ${iconColor}`} />
      <Label htmlFor="version-toggle-nav" className={`text-xs font-semibold ${textColor} cursor-pointer`}>
        V1
      </Label>
      <Switch
        id="version-toggle-nav"
        checked={isV2}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-[#611427]"
      />
      <Label htmlFor="version-toggle-nav" className={`text-xs font-semibold ${textColor} cursor-pointer`}>
        V2
      </Label>
    </div>
  );
};

export default VersionToggle;
