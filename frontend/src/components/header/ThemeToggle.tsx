import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Translator } from 'components/i18n';

interface Props {
  className?: string;
}

export function ThemeToggle({ className }: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          id="theme-toggle"
          variant="ghost"
          size="icon"
          className={cn(
            'text-muted-foreground hover:text-muted-foreground',
            className
          )}
        >
          <Sun className="!size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute !size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Translator path="navigation.header.theme.light" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Translator path="navigation.header.theme.dark" />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Translator path="navigation.header.theme.system" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
