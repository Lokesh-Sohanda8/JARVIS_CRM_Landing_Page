import React from 'react';

export type IconName = 'arrow'|'play'|'search'|'shield'|'radar'|'database'|'upload'|'users'|'phone'|'whatsapp'|'mail'|'spark'|'check'|'lock'|'activity'|'chevron'|'bolt'|'menu'|'close'|'link'|'bar-chart'|'settings'|'filter'|'download'|'alert'|'file'|'target'|'eye'|'eye-off'|'message';

export function Icon({name, size=18, className, style}: {name: IconName; size?: number; className?: string; style?: React.CSSProperties}) {
  const p = {width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.7,strokeLinecap:'round' as const,strokeLinejoin:'round' as const, className, style};
  const paths: Record<IconName, React.ReactNode> = {
    arrow:<><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    play:<><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4z" fill="currentColor" stroke="none"/></>,
    search:<><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 4.2 4.2"/></>,
    shield:<><path d="M12 3 20 6v5c0 5.1-3.3 8.4-8 10-4.7-1.6-8-4.9-8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    radar:<><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v8.5l6 6"/><path d="M3.5 12H12"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/></>,
    database:<><ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/><path d="M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6"/></>,
    upload:<><path d="M12 15V4"/><path d="m8 8 4-4 4 4"/><path d="M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"/></>,
    users:<><path d="M16 20v-1.2c0-2.1-1.9-3.8-4.2-3.8H8.2C5.9 15 4 16.7 4 18.8V20"/><circle cx="10" cy="8" r="3.2"/><path d="M16 5.2a3 3 0 0 1 0 5.7M19.8 20v-1.1c0-1.7-1-3.1-2.5-3.7"/></>,
    phone:<><path d="M7 4h2l1.2 4-2 1.5a15 15 0 0 0 6.3 6.3l1.5-2 4 1.2v2c0 1.1-.9 2-2 2C10.3 19 5 13.7 5 7a2 2 0 0 1 2-2z"/></>,
    whatsapp:<><path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z"/><path d="M8.3 8.1c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.8c.1.3.1.5-.1.7l-.6.7c.8 1.4 1.8 2.3 3.2 3.1l.7-.7c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.3.6-.3.9-1 1.4-1.8 1.5-2.2.2-6.6-2.8-7.3-6.4-.2-.8.1-1.5.6-2z"/></>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    spark:<><path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4z"/><path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6z"/></>,
    check:<path d="m5 12 4 4L19 6"/>,
    lock:<><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    activity:<><path d="M3 12h4l2-6 4 12 2-6h6"/></>,
    chevron:<path d="m8 10 4 4 4-4"/>,
    bolt:<path d="m13 2-9 12h7l-1 8 9-12h-7z"/>,
    menu:<><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></>,
    close:<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    link:<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
    'bar-chart':<><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    filter:<><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></>,
    download:<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    alert:<><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    file:<><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></>,
    target:<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    eye:<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    'eye-off':<><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>,
    message:<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>
  };
  return <svg {...p}>{paths[name] || paths.check}</svg>;
}
