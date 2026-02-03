import { Switch } from "@/shared/ui/Switch";
import { useTheme } from '../model/useTheme';

export const ThemeToggle = () => {
    const { theme, toggle } = useTheme();

    return (
        <Switch theme={theme} onClick={toggle} />
    )
}