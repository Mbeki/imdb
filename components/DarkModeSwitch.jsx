'use client';
import { MdLightMode } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            className='cursor-pointer text-xl hover:bg-amber-500'
            onClick={() => setTheme('light')}
          />
        ) : (
          <FaMoon
            className='cursor-pointer text-xl hover:bg-amber-500'
            onClick={() => setTheme('dark')}
          />
        ))}
    </>
  );
}

export default DarkModeSwitch;
