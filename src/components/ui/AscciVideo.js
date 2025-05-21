'use client';
import { memo } from 'react';

const AsciiVideo = ({ asciinemaUrl, width = 800, height = 400 }) => {
    // Espera un link tipo: https://asciinema.org/a/ID
    // Extrae el ID del asciicast
    let embedUrl = '';
    if (asciinemaUrl) {
        const match = asciinemaUrl.match(/asciinema\.org\/a\/([a-zA-Z0-9_-]+)/);
        if (match) {
            embedUrl = `https://asciinema.org/a/${match[1]}/embed`;
        }
    }

    if (!embedUrl) {
        return <div className="text-red-500">Asciinema URL inválida</div>;
    }

    return (
        <iframe
            src={embedUrl}
            width={width}
            height={height}
            allowFullScreen
            className="rounded-lg border"
            title="asciinema-player"
        />
    );
};

export const AsciiVideoMemo = memo(AsciiVideo);
AsciiVideoMemo.displayName = 'AsciiVideoMemo';